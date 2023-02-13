import React from 'react';

import NumberPlates from 'components/Pages/NumberPlates';
import Reglaments from 'components/Pages/Reglaments';
import Contract from 'components/Pages/Contract';
import SideNavigation from 'components/SideNavigation';
import { useDataContext } from 'context/DataContext';

import './App.scss';
import HowToUseIt from 'components/Pages/HowToUseIt';

const App: React.FC = () => {
  const { isShowingPage } = useDataContext();
  return (
    <>
      <div style={{ display: 'flex' }}>
        <SideNavigation />
        <div className="App">
          {isShowingPage === 'reglaments' ? (
            <Reglaments />
          ) : isShowingPage === 'numbers' ? (
            <NumberPlates />
          ) : isShowingPage === 'howToUseIt' ? (
            <HowToUseIt />
          ) : (
            <Contract />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
