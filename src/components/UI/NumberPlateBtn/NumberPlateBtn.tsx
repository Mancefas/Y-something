import React from 'react';

import { useDataContext } from '../../../context/DataContext';
import { nrPlates } from '../../../store/data';

import './number-plate-button.scss';

interface PropTypes {
  shortNr: string;
}

export const NumberPlateBtn: React.FC<PropTypes> = ({ shortNr }) => {
  const { setShowClipboard } = useDataContext();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const clickedId = (e.target as HTMLElement).id;
    const clickedItem = nrPlates.filter(
      (item) => item.shortNr === `${clickedId}`
    );
    const textFromClickedId = clickedItem[0].fullNr;

    navigator.clipboard
      .writeText(`${textFromClickedId}`)
      .then(() => {
        setShowClipboard(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button className="number-plate__button" id={shortNr} onClick={handleClick}>
      {shortNr}
    </button>
  );
};
