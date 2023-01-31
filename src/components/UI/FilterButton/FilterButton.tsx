import React, { useState } from 'react';

import { useDataContext } from '../../../context/DataContext';
import './filter-button.scss';

export const FilterButton: React.FC = () => {
  const { setDataToShow, initialData, setSearchInput } = useDataContext();
  const [isMostUsedShown, setIsMostUsedShown] = useState<boolean>(true);

  const handleFilterMostUsed = (): void => {
    const newFilteredData = initialData.filter((e) => e.mostUsed === true);
    setDataToShow(newFilteredData);
    setSearchInput('');
    setIsMostUsedShown(false);
  };

  const handleWholeData = (): void => {
    setDataToShow(initialData);
    setSearchInput('');
    setIsMostUsedShown(true);
  };

  return (
    <>
      {isMostUsedShown && (
        <button onClick={handleFilterMostUsed} className="filter-button">
          Populiariausi
        </button>
      )}
      {!isMostUsedShown && (
        <button onClick={handleWholeData} className="filter-button">
          Visi
        </button>
      )}
    </>
  );
};
