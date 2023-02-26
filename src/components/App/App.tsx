import React from 'react';

import SideNavigation from 'components/SideNavigation';
import Reglaments from 'components/Pages/Reglaments';
import NumberPlates from 'components/Pages/NumberPlates';
import HowToUseIt from 'components/Pages/HowToUseIt';
import Contract from 'components/Pages/Contract';
import { useDataContext } from 'context/DataContext';

import './app.scss';
import ErrorMessage from 'components/ErrorMessage';

const App: React.FC = () => {
  const { isShowingPage, clipboardError } = useDataContext();
  return (
    <>
      <div className="app" style={{ display: 'flex' }}>
        <SideNavigation />
        <div className="app__container-inner">
          {clipboardError !== '' && <ErrorMessage errorText={clipboardError} />}

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
