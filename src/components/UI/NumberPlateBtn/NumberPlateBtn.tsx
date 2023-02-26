import React from 'react';

import { nrPlates } from 'store/data';
import useCopyToClipboard from 'hooks/useCopyToClipboard';

import './number-plate-button.scss';

interface PropTypes {
  shortNr: string;
}

export const NumberPlateBtn: React.FC<PropTypes> = ({ shortNr }) => {
  const { copyToClipboard } = useCopyToClipboard();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const clickedId = (e.target as HTMLElement).id;
    const clickedItem = nrPlates.filter(
      (item) => item.shortNr === `${clickedId}`
    );
    const textFromClickedId = clickedItem[0].fullNr;

    // using void here because promise error is handled in useCopyToClipboard
    void copyToClipboard(textFromClickedId);
  };

  return (
    <button className="number-plate__button" id={shortNr} onClick={handleClick}>
      {shortNr}
    </button>
  );
};
