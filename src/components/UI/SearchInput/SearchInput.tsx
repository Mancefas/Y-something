import React, { useEffect } from 'react';

import { useDataContext } from 'Context/DataContext';

import './search-input.scss';

export const SearchInput: React.FC = () => {
  const { setDataToShow, initialData, searchInput, setSearchInput } =
    useDataContext();

  useEffect(() => {
    if (searchInput[0] === 'Y' && searchInput[0] !== undefined) {
      const findDataWithInput = initialData.filter((item) =>
        item.name.includes(searchInput.toUpperCase())
      );
      setDataToShow(findDataWithInput);
    } else if (searchInput === '') {
      setDataToShow(initialData);
    }
    // eslint-disable-next-line
  }, [searchInput]);

  return (
    <div className="search__container">
      <input
        maxLength={4}
        name="search"
        className="search__input"
        placeholder="🔎Ieškoti"
        type="search"
        value={searchInput.toUpperCase()}
        onChange={(e) => {
          setSearchInput(e.target.value.toUpperCase());
        }}
      ></input>
      {searchInput[0] !== 'Y' && searchInput[0] !== undefined ? (
        <h4 data-testid="errMsg" style={{ color: 'red' }}>
          Turi prasidėti su Y
        </h4>
      ) : (
        ''
      )}
    </div>
  );
};
