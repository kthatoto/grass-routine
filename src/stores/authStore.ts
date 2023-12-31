import { onAuthStateChanged, signInWithPopup, signOut, UserInfo } from "firebase/auth";
import { create } from "zustand";
import { auth, provider } from "@/firebase";

interface AuthStore {
  user: UserInfo | null;
  loading: boolean;
  error:  unknown | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export default create<AuthStore>((set) => {
  onAuthStateChanged(auth, (user) => {
    set({ user, loading: false });
  });

  return {
    user: null,
    loading: true,
    error: null,
    signInWithGoogle: async () => {
      set({ loading: true });
      try {
        const userCredential = await signInWithPopup(auth, provider);
        set({ user: userCredential.user, loading: false, error: null });
      } catch (error) {
        set({ loading: false, error });
      }
    },
    signOut: async () => {
      set({ loading: true });
      try {
        await signOut(auth);
        set({ user: null, loading: false, error: null });
      } catch (error) {
        set({ loading: false, error });
      }
    },
  };
});
