import { useEffect, useState } from "react";
import "./App.css";
import CheckMark from "./components/CheckMark";
import { data, sameText } from "./store/data";

function App() {
  const [showClipboard, setShowClipboard] = useState(false);

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

  return (
    <div className="App">
      {showClipboard && <CheckMark />}
      <div className="btnsDiv">
        {data.map((e, i) => (
          <button key={i} className="btn" id={e.name} onClick={clicked}>
            {e.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
