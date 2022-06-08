import React from "react";

const SortBtns = ({ wholeData, filterMostUsed }) => {
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
