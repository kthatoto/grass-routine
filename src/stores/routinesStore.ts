import { create } from "zustand";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { Routine } from "@/models/routine";
import { FIELDS_COLLECTION_NAME } from "@/models/field";
import { ROUTINES_COLLECTION_NAME } from "@/models/routine";

interface RoutinesStore {
  routines: Routine[];
  getRoutines: (uid: string) => Promise<void>;
}

export default create<RoutinesStore>((set) => {
  const getRoutines = async (uid: string) => {
    const fieldDocRef = doc(db, FIELDS_COLLECTION_NAME, uid);
    const routinesRef = collection(fieldDocRef, ROUTINES_COLLECTION_NAME);
    const routineDocs = await getDocs(routinesRef);
    const routines = routineDocs.docs.map((routineDoc) => {
      return routineDoc.data() as Routine;
    });
    set({ routines });
  };

  return {
    routines: [],
    getRoutines,
  };
});
