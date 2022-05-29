import React, { useEffect } from "react";
import { data } from "../store/data";

const SearchY = ({ setInitData, searchInput, setSearchInput }) => {
  const validatingInput = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
  };

  useEffect(() => {
    if (searchInput !== "") {
      const findDataWithInput = data.filter((item) =>
        item.name.includes(searchInput.toUpperCase())
      );
      setInitData(findDataWithInput);
    }
    // eslint-disable-next-line
  }, [searchInput]);

  return (
    <>
      <input
        className="seachInput"
        placeholder="🔍Ieškoti"
        type="text"
        value={searchInput}
        onChange={validatingInput}
      ></input>
    </>
  );
};

export default SearchY;
