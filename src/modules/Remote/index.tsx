import React from "react";
import { useGarage } from "../../shared/hooks/useGarage";
import Control from "./components/Control";
import classes from "./Remote.module.css";

const Remote: React.FC = () => {
  const { doors, handleGarageDoor } = useGarage();

  console.log("doors", doors);

  return (
    <div className={classes.container}>
      {doors.map((door) => (
        <Control
          key={door.id}
          door={door}
          handleGarageDoor={handleGarageDoor}
        />
      ))}
    </div>
  );
};

export default Remote;
