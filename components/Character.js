import React from "react";
import { useContext } from "react";
import mainContext from "../context/mainContext";
import { useNavigate } from "react-router-dom";

function Character({ character }) {
  const nav = useNavigate();
  const { setCharacter, setGold } = useContext(mainContext);
  function setPerson(person) {
    setCharacter(person);
    setGold(character.gold);

    nav("/main");
  }
  return (
    <div onClick={() => setPerson(character)} className="persona">
      <img src={character.image} alt="" />
      <div className="description">
        <p>{character.race} </p>
        <p>Helth:{character.health} </p>
        <p>Damage:{character.damage} </p>
        <p>Start Gold: {character.gold}</p>
      </div>
    </div>
  );
}

export default Character;
