import React from 'react';

import FilterButton from 'Components/UI/FilterButton';
import SearchInput from 'Components/UI/SearchInput';
import Clipboard from 'Components/UI/ClipBoard';
import ReglamentBtn from 'Components/UI/ReglamentBtn';

import './reglaments.scss';

import { useDataContext } from 'Context/DataContext';

export const Reglaments: React.FC = () => {
  const { dataToShow } = useDataContext();

  return (
    <>
      <Clipboard />
      <div className="reglaments__inputs-container">
        <FilterButton />
        <SearchInput />
      </div>
      <div className="reglaments__container">
        {dataToShow.map((e, i) => (
          <ReglamentBtn key={i} reglamentName={e.name} />
        ))}
      </div>
    </>
  );
};
