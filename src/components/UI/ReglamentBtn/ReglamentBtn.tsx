import React from 'react';

import { sameText } from '../../../store/data';
import { useDataContext } from '../../../context/DataContext';
import './reglament-button.scss';

interface PropTypes {
  reglamentName: string;
}

export const ReglamentBtn = ({ reglamentName }: PropTypes): JSX.Element => {
  const { dataToShow, setShowClipboard } = useDataContext();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const clickedId = (e.target as HTMLElement).id;
    const clickedItem = dataToShow.filter(
      (item) => item.name === `${clickedId}`
    );
    const textFromClickedId = clickedItem[0].text;
    if (textFromClickedId.length <= 9) {
      navigator.clipboard
        .writeText(`${sameText}${textFromClickedId}`)
        .then(() => {
          setShowClipboard(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigator.clipboard
        .writeText(`${textFromClickedId}`)
        .then(() => {
          setShowClipboard(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
