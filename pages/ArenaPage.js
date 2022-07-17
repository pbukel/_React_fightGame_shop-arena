import React from "react";

import { useContext } from "react";
import mainContext from "../context/mainContext";

import { useState } from "react";

import ArenaModal from "../components/ArenaModal";
import GameOver from "../components/GameOver";

function ArenaPage() {
  const {
    character,
    fightItem,
    userhp,
    setUserHp,
    monsterhp,
    setMonsterHp,
    getInventor,
    setInventor,
  } = useContext(mainContext);
  const [getModal, setModal] = useState(false);
  const [overModal, setOverModal] = useState(false);
  const [gameover, setGameOver] = useState(true);

  const monsters = [
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/b/b1/Basilisk.png",
      name: "Basilisk",
      maxDamage: 5,
      health: 100,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/7/75/VampireBat.png",
      name: "Bat",
      maxDamage: 8,
      health: 80,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/a/a4/Bear.png",
      name: "Bear",
      maxDamage: 20,
      health: 150,
      maxItemsDrop: 3,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/6/60/Beetle.png",
      name: "Beetle",
      maxDamage: 3,
      health: 300,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/6/6f/Boar.png",
      name: "Boar",
      maxDamage: 7,
      health: 85,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/0/01/Vulture.png",
      name: "Carrion bird",
      maxDamage: 6,
      health: 170,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/3/36/Chimera.png",
      name: "Chimaera",
      maxDamage: 12,
      health: 190,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/3/33/Clefthoof.png",
      name: "Clefthoof",
      maxDamage: 50,
      health: 500,
      maxItemsDrop: 4,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/6/63/Crab.png",
      name: "Crab",
      maxDamage: 8,
      health: 120,
      maxItemsDrop: 3,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/4/46/Crocolisk.png",
      name: "Crocolisk",
      maxDamage: 38,
      health: 420,
      maxItemsDrop: 3,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/5/51/Devilsaur.png",
      name: "Devilsaur",
      maxDamage: 25,
      health: 250,
      maxItemsDrop: 3,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/6/6c/Diemetradon.png",
      name: "Diemetradon",
      maxDamage: 12,
      health: 90,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/3/34/Dragonhawk1.png",
      name: "Dragonhawk",
      maxDamage: 120,
      health: 20,
      maxItemsDrop: 5,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/0/03/Elekk.png",
      name: "Elekk",
      maxDamage: 34,
      health: 160,
      maxItemsDrop: 4,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/7/73/Fox.png",
      name: "Fox",
      maxDamage: 5,
      health: 50,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/2/2f/Gryphon.png",
      name: "Gryphon",
      maxDamage: 18,
      health: 350,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/8/84/Gorilla.png",
      name: "Gorilla",
      maxDamage: 30,
      health: 240,
      maxItemsDrop: 3,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/c/c3/Horse.png",
      name: "Horse",
      maxDamage: 3,
      health: 150,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/9/9d/Hydra.png",
      name: "Hydra",
      maxDamage: 40,
      health: 500,
      maxItemsDrop: 5,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/e/ee/HyenaBlue.png",
      name: "Hyena",
      maxDamage: 9,
      health: 120,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/e/e5/Cat_lion.png",
      name: "Lion",
      maxDamage: 13,
      health: 200,
      maxItemsDrop: 2,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/b/b8/Lynx.png",
      name: "Lynx",
      maxDamage: 12,
      health: 150,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/9/9c/Mastiff.png",
      name: "Mastiff",
      maxDamage: 7,
      health: 80,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/2/27/Monkey.png",
      name: "Monkey",
      maxDamage: 4,
      health: 300,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/0/08/Netherray.png",
      name: "Nether ray",
      maxDamage: 6,
      health: 120,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/b/be/OwlWhite.png",
      name: "Owl",
      maxDamage: 7,
      health: 70,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/3/36/Panther.png",
      name: "Panther",
      maxDamage: 19,
      health: 40,
      maxItemsDrop: 3,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/1/16/Parrot.png",
      name: "Parrot",
      maxDamage: 2,
      health: 30,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/6/66/Raven.png",
      name: "Raven",
      maxDamage: 8,
      health: 150,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/c/c2/Rhino.png",
      name: "Rhinoceros",
      maxDamage: 120,
      health: 1500,
      maxItemsDrop: 8,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scorpion.png",
      name: "Scorpid",
      maxDamage: 25,
      health: 300,
      maxItemsDrop: 3,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/1/1a/Sea_Snake.png",
      name: "Sea snake",
      maxDamage: 5,
      health: 50,
      maxItemsDrop: 1,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/8/89/Serpent.png",
      name: "Serpent",
      maxDamage: 12,
      health: 80,
      maxItemsDrop: 1,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/1/14/Shark.png",
      name: "Shark",
      maxDamage: 15,
      health: 210,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/5/51/Sporebat.png",
      name: "Spore bat",
      maxDamage: 9,
      health: 150,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/1/10/Stag.png",
      name: "Stag",
      maxDamage: 4,
      health: 200,
      maxItemsDrop: 2,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/1/12/Strider.png",
      name: "Tallstrider",
      maxDamage: 20,
      health: 80,
    },
    {
      image:
        "https://static.wikia.nocookie.net/wowwiki/images/3/3c/Threshadon.png",
      name: "Threshadon",
      maxDamage: 70,
      health: 800,
      maxItemsDrop: 3,
    },
    {
      image: "https://static.wikia.nocookie.net/wowwiki/images/e/e9/Turtle.png",
      name: "Turtle",
      maxDamage: 5,
      health: 5000,
      maxItemsDrop: 10,
    },
  ];

  const dropItems = [
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Leather_09.gif",
      price: 245,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
      price: 63,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_33.gif",
      price: 3,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Plate04.gif",
      price: 497,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_Blue_01.gif",
      price: 33,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_05.gif",
      price: 52,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_Grey_01.gif",
      price: 27,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_16.gif",
      price: 22,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
      price: 173,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_23.gif",
      price: 3,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
      price: 123,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Wolf.gif",
      price: 70,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain_05.gif",
      price: 48,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_22.gif",
      price: 3,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_40.gif",
      price: 44,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_13.gif",
      price: 3,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_16.gif",
      price: 3,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Plate04.gif",
      price: 1088,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_09_Red.gif",
      price: 20,
    },
    {
      image:
        "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_EnchantedMageweave.gif",
      price: 200,
    },
    {
      image:
        "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_FelclothBag.gif",
      price: 240,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_10_Red.gif",
      price: 180,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_07_Black.gif",
      price: 150,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_02.gif",
      price: 120,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_08.gif",
      price: 0,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_27.gif",
      price: 500,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_09.gif",
      price: 349,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_01.gif",
      price: 88,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_08.gif",
      price: 458,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Leather01.gif",
      price: 255,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Cloth_03.gif",
      price: 128,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_05.gif",
      price: 16,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Plate_07.gif",
      price: 612,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Chain_05.gif",
      price: 605,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_02.gif",
      price: 52,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Fabric_01.gif",
      price: 24,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Cloth_16.gif",
      price: 177,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_32.gif",
      price: 38,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_49.gif",
      price: 198,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_16.gif",
      price: 97,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_14.gif",
      price: 118,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_28.gif",
      price: 59,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_63.gif",
      price: 148,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_21.gif",
      price: 21,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
      price: 123,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_06.gif",
      price: 114,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
      price: 48,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_23.gif",
      price: 38,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_20.gif",
      price: 27,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
      price: 6,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_21.gif",
      price: 29,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_69.gif",
      price: 689,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_121.gif",
      price: 178,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_31.gif",
      price: 38,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_39.gif",
      price: 183,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_125.gif",
      price: 140,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_108.gif",
      price: 258,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_13.gif",
      price: 95,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_20.gif",
      price: 683,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_30.gif",
      price: 122,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Belt_22.gif",
      price: 48,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_09.gif",
      price: 78,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Mail_21.gif",
      price: 800,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Cloth_16.gif",
      price: 110,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Cloth_14.gif",
      price: 136,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_07.gif",
      price: 92,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_06.gif",
      price: 239,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_03.gif",
      price: 263,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_07.gif",
      price: 18,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_13.gif",
      price: 38,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Leather_20.gif",
      price: 197,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Plate_12.gif",
      price: 1200,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Leather_13.gif",
      price: 316,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_31.gif",
      price: 12,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_36.gif",
      price: 15,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_40.gif",
      price: 58,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_12.gif",
      price: 1,
    },
    {
      image:
        "https://wow.gamepressure.com/gfx/icons/Achievement_Dungeon_UlduarRaid_Misc_02.gif",
      price: 440,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_35.gif",
      price: 57,
    },
    {
      image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_33.gif",
      price: 20,
    },
  ];
  const [monster, setMonster] = useState(
    monsters[Math.floor(Math.random() * monsters.length)]
  );

  function showModal() {
    setModal(true);
  }

  function setingNewMonster() {
    let setmonster = monsters[Math.floor(Math.random() * monsters.length)];
    setMonster(setmonster);
    setMonsterHp(100);
  }

  function fighting() {
    // USER FIGHT
    let fightbonus = 0;
    if (fightItem) {
      fightbonus = Math.floor(
        Math.random() * (fightItem.maxDamage - 1 + 1) + 1
      );
      // fightbonus = fightItem.maxDamage;
    }
    console.log(fightbonus);

    let tarp =
      (Math.floor(Math.random() * (monster.maxDamage - 1 + 1) + 1) * 100) /
      character.health;
    tarp = userhp - tarp;
    let tarp2 = ((character.damage + fightbonus) * 100) / monster.health;
    tarp2 = monsterhp - tarp2;
    console.log(tarp, tarp2);

    setUserHp(tarp);
    setMonsterHp(tarp2);

    if (tarp <= 0) {
      setGameOver(null);
      console.log("GAME OVER");
      setOverModal(true);
      return;
    }

    if (tarp2 <= 0) {
      console.log("monster dye");
      setingNewMonster();
      let drop = dropItems[Math.floor(Math.random() * dropItems.length)];
      setInventor([...getInventor, drop]);
    }

    // console.log(character.health, monster.health);
    console.log(userhp, monsterhp);
  }

  return (
    <div className="arena">
      <div className="mainpage">
        <div className="player_info">
          <img src={character.image} alt="" />
          <div className="hpuser-wraper">
            <div className="hp-user" style={{ width: userhp + "%" }}></div>
          </div>
          <div className="wpns">
            {fightItem && <img src={fightItem.image} alt="" />}
          </div>
        </div>
        {gameover && (
          <button onClick={fighting} className="fight">
            FIGHT
          </button>
        )}

        <div className="monster">
          <img src={monster.image} alt="" />
          <div className="hpmonster-wraper">
            <div
              className="hp-monster"
              style={{ width: monsterhp + "%" }}
            ></div>
          </div>
        </div>
      </div>
      <button className="invent" onClick={showModal}>
        INVENTORY
      </button>

      {getModal && <ArenaModal getModal={getModal} setModal={setModal} />}
      {overModal && <GameOver />}
    </div>
  );
}

export default ArenaPage;
