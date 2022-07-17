import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import mainContext from "../context/mainContext";

function Toolbar() {
  const { getGold, character, userhp } = useContext(mainContext);
  return (
    <div className="toolbar">
      <Link to="/shop">Shop</Link>
      <Link to="/main">Back</Link>
      <Link to="/arena">Arena</Link>
      <h1 className="gold">GOLD: {getGold} </h1>
      <h1 className="health">Health: {userhp} %</h1>
    </div>
  );
}

export default Toolbar;
