import React from 'react';

import HowToUseIt from 'components/Pages/HowToUseIt';
import { useDataContext } from 'context/DataContext';
import { TextButton } from 'components/UI/TextButton/TextButton';

import './header.scss';

export const Header: React.FC = () => {
  const { setWhatBtnsToShow, whatBtnsToShow } = useDataContext();

  return (
    <>
      <div className="header__container">
        <div>
          {whatBtnsToShow === 'num' ? (
            <TextButton
              text="Reglamentai 📜"
              clickFunction={() => {
                setWhatBtnsToShow('regl');
              }}
            />
          ) : (
            <TextButton
              text="🚛 Numeriai"
              clickFunction={() => {
                setWhatBtnsToShow('num');
              }}
            />
          )}
        </div>

        <HowToUseIt />

        <TextButton
          text="Sutartys"
          clickFunction={() => {
            setWhatBtnsToShow('none');
          }}
        />
      </div>
    </>
  );
};
