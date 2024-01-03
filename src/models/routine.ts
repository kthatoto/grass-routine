import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { FIELDS_COLLECTION_NAME } from "@/models/field";

export const ROUTINES_COLLECTION_NAME = "routines";

export interface Routine {
  id: string;
  title: string;
  unit: string;
  lastTime: Date | null;
  total: number;
  memo: string | null;
  archived: boolean;
}

interface RoutineParams {
  title: string;
  unit: string;
  memo: string | null;
}

export const listRoutines = async (uid: string) => {
  const fieldDocRef = doc(db, FIELDS_COLLECTION_NAME, uid);
  const routinesRef = collection(fieldDocRef, ROUTINES_COLLECTION_NAME);
  const routineDocs = await getDocs(routinesRef);
  return routineDocs.docs.map((routineDoc) => {
    return {
      id: routineDoc.id,
      ...routineDoc.data(),
    } as Routine;
  });
};

export const addRoutine = async (uid: string, params: RoutineParams) => {
  const fieldDocRef = doc(db, FIELDS_COLLECTION_NAME, uid);
  const routinesRef = collection(fieldDocRef, ROUTINES_COLLECTION_NAME);
  await addDoc(
    routinesRef,
    {
      ...params,
      total: 0,
      archived: false,
      lastTime: null,
    }
  );
};
