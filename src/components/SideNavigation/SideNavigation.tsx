import React from 'react';

import { ReactComponent as AddIcon } from 'assets/icons/Add.svg';
import { ReactComponent as Paper } from 'assets/icons/Paper.svg';
import { ReactComponent as TruckIcon } from 'assets/icons/Truck.svg';
import { useDataContext } from 'context/DataContext';

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
