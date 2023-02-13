import React from 'react';

import './side-navigation.scss';

interface propTypes {
  clickFunction: (event: React.MouseEvent<HTMLButtonElement>) => void;
  Icon: React.ReactElement;
  text: string;
}

export const SideNavigationButton: React.FC<propTypes> = ({
  clickFunction,
  Icon,
  text,
}) => {
  return (
    <button
      aria-label={text}
      className="side-navigation__button"
      onClick={clickFunction}
    >
      <div className="side-navigation__button-icon">{Icon}</div>
      <span className="side-navigation__button-text">{text}</span>
    </button>
  );
};
