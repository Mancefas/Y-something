import { useEffect, useState } from "react";
import "./App.css";
import CheckMark from "./components/CheckMark";
import Header from "./components/Header";
import SearchY from "./components/SearchY";
import { data, sameText } from "./store/data";

function App() {
  const [showClipboard, setShowClipboard] = useState(false);
  const [initData, setInitData] = useState(data);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowClipboard(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [showClipboard]);

  const clicked = (e) => {
    const clickedId = e.target.id;
    const clickedItem = data.filter((item) => item.name === `${clickedId}`);
    const textFromClickedId = clickedItem[0].text;
    if (textFromClickedId.length <= 9) {
      navigator.clipboard.writeText(`${sameText}${textFromClickedId}`);
    } else {
      navigator.clipboard.writeText(`${textFromClickedId}`);
    }
    setShowClipboard(true);
  };

  const filterMostUsed = () => {
    const newFilteredData = data.filter((e) => e.mostUsed === true);
    setInitData(newFilteredData);
    setSearchInput("");
  };

  const wholeData = () => {
    setInitData(data);
    setSearchInput("");
  };

  return (
    <div className="App">
      <Header />
      <div>
        <button onClick={filterMostUsed} className="filterBtn">
          Populiariausi
        </button>
        <button onClick={wholeData} className="filterBtn">
          Visi
        </button>
        <SearchY
          initData={initData}
          setInitData={setInitData}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      {showClipboard && <CheckMark />}
      <div className="btnsDiv">
        {initData.map((e, i) => (
          <button key={i} className="btn" id={e.name} onClick={clicked}>
            {e.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
