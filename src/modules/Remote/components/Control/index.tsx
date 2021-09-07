import { IDoor, DoorStatus } from "../../../../shared/types/Door";
import classes from "./Control.module.css";

interface Props {
  door: IDoor;
  handleGarageDoor: (doorId: number, status: DoorStatus) => void;
}

const Control = ({ door, handleGarageDoor }: Props) => {
  const isDoorClose =
    door.status === DoorStatus.CLOSE ? DoorStatus.OPEN : DoorStatus.CLOSE;

  return (
    <div key={door.id} className={classes.control}>
      <p style={{ color: "white" }}> door {door.id}</p>

      {door.time && (
        <p style={{ color: "white" }}>Time: {door.time.toFixed(3)}</p>
      )}

      <button
        className={classes.actions__btn}
        onClick={() => handleGarageDoor(door.id, isDoorClose)}
      >
        {isDoorClose}
      </button>
    </div>
  );
};

export default Control;
