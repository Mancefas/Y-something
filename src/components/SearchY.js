import React, { useEffect } from "react";
import { data } from "../store/data";

const SearchY = ({
  setInitData,
  searchInput,
  setSearchInput,
  inputError,
  setInputError,
}) => {
  const validatingInput = (e) => {
    const inputValue = e.target.value;
    if (inputValue[0] !== undefined && inputValue[0] !== "y") {
      setInputError(true);
    } else if (inputValue[0] === "y") {
      setSearchInput(inputValue);
      setInputError(false);
    } else {
      setSearchInput(inputValue);
    }
  };

  useEffect(() => {
    if (searchInput !== "" || searchInput[0] === "Y") {
      const findDataWithInput = data.filter((item) =>
        item.name.includes(searchInput.toUpperCase())
      );
      setInitData(findDataWithInput);
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
        value={searchInput}
        onChange={validatingInput}
      ></input>
      {inputError && (
        <div data-testid="errMsg" style={{ color: "red" }}>
          Turi prasidėti su Y
        </div>
      )}
    </div>
  );
};

export default SearchY;
