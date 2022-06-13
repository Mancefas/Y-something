import { useEffect, useState } from "react";
import CheckMark from "./CheckMark";

import { sameText } from "../store/data";

const ReglamentBtns = ({ data, initData }) => {
  const [showClipboard, setShowClipboard] = useState(false);

  const clickedHandler = (e) => {
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

  useEffect(() => {
    const timer = setTimeout(() => setShowClipboard(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [showClipboard]);

  return (
    <>
      {showClipboard && <CheckMark />}
      <div className="btnsDiv">
        {initData.map((e, i) => (
          <button key={i} className="btn" id={e.name} onClick={clickedHandler}>
            {e.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default ReglamentBtns;
