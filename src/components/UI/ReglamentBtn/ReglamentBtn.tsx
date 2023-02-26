import React from 'react';

import { sameText, data } from 'store/data';
import useCopyToClipboard from 'hooks/useCopyToClipboard';

import './reglament-button.scss';

interface PropTypes {
  reglamentName: string;
}

export const ReglamentBtn = ({ reglamentName }: PropTypes): JSX.Element => {
  const { copyToClipboard } = useCopyToClipboard();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const clickedId = (e.target as HTMLElement).id;
    const clickedItem = data.filter((item) => item.name === `${clickedId}`);
    const textFromClickedId = clickedItem[0].text;

    const textToClipboard =
      textFromClickedId.length <= 9
        ? sameText + textFromClickedId
        : textFromClickedId;

    // using void here because promise error is handled in useCopyToClipboard
    void copyToClipboard(textToClipboard);
  };

  return (
    <button
      className="reglament-button"
      id={reglamentName}
      onClick={handleClick}
    >
      {reglamentName}
    </button>
  );
};
