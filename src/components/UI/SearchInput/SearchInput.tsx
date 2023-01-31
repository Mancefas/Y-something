import React, { useEffect } from 'react';

import { useDataContext } from '../../../context/DataContext';
import './search-input.scss';

export const SearchInput: React.FC = () => {
  const { setDataToShow, initialData, searchInput, setSearchInput } =
    useDataContext();

  useEffect(() => {
    if (
      searchInput !== '' &&
      searchInput[0] === 'Y' &&
      searchInput[0] !== undefined
    ) {
      const findDataWithInput = initialData.filter((item) =>
        item.name.includes(searchInput.toUpperCase())
      );
      setDataToShow(findDataWithInput);
    }
    // eslint-disable-next-line
  }, [searchInput]);

  return (
    <div className="search__container">
      <input
        name="search"
        className="search__input"
        placeholder="🔍Ieškoti"
        type="text"
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
