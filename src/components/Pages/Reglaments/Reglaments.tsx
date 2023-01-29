import SortBtn from "../../UI/SortBtn";
import SearchBtn from "../../UI/SearchBtn";
import Clipboard from "../../UI/ClipBoard";
import ReglamentBtn from "../../UI/ReglamentBtn";

import { useDataContext } from "../../../context/DataContext";

export const Reglaments = () => {
  const { dataToShow } = useDataContext();

  return (
    <>
      <Clipboard />
      <div style={{ display: "flex" }}>
        <SortBtn />
        <SearchBtn />
      </div>
      <div className="btnsDiv">
        {dataToShow.map((e, i) => (
          <ReglamentBtn key={i} id={e.name} />
        ))}
      </div>
    </>
  );
};
