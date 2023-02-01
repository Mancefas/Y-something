import React from 'react';

import Header from 'Components/Header';
import NumberPlates from 'Components/Pages/NumberPlates';
import Reglaments from 'Components/Pages/Reglaments';
import Contract from 'Components/Pages/Contract';
import { useDataContext } from 'Context/DataContext';

import './App.scss';

const App: React.FC = () => {
  const { whatBtnsToShow } = useDataContext();
  return (
    <div className="App">
      <Header />
      {whatBtnsToShow === 'regl' ? (
        <Reglaments />
      ) : whatBtnsToShow === 'num' ? (
        <NumberPlates />
      ) : (
        <Contract />
      )}
    </div>
  );
};

export default App;
