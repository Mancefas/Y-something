import React from 'react';

import Clipboard from 'components/UI/ClipBoard';
import { useDataContext } from 'context/DataContext';

import './how-to-use-it.scss';

export const HowToUseIt: React.FC = () => {
  const { setShowClipboard } = useDataContext();

  const handleClick = (): void => {
    navigator.clipboard
      .writeText('Pateikiamas teksas su regl.nr. ar kitu reikalavimu')
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
    setShowClipboard(true);
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
