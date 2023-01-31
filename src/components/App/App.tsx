import React from 'react';

import Header from '../Header';
import NumberPlates from '../Pages/NumberPlates';
import Reglaments from '../Pages/Reglaments';
import Contract from '../Pages/Contract';

import { useDataContext } from '../../context/DataContext';

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
