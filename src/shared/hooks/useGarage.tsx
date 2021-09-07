import { useContext } from "react";
import { GarageContext } from "../context/GarageContext";

export const useGarage = () => {
  const garage = useContext(GarageContext);
  return garage;
};
