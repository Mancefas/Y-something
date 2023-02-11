import React from 'react';

import { ReactComponent as AddIcon } from 'Assets/Icons/Add.svg';
import { ReactComponent as Paper } from 'Assets/Icons/Paper.svg';
import { ReactComponent as TruckIcon } from 'Assets/Icons/Truck.svg';
import { useDataContext } from 'Context/DataContext';

import './side-navigation.scss';

export const SideNavigation: React.FC = () => {
  const { setWhatBtnsToShow } = useDataContext();

  return (
    <nav className="side-navigation">
      <ul className="side-navigation__list">
        <li
          className="side-navigation__item"
          onClick={() => {
            setWhatBtnsToShow('regl');
          }}
        >
          <Paper className="side-navigation__item-icon" />
          <span className="side-navigation__item-text">Reglamentai</span>
        </li>

        <li
          className="side-navigation__item"
          onClick={() => {
            setWhatBtnsToShow('num');
          }}
        >
          <TruckIcon className="side-navigation__item-icon" />
          <span className="side-navigation__item-text">Numeriai</span>
        </li>

        <li
          className="side-navigation__item"
          onClick={() => {
            setWhatBtnsToShow('none');
          }}
        >
          <AddIcon className="side-navigation__item-icon" />
          <span className="side-navigation__item-text">Sutartys</span>
        </li>
      </ul>
    </nav>
  );
};
