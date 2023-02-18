import React from 'react';

import Clipboard from 'components/UI/ClipBoard';
import { useDataContext } from 'context/DataContext';

import './how-to-use-it.scss';

export const HowToUseIt: React.FC = () => {
  const { setShowClipboard } = useDataContext();

  const handleClick = (): void => {
    navigator.clipboard
      .writeText('Text with regl.nr. or number plate')
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
    setShowClipboard(true);
  };

  return (
    <>
      <div className="use-instruction">
        <h1 className="use-instruction__header">How to use it </h1>
        <h3 style={{ textAlign: 'center' }}>
          Find a button with needed reglament or number and press on it
        </h3>

        <h3 className="use-instruction__arrow">⬇️</h3>
        <div className="use-instruction__button-container">
          <Clipboard />
          <button onClick={handleClick} className="use-instruction__button">
            Y901
          </button>
        </div>
        <h3 className="use-instruction__arrow">⬇️</h3>
        <h3 className="use-instruction__paragraph">
          Select where you need to paste your text and then click the second
          button on the mouse and &quot;paste&quot; or &quot;CTRL&quot; +
          &quot;V&quot;
        </h3>

        <h3 className="use-instruction__arrow">⬇️</h3>
        <input className="use-instruction__text-input" type="text"></input>
      </div>
    </>
  );
};
