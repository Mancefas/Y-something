import React from 'react';

import FilterButton from '../../UI/FilterButton';
import SearchInput from '../../UI/SearchInput';
import Clipboard from '../../UI/ClipBoard';
import ReglamentBtn from '../../UI/ReglamentBtn';
import './reglaments.scss';

import { useDataContext } from '../../../context/DataContext';

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
