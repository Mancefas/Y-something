import React from 'react';

import { ReactComponent as AddIcon } from 'assets/icons/Add.svg';
import { ReactComponent as Paper } from 'assets/icons/Paper.svg';
import { ReactComponent as TruckIcon } from 'assets/icons/Truck.svg';
import { ReactComponent as Question } from 'assets/icons/Question.svg';
import { useDataContext } from 'context/DataContext';

import { SideNavigationButton } from './SideNavigationButton';
import './side-navigation.scss';

export const SideNavigation: React.FC = () => {
  const { setIsShowingPage } = useDataContext();

  return (
    <nav className="side-navigation">
      <ul className="side-navigation__list">
        <li className="side-navigation__item">
          <SideNavigationButton
            clickFunction={() => {
              setIsShowingPage('reglaments');
            }}
            Icon={<Paper />}
            text="Reglaments"
          />
        </li>

        <li className="side-navigation__item">
          <SideNavigationButton
            clickFunction={() => {
              setIsShowingPage('numbers');
            }}
            Icon={<TruckIcon />}
            text="Numbers"
          />
        </li>

        <li className="side-navigation__item">
          <SideNavigationButton
            clickFunction={() => {
              setIsShowingPage('none');
            }}
            Icon={<AddIcon />}
            text="API"
          />
        </li>

        <li className="side-navigation__item">
          <SideNavigationButton
            clickFunction={() => {
              setIsShowingPage('howToUseIt');
            }}
            Icon={<Question />}
            text="Instruction"
          />
        </li>
      </ul>
    </nav>
  );
};
