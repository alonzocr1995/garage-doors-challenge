import React from "react";
import "./App.css";
import Garage from "./modules/Garage";
import Remote from "./modules/Remote";
import { GarageProvider } from "./shared/context/GarageContext";

const App: React.FC = () => {
  return (
    <GarageProvider>
      <Garage />
      <Remote />
    </GarageProvider>
  );
};

export default App;
