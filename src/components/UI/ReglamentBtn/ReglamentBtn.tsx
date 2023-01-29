import React from 'react'

import { sameText } from '../../../store/data';
import { useDataContext } from '../../../context/DataContext';

interface PropTypes {
  id: string
}

export const ReglamentBtn = ({ id }: PropTypes) => {
  const { dataToShow, setShowClipboard } = useDataContext();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const clickedId = (e.target as HTMLElement).id;
    const clickedItem = dataToShow.filter(
      (item) => item.name === `${clickedId}`
    );
    const textFromClickedId = clickedItem[0].text;
    if (textFromClickedId.length <= 9) {
      navigator.clipboard.writeText(`${sameText}${textFromClickedId}`);
    } else {
      navigator.clipboard.writeText(`${textFromClickedId}`);
    }
    setShowClipboard(true);
  };

  return (
    <button className="btn" id={id} onClick={handleClick}>
      {id}
    </button>
  )
}
