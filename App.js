import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import Toolbar from "./components/Toolbar";
import ShopPage from "./pages/ShopPage";
import ArenaPage from "./pages/ArenaPage";
import MainPage from "./pages/MainPage";

import mainContext from "./context/mainContext";

function App() {
  const [character, setCharacter] = useState(null);
  const [getSelection, setSelection] = useState(true);
  const [getInventor, setInventor] = useState([]);
  const [getGold, setGold] = useState();
  const [fightItem, setFightItem] = useState();
  const [userhp, setUserHp] = useState(100);
  const [monsterhp, setMonsterHp] = useState(100);

  return (
    <mainContext.Provider
      value={{
        character,
        setCharacter,
        getSelection,
        setSelection,
        getInventor,
        setInventor,
        getGold,
        setGold,
        fightItem,
        setFightItem,
        userhp,
        setUserHp,
        monsterhp,
        setMonsterHp,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <div>{character && <Toolbar />}</div>
          <div className="routes">
            <Routes>
              <Route path="/" element={<CharacterPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/arena" element={<ArenaPage />} />
              <Route path="/main" element={<MainPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </mainContext.Provider>
  );
}

export default App;
