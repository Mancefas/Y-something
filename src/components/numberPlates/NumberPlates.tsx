import { useEffect, useState } from "react";
import { nrPlates } from "../../store/data";
import CheckMark from "../CheckMark";

const NumberPlates = () => {
  const [showClipboard, setShowClipboard] = useState(false);

  const clickedHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const clickedId = (e.target as HTMLElement).id;
    const clickedItem = nrPlates.filter(
      (item) => item.shortNr === `${clickedId}`
    );
    const textFromClickedId = clickedItem[0].fullNr;
    navigator.clipboard.writeText(`${textFromClickedId}`);
    setShowClipboard(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowClipboard(false), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [showClipboard]);

  return (
    <>
      {showClipboard && <CheckMark />}
      <div
        className="btnsDiv"
        style={{ margin: "auto", paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        {nrPlates.map((e) => (
          <button
            key={e.shortNr}
            className="btn"
            id={e.shortNr}
            onClick={clickedHandler}
          >
            {e.shortNr}
          </button>
        ))}
      </div>
    </>
  );
};

export default NumberPlates;
