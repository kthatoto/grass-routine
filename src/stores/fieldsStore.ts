import { create } from "zustand";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { FIELDS_COLLECTION_NAME } from "@/models/field";

interface FieldsStore {
  touchField: (uid: string) => void;
}

export default create<FieldsStore>(() => {
  const touchField = async (uid: string) => {
    const fieldDocRef = doc(db, FIELDS_COLLECTION_NAME, uid);
    const fieldDoc = await getDoc(fieldDocRef);
    if (fieldDoc.exists()) return;
    await setDoc(fieldDocRef, {});
  };

  return {
    touchField,
  };
});
