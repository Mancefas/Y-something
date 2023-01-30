import React from 'react';

import { useDataContext } from '../../../context/DataContext';

export const SortBtn: React.FC = () => {
  const { setDataToShow, initialData, setSearchInput } = useDataContext();

  const filterMostUsedHandler = (): void => {
    const newFilteredData = initialData.filter((e) => e.mostUsed === true);
    setDataToShow(newFilteredData);
    setSearchInput('');
  };

  const getWholeDataHandler = (): void => {
    setDataToShow(initialData);
    setSearchInput('');
  };

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={filterMostUsedHandler} className="filterBtn">
        Populiariausi
      </button>
      <button onClick={getWholeDataHandler} className="filterBtn">
        Visi
      </button>
    </div>
  );
};
