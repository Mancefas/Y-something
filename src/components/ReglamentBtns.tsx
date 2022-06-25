import { useEffect, useState } from "react";
import CheckMark from "./CheckMark";

import { sameText } from "../store/data";

type ReglamentBtnsProps = {
  data: { name: string; text: string; mostUsed?: boolean }[];
  initData: { name: string; text: string; mostUsed?: boolean }[];
};

const ReglamentBtns = ({ data, initData }: ReglamentBtnsProps) => {
  const [showClipboard, setShowClipboard] = useState(false);

  const clickedHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const clickedId = (e.target as HTMLElement).id;
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
