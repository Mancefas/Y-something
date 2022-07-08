import { useEffect, useState } from "react";
import CheckMark from "./CheckMark";

import SortBtns from "./SortBtns";
import SearchY from "./SearchY";

import { sameText } from "../store/data";

import { useDataContext } from "../context/DataContext";

const ReglamentBtns = () => {
  const { dataToShow } = useDataContext();

  const [showClipboard, setShowClipboard] = useState(false);

  const clickedHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const clickedId = (e.target as HTMLElement).id;
    const clickedItem = dataToShow.filter(
      (item) => item.name === `${clickedId}`
    );
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
      <div style={{ display: "flex" }}>
        <SortBtns />
        <SearchY />
      </div>
      <div className="btnsDiv">
        {dataToShow.map((e, i) => (
          <button key={i} className="btn" id={e.name} onClick={clickedHandler}>
            {e.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default ReglamentBtns;
