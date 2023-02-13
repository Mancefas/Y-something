import React from 'react';

import SearchInput from 'components/UI/SearchInput';
import Clipboard from 'components/UI/ClipBoard';
import ReglamentBtn from 'components/UI/ReglamentBtn';
import PageLayout from 'components/Layouts/PageLayout';
import { useDataContext } from 'context/DataContext';

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
