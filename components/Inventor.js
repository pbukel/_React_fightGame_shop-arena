import React from "react";
import { useContext } from "react";
import mainContext from "../context/mainContext";

function Inventor({ item, index, parameter }) {
  const {
    fightItem,
    getInventor,
    setInventor,
    setGold,
    getGold,
    setUserHp,
    userhp,
    setFightItem,
  } = useContext(mainContext);

  function removeFromInventor() {
    let arr = getInventor;
    arr.splice(index, 1);

    setInventor([...arr]);

    if (Object.keys(item).length === 2) {
      setGold(getGold + item.price);
      console.log(item.price);
    } else {
      setGold(getGold + item.price / 2);
    }
    if (item.image === fightItem.image) {
      setFightItem();
    }
  }

  function arenFightitem() {
    if (parameter === "modal") {
      if (Object.keys(item).length === 5) {
        // set fight item
        setFightItem(item);
      }
      if (Object.keys(item).length === 4) {
        //use poison
        let newhp = userhp + item.effect.health;
        setUserHp(newhp);

        // Delete poison after use.
        let arr = getInventor;
        arr.splice(index, 1);
        setInventor([...arr]);
      }
    } else {
      // not letting to use droped items in arena
      console.log("not from modal");
    }
  }
  function addToInventor() {
    if (getGold < item.price) return;
    setInventor([...getInventor, item]);
    setGold(getGold - item.price);
  }

  function whichPage() {
    if (parameter === true) {
      return <button onClick={addToInventor}>BUY</button>;
    }
    if (parameter === false) {
      return <button onClick={() => removeFromInventor()}>SELL</button>;
    }
    if (parameter === "modal") {
      return;
    } else {
      return;
    }
  }

  function whichPage2() {
    if (parameter === "modal") {
      return arenFightitem;
    } else {
      return;
    }
  }

  return (
    <div onClick={whichPage2()} className="item">
      <img src={item.image} alt="" />
      <div>Price: {item.price}</div>
      {item.maxDamage ? <p>Max demage: {item.maxDamage}</p> : null}

      {item.title ? <p>Title: {item.title}</p> : null}
      {whichPage()}
    </div>
  );
}

export default Inventor;
