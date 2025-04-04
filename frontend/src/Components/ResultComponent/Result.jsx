import React from "react";
import ResultCard from "./ResultCard";
import norris from "../../Assets/driverImages/norris.png";
import verstrappen from "../../Assets/driverImages/verstrappen.png";
import russell from "../../Assets/driverImages/russel.png";
import piastri from "../../Assets/driverImages/piastri.png";
import netherlands from "../../Assets/flags/netherlands.png";
import uk from "../../Assets/flags/United Kingdom.png";
import aus from "../../Assets/flags/Australia.png";


const Result = () => {
  return (
    <div className="flex flex-col items-center">

      <ResultCard
        title="Australia Grand Prix 2025"
        drivers={[
          {
            position: 1,
            firstName: "LANDO",
            lastName: "NORRIS",
            country: `${uk}`,
            team: "Mclaren",
            image: `${norris}`,
            carNumber: 4,
          },
          {
            position: 2,
            firstName: "MAX",
            lastName: "VERSTRAPPEN",
            country: `${netherlands}`,
            team: "Mercedes",
            image: `${verstrappen}`,
            carNumber: 1,
          },
          {
            position: 3,
            firstName: "GEORGE",
            lastName: "RUSSELL",
            country: `${uk}`,
            team: "Mercedes",
            image: `${russell}`,
            carNumber: 63,
          },
        ]}
      />

      <ResultCard
        title="Chinese Grand Prix 2025"
        drivers={[
          {
            position: 1,
            points: 25,
            firstName: "Oscar",
            lastName: "Piastri",
            country: `${aus}` ,
            team: "Mclaren",
            image: `${piastri}`,
            carNumber: 81,
          },
          {
            position: 2,
            firstName: "LANDO",
            lastName: "NORRIS",
            country: `${uk}`,
            team: "Mclaren",
            image: `${norris}`,
            carNumber: 4,
          },
          {
            position: 3,
            firstName: "GEORGE",
            lastName: "RUSSELL",
            country: `${uk}`,
            team: "Mercedes",
            image: `${russell}`,
            carNumber: 63,
          },
        ]}
      />
    </div>
  );
};

export default Result;

