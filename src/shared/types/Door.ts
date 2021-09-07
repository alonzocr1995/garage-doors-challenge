export interface IDoor {
  id: number;
  status: DoorStatus;
  time: number;
}

export enum DoorStatus {
  OPEN = "open",
  CLOSE = "close",
}

export const initialDoors: IDoor[] = [
  { id: 1, status: DoorStatus.CLOSE, time: 0 },
  { id: 2, status: DoorStatus.CLOSE, time: 0 },
];
