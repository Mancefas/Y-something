const SortBtns = ({ setInitData, data }) => {
  const filterMostUsedHandler = () => {
    const newFilteredData = data.filter((e) => e.mostUsed === true);
    setInitData(newFilteredData);
  };
  const getWholeDataHandler = () => {
    setInitData(data);
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
