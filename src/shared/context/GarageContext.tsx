import React, { useCallback, useState } from "react";
import { doorAnimationTime } from "../../modules/Remote/constants";
import { IDoor, DoorStatus, initialDoors } from "../types/Door";

interface IGarageContext {
  doors: IDoor[];
  handleGarageDoor: (id: number, status: DoorStatus) => void;
}

const GarageContext = React.createContext({
  doors: [],
} as any as IGarageContext);

const GarageProvider: React.FC = ({ children }) => {
  const [doors, setDoors] = useState<IDoor[]>([...initialDoors]);

  const handleGarageDoor = useCallback(
    (id: number, status: DoorStatus) => {
      let doorIndex: number;
      const initialStatusChangeTime = performance.now();
      setDoors((prev) => {
        const prevDoors = [...prev];
        doorIndex = prevDoors.findIndex((door) => door.id === id);
        if (doorIndex > -1) {
          prevDoors[doorIndex].status = status;
        }
        return prevDoors;
      });

      setTimeout(() => {
        setDoors((prev) => {
          const prevDoors = [...prev];
          if (doorIndex > -1) {
            prevDoors[doorIndex].time =
              (performance.now() - initialStatusChangeTime) / 1000;
          }
          return prevDoors;
        });
      }, doorAnimationTime);
    },
    [setDoors]
  );

  return (
    <GarageContext.Provider
      value={{
        doors,
        handleGarageDoor,
      }}
    >
      {children}
    </GarageContext.Provider>
  );
};

export { GarageContext, GarageProvider };
