import { useDataContext } from "../context/DataContext";

const SortBtns = () => {
  const { dataToShow, setDataToShow, initialData } = useDataContext();

  const filterMostUsedHandler = () => {
    const newFilteredData = dataToShow.filter((e) => e.mostUsed === true);
    setDataToShow(newFilteredData);
  };

  const getWholeDataHandler = () => {
    setDataToShow(initialData);
  };

  return (
    <div style={{ display: "flex" }}>
      <button onClick={filterMostUsedHandler} className="filterBtn">
        Populiariausi
      </button>
      <button onClick={getWholeDataHandler} className="filterBtn">
        Visi
      </button>
    </div>
  );
};

export default SortBtns;
