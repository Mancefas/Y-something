import Clipboard from "../../UI/ClipBoard";

import { nrPlates } from "../../../store/data";
import { useDataContext } from "../../../context/DataContext";

export const NumberPlates = () => {
  const { setShowClipboard } = useDataContext();

  const handleClick = (
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

  return (
    <>
      <Clipboard />
      <div
        className="btnsDiv"
        style={{ margin: "auto", paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        {nrPlates.map((e) => (
          <button
            key={e.shortNr}
            className="btn"
            id={e.shortNr}
            onClick={handleClick}
          >
            {e.shortNr}
          </button>
        ))}
      </div>
    </>
  );
};
