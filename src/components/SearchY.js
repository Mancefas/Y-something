import React, { useEffect, useState } from "react";
import { data } from "../store/data";

const SearchY = ({ setInitData }) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (
      searchInput !== "" &&
      searchInput[0] === "Y" &&
      searchInput[0] !== undefined
    ) {
      const findDataWithInput = data.filter((item) =>
        item.name.includes(searchInput.toUpperCase())
      );
      setInitData(findDataWithInput);
    } else {
      setInitData(data);
    }
    // eslint-disable-next-line
  }, [searchInput]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        name="search"
        className="seachInput"
        placeholder="🔍Ieškoti"
        type="text"
        value={searchInput.toUpperCase()}
        onChange={(e) => setSearchInput(e.target.value.toUpperCase())}
      ></input>
      {searchInput[0] !== "Y" && searchInput[0] !== undefined ? (
        <h4 data-testid="errMsg" style={{ color: "red" }}>
          Turi prasidėti su Y
        </h4>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchY;
