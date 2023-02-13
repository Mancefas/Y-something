import React from 'react';

import NumberPlates from 'components/Pages/NumberPlates';
import Reglaments from 'components/Pages/Reglaments';
import Contract from 'components/Pages/Contract';
import SideNavigation from 'components/SideNavigation';
import { useDataContext } from 'context/DataContext';

import './App.scss';

const App: React.FC = () => {
  const { whatBtnsToShow } = useDataContext();
  return (
    <>
      <div style={{ display: 'flex' }}>
        <SideNavigation />
        <div className="App">
          {whatBtnsToShow === 'regl' ? (
            <Reglaments />
          ) : whatBtnsToShow === 'num' ? (
            <NumberPlates />
          ) : (
            <Contract />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
