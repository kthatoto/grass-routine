export const ROUTINES_COLLECTION_NAME = "routines";

export interface Routine {
  title: string;
  lastTime: Date;
  total: number;
  unit: string;
  archived: boolean;
}
