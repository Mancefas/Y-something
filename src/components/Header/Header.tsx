import React from 'react';

import HowToUseIt from 'Components/Pages/HowToUseIt';
import { useDataContext } from 'Context/DataContext';

import './header.scss';

export const Header: React.FC = () => {
  const { setWhatBtnsToShow, whatBtnsToShow } = useDataContext();

  return (
    <>
      <div className="header__container">
        <div>
          {whatBtnsToShow === 'num' ? (
            <a
              className="header__navigation-button"
              onClick={() => {
                setWhatBtnsToShow('regl');
              }}
            >
              Reglamentai
            </a>
          ) : (
            <a
              className="header__navigation-button"
              onClick={() => {
                setWhatBtnsToShow('num');
              }}
            >
              Numeriai
            </a>
          )}
        </div>

        <HowToUseIt />

        <a
          className="header__navigation-button"
          onClick={() => {
            setWhatBtnsToShow('none');
          }}
        >
          Sutartys
        </a>
      </div>
    </>
  );
};
