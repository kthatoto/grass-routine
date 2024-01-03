import { create } from "zustand";
import { listRoutines, Routine } from "@/models/routine";

interface RoutinesStore {
  routines: Routine[];
  getRoutines: (uid: string) => Promise<void>;
}

export default create<RoutinesStore>((set) => {
  const getRoutines = async (uid: string) => {
    const routines = await listRoutines(uid);
    set({ routines });
  };

  return {
    routines: [],
    getRoutines,
  };
});
