import React from 'react';

import Header from '../Header';
import NumberPlates from '../Pages/NumberPlates';
import Reglaments from '../Pages/Reglaments';
import Contracts from '../Pages/Contracts';

import { useDataContext } from '../../context/DataContext';

import './App.css';

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
        <Contracts />
      )}
    </div>
  );
};

export default App;
