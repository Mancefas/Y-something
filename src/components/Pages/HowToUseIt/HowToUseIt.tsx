import React from 'react';

import Clipboard from 'components/UI/ClipBoard';
import useCopyToClipboard from 'hooks/useCopyToClipboard';

import './how-to-use-it.scss';

export const HowToUseIt: React.FC = () => {
  const { copyToClipboard } = useCopyToClipboard();

  const handleClick = (): void => {
    // using void here because promise error is handled in useCopyToClipboard
    void copyToClipboard('Teksas su regl.nr. ar kitu reikalavimu');
  };

  return (
    <>
      <div className="use-instruction">
        <h1 className="use-instruction__header">Naudojimosi instrukcija</h1>
        <h3 style={{ textAlign: 'center' }}>
          Randam reikiamą numerį ir paspaudžiam ant jo
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
          Tada pasirenkam kur reikia pateikti tekstą ir ten paspaudus antrą
          pelės mygtuką ir paspaudžiam &quot;paste&quot;/&quot;įklijuoti&quot;
          arba spaudžiam &quot;CTRL&quot; + &quot;V&quot;
        </h3>

        <h3 className="use-instruction__arrow">⬇️</h3>
        <input className="use-instruction__text-input" type="text"></input>
      </div>
    </>
  );
};
