import React from 'react';

import NumberPlates from 'Components/Pages/NumberPlates';
import Reglaments from 'Components/Pages/Reglaments';
import Contract from 'Components/Pages/Contract';
import SideNavigation from 'Components/SideNavigation';
import { useDataContext } from 'Context/DataContext';

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
