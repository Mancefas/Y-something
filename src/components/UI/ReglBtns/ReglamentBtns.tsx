import SortBtns from "../../UI/SortBtns/SortBtns";
import SearchY from "../SearchBtns/SearchY";

import { sameText } from "../../../store/data";

import { useDataContext } from "../../../context/DataContext";
import ClipboardShowing from "../CheckMark/ClipboardShowing";

const ReglamentBtns = () => {
  const { dataToShow, setShowClipboard } = useDataContext();

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

  return (
    <>
      <ClipboardShowing />
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
