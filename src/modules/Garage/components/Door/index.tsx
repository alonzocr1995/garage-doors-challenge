import { IDoor, DoorStatus } from "../../../../shared/types/Door";
import classes from "./Door.module.css";

interface Props {
  door: IDoor;
}

const Door = ({ door: { id, status } }: Props) => {
  const isOpen = status === DoorStatus.OPEN;

  return (
    <div>
      <p className={classes.headers}>Door {id}</p>
      <p className={classes.headers}>{status}</p>
      <div
        className={`${classes.door} ${classes.transform}${
          isOpen ? ` ${classes.transform__active}` : ""
        }`}
      />
    </div>
  );
};

export default Door;
