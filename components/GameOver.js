import React from "react";
import { useContext } from "react";
import mainContext from "../context/mainContext";
import { useNavigate } from "react-router-dom";

function GameOver() {
  const nav = useNavigate();
  const {
    character,
    fightItem,
    userhp,
    setUserHp,
    monsterhp,
    setMonsterHp,
    getInventor,
    setInventor,
    setCharacter,
    setGold,
    setFightItem,
  } = useContext(mainContext);
  function freshStart() {
    setCharacter(null);
    setInventor([]);
    setGold(null);
    setFightItem(null);
    setUserHp(100);
    setMonsterHp(100);
    nav("/");
  }

  return (
    <div className="modal">
      <div className="gameover">
        <div>GAME OVER</div>
        <button onClick={freshStart}>START AGAIN</button>
      </div>
    </div>
  );
}

export default GameOver;
