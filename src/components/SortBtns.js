import React from "react";

const SortBtns = ({ data, setInitData }) => {
  const filterMostUsed = () => {
    const newFilteredData = data.filter((e) => e.mostUsed === true);
    setInitData(newFilteredData);
  };

  const wholeData = () => {
    setInitData(data);
  };

  return (
    <div style={{ display: "flex" }}>
      <button onClick={filterMostUsed} className="filterBtn">
        Populiariausi
      </button>
      <button onClick={wholeData} className="filterBtn">
        Visi
      </button>
    </div>
  );
};

export default SortBtns;
