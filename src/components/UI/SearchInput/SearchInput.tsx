import React, { useState, useEffect } from 'react';

import { useDataContext } from 'context/DataContext';

import './search-input.scss';

export const SearchInput: React.FC = () => {
  const { setDataToShow, initialData } = useDataContext();

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (searchInput[0] === 'Y' && searchInput[0] !== undefined) {
      const findDataWithInput = initialData.filter((item) =>
        item.name.includes(searchInput.toUpperCase())
      );
      setDataToShow(findDataWithInput);
    } else if (searchInput === '') {
      setDataToShow(initialData.filter((e) => e.mostUsed === true));
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
