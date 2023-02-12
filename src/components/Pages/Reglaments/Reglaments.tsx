import React from 'react';

import SearchInput from 'Components/UI/SearchInput';
import Clipboard from 'Components/UI/ClipBoard';
import ReglamentBtn from 'Components/UI/ReglamentBtn';
import PageLayout from 'Components/Layouts/PageLayout';
import { useDataContext } from 'Context/DataContext';

import './reglaments.scss';

export const Reglaments: React.FC = () => {
  const { dataToShow } = useDataContext();

  return (
    <PageLayout>
      <SearchInput />
      <Clipboard />
      <div className="reglaments__container">
        {dataToShow.map((e, i) => (
          <ReglamentBtn key={i} reglamentName={e.name} />
        ))}
      </div>
    </PageLayout>
  );
};
