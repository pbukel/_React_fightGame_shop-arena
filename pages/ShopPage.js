import React from "react";
import { useContext } from "react";
import mainContext from "../context/mainContext";

import Inventor from "../components/Inventor";

function ShopPage() {
  const trader = {
    weapons: [
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_04.gif",
        maxDamage: 4,
        price: 50,
        energyPerHit: 20,
        effects: [],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_01.gif",
        maxDamage: 6,
        price: 70,
        energyPerHit: 19,
        effects: [],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Axe_23.gif",
        maxDamage: 7,
        price: 80,
        energyPerHit: 18,
        effects: [],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_ThrowingAxe_03.gif",
        maxDamage: 8,
        price: 120,
        energyPerHit: 17,
        effects: [],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_27.gif",
        maxDamage: 9,
        price: 150,
        energyPerHit: 17,
        effects: [],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_ThrowingAxe_01.gif",
        maxDamage: 10,
        price: 200,
        energyPerHit: 16,
        effects: [],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Hammer_15.gif",
        maxDamage: 11,
        price: 500,
        energyPerHit: 15,
        effects: ["s1"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Hammer_09.gif",
        maxDamage: 13,
        price: 600,
        energyPerHit: 17,
        effects: ["s1"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Pick_02.gif",
        maxDamage: 13,
        price: 700,
        energyPerHit: 15,
        effects: ["s1"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_03.gif",
        maxDamage: 12,
        price: 800,
        energyPerHit: 14,
        effects: ["s1"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_47.gif",
        maxDamage: 13,
        price: 900,
        energyPerHit: 15,
        effects: ["s1"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_16.gif",
        maxDamage: 15,
        price: 1500,
        energyPerHit: 14,
        effects: ["s1", "i1"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Hammer_16.gif",
        maxDamage: 15,
        price: 2000,
        energyPerHit: 15,
        effects: ["s2", "i1", "d1"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_02.gif",
        maxDamage: 13,
        price: 4000,
        energyPerHit: 18,
        effects: ["d2", "s1", "h2", "sta1"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_34.gif",
        maxDamage: 14,
        price: 10000,
        energyPerHit: 12,
        effects: ["e2", "h3", "i1"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_26.gif",
        maxDamage: 12,
        price: 12000,
        energyPerHit: 14,
        effects: ["s3", "sta3", "h2"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_04.gif",
        maxDamage: 9,
        price: 15000,
        energyPerHit: 8,
        effects: ["h4", "d3", "s2", "i1"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_07.gif",
        maxDamage: 18,
        price: 20000,
        energyPerHit: 25,
        effects: ["s4", "i3", "h7"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Axe_04.gif",
        maxDamage: 16,
        price: 23000,
        energyPerHit: 14,
        effects: ["i3", "sta5", "d4", "s3"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_34.gif",
        maxDamage: 17,
        price: 250000,
        energyPerHit: 17,
        effects: ["s3", "i4", "h3", "d3"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_23.gif",
        maxDamage: 15,
        price: 30000,
        energyPerHit: 15,
        effects: ["sta5", "s3", "i2", "h2", "e3"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Axe_11.gif",
        maxDamage: 14,
        price: 35000,
        energyPerHit: 14,
        effects: ["sta4", "s3", "i2", "h4", "e2"],
      },
      {
        image:
          "https://wow.gamepressure.com/gfx/icons/INV_Weapon_ShortBlade_03.gif",
        maxDamage: 18,
        price: 50000,
        energyPerHit: 13,
        effects: ["sta4", "s3", "i2", "h4", "e2", "d4"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_35.gif",
        maxDamage: 18,
        price: 60000,
        energyPerHit: 15,
        effects: ["sta3", "s3", "i5", "h3", "e2", "d2"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_67.gif",
        maxDamage: 18,
        price: 70000,
        energyPerHit: 16,
        effects: ["sta5", "s3", "i3", "h3", "e4", "d3"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_69.gif",
        maxDamage: 20,
        price: 100000,
        energyPerHit: 15,
        effects: ["sta6", "s5", "i5", "h4", "e2", "d5"],
      },
      {
        image:
          "https://wow.gamepressure.com/gfx/icons/INV_Weapon_Shortblade_67.gif",
        maxDamage: 18,
        price: 150000,
        energyPerHit: 13,
        effects: ["sta6", "s5", "i5", "h4", "e2", "d8"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Axe_08.gif",
        maxDamage: 19,
        price: 200000,
        energyPerHit: 14,
        effects: ["sta5", "s5", "i8", "h6", "e4", "d6"],
      },
      {
        image:
          "https://wow.gamepressure.com/gfx/icons/INV_Weapon_ShortBlade_21.gif",
        maxDamage: 10,
        price: 250000,
        energyPerHit: 10,
        effects: ["sta6", "s8", "i6", "h8", "e6", "d6"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_40.gif",
        maxDamage: 14,
        price: 300000,
        energyPerHit: 14,
        effects: ["sta6", "s8", "i5", "h7", "e6", "d10"],
      },
      {
        image:
          "https://wow.gamepressure.com/gfx/icons/INV_Weapon_ShortBlade_06.gif",
        maxDamage: 11,
        price: 350000,
        energyPerHit: 12,
        effects: ["sta7", "s6", "i4", "h6", "e7", "d7"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Sword_43.gif",
        maxDamage: 18,
        price: 400000,
        energyPerHit: 14,
        effects: ["sta6", "s6", "i10", "h6", "e6", "d6"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Mace_48.gif",
        maxDamage: 25,
        price: 500000,
        energyPerHit: 8,
        effects: ["sta6", "s6", "i10", "h6", "e6", "d6"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Weapon_Glave_01.gif",
        maxDamage: 30,
        price: 800000,
        energyPerHit: 5,
        effects: ["sta7", "s7", "i8", "h7", "e7", "d7"],
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Weapon_Hand_10.gif",
        maxDamage: 30,
        price: 1000000,
        energyPerHit: 3,
        effects: ["sta10", "s10", "i10", "h10", "e10", "d10"],
      },
    ],
    potions: [
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
        title: "Health + 10",
        effect: {
          health: 10,
        },
        price: 200,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
        title: "Health + 20",
        effect: {
          health: 20,
        },
        price: 400,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
        title: "Health + 30",
        effect: {
          health: 30,
        },
        price: 600,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
        title: "Health + 40",
        effect: {
          health: 40,
        },
        price: 800,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
        title: "Health + 50",
        effect: {
          health: 50,
        },
        price: 1000,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
        title: "Health + 60",
        effect: {
          health: 60,
        },
        price: 1200,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
        title: "Health + 70",
        effect: {
          health: 70,
        },
        price: 1400,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
        title: "Health + 80",
        effect: {
          health: 80,
        },
        price: 1800,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
        title: "Health + 90",
        effect: {
          health: 90,
        },
        price: 1800,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
        title: "Health + 100",
        effect: {
          health: 100,
        },
        price: 2000,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
        title: "Energy + 10",
        effect: {
          energy: 10,
        },
        price: 300,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
        title: "Energy + 20",
        effect: {
          energy: 20,
        },
        price: 600,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
        title: "Energy + 30",
        effect: {
          energy: 30,
        },
        price: 900,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
        title: "Energy + 40",
        effect: {
          energy: 40,
        },
        price: 1200,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
        title: "Energy + 50",
        effect: {
          energy: 50,
        },
        price: 1500,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
        title: "Energy + 60",
        effect: {
          energy: 60,
        },
        price: 1800,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
        title: "Energy + 70",
        effect: {
          energy: 70,
        },
        price: 2100,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
        title: "Energy + 80",
        effect: {
          energy: 80,
        },
        price: 2400,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
        title: "Energy + 90",
        effect: {
          energy: 90,
        },
        price: 2700,
      },
      {
        image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
        title: "Energy + 100",
        effect: {
          energy: 100,
        },
        price: 3000,
      },
    ],
  };

  const { getSelection, setSelection, getInventor } = useContext(mainContext);

  function setWeapon() {
    setSelection(true);
  }
  function setPotion() {
    setSelection(false);
  }
  console.log(trader.potions);
  return (
    <div className="Shopas">
      <div className="shop">
        <div className="selection">
          <button
            style={{
              backgroundColor: getSelection ? "rgb(50, 114, 135" : "white",
            }}
            onClick={setWeapon}
          >
            Weapons
          </button>
          <button
            style={{
              backgroundColor: getSelection ? "white" : "rgb(50, 114, 135)",
            }}
            onClick={setPotion}
          >
            Potions
          </button>
        </div>
        <div className="all_items">
          {(getSelection ? trader.weapons : trader.potions).map((x, i) => (
            <Inventor item={x} parameter={true} />
          ))}
        </div>
      </div>
      <div className="inventory">
        {getInventor.map((x, i) => (
          <Inventor item={x} index={i} parameter={false} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
