import React from "react";
import { useContext } from "react";
import mainContext from "../context/mainContext";
import Inventor from "../components/Inventor";

function MainPage() {
  const { character, getInventor } = useContext(mainContext);
  console.log(character);
  console.log(getInventor);
  return (
    <div className="mainpage">
      <div className="player_info">
        <img src={character.image} alt="" />
        <h1>{character.race} </h1>
        <h3>Damage:{character.damage} </h3>
        <h3>Gold: {character.gold}</h3>
      </div>
      <div className="inventory_info">
        <h3>My invenotry:</h3>
        {getInventor.map((x, i) => (
          <Inventor item={x} parameter={"main"} />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
