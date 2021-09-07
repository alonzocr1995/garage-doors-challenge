import { useGarage } from "../../shared/hooks/useGarage";
import classes from "./Garage.module.css";
import Door from "./components/Door";

const Garage: React.FC = () => {
  const { doors } = useGarage();

  return (
    <div className={classes.container}>
      {doors.map((door) => (
        <Door key={door.id} door={door} />
      ))}
    </div>
  );
};

export default Garage;
