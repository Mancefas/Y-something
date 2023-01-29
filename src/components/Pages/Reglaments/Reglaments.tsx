import SortBtns from "../../UI/SortBtn/SortBtn";
import SearchY from "../../UI/SearchBtn/SearchY";
import Clipboard from "../../UI/ClipBoard/Clipboard";
import { ReglamentBtn } from "../../UI/ReglamentBtn/ReglamentBtn";

import { useDataContext } from "../../../context/DataContext";

const Reglaments = () => {
  const { dataToShow } = useDataContext();

  return (
    <>
      <Clipboard />
      <div style={{ display: "flex" }}>
        <SortBtns />
        <SearchY />
      </div>
      <div className="btnsDiv">
        {dataToShow.map((e, i) => (
          <ReglamentBtn key={i} id={e.name} />
        ))}
      </div>
    </>
  );
};

export default Reglaments;
