import React from 'react';

import { ReactComponent as AddIcon } from 'Assets/Icons/Add.svg';
import { ReactComponent as Paper } from 'Assets/Icons/Paper.svg';
import { ReactComponent as TruckIcon } from 'Assets/Icons/Truck.svg';
import { useDataContext } from 'Context/DataContext';
import { SideNavigationButton } from './SideNavigationButton';

import './side-navigation.scss';

export const SideNavigation: React.FC = () => {
  const { setWhatBtnsToShow } = useDataContext();

  return (
    <nav className="side-navigation">
      <ul className="side-navigation__list">
        <li className="side-navigation__item">
          <SideNavigationButton
            clickFunction={() => {
              setWhatBtnsToShow('regl');
            }}
            Icon={<Paper />}
            text="Reglamentai"
          />
        </li>

        <li className="side-navigation__item">
          <SideNavigationButton
            clickFunction={() => {
              setWhatBtnsToShow('num');
            }}
            Icon={<TruckIcon />}
            text="Numeriai"
          />
        </li>

        <li className="side-navigation__item">
          <SideNavigationButton
            clickFunction={() => {
              setWhatBtnsToShow('none');
            }}
            Icon={<AddIcon />}
            text="Sutartys"
          />
        </li>
      </ul>
    </nav>
  );
};
