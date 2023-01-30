import React from 'react';

import Clipboard from '../../UI/ClipBoard';

import { nrPlates } from '../../../store/data';
import { useDataContext } from '../../../context/DataContext';

export const NumberPlates: React.FC = () => {
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
    <>
      <Clipboard />
      <div
        className="btnsDiv"
        style={{ margin: 'auto', paddingTop: '2rem', paddingBottom: '2rem' }}
      >
        {nrPlates.map((e) => (
          <button
            key={e.shortNr}
            className="btn"
            id={e.shortNr}
            onClick={handleClick}
          >
            {e.shortNr}
          </button>
        ))}
      </div>
    </>
  );
};
