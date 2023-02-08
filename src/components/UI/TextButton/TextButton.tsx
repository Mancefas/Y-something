import React from 'react';

import './text-button.scss';

interface propTypes {
  text: string;
  clickFunction: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const TextButton = ({ text, clickFunction }: propTypes): JSX.Element => {
  return (
    <a className="text-button" onClick={clickFunction}>
      {text}
    </a>
  );
};
