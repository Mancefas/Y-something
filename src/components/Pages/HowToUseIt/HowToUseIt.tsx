import React, { useState } from 'react';

import './how-to-use-it.scss';

export const HowToUseIt: React.FC = () => {
  const handler = (): void => {
    navigator.clipboard
      .writeText('Pateikiamas teksas su regl.nr. ar kitu reikalavimu')
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const [showModal, setShowModal] = useState(false);
  const handleHideModal = (): void => {
    setShowModal(!showModal);
  };

  return (
    <>
      <h3
        onClick={() => {
          setShowModal(!showModal);
        }}
        style={{ cursor: 'pointer' }}
      >
        Kaip naudotis?
      </h3>

      {/* Modal */}

      {showModal && (
        <div
          onClick={handleHideModal}
          className="use-instruction__modal-outter"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="use-instruction__modal-inner"
          >
            <div className="use-instruction__close-container">
              <button
                className="use-instruction__close-button"
                onClick={handleHideModal}
              >
                ❌
              </button>
            </div>
            <h1 className="use-instruction__header">Naudojimosi instrukcija</h1>
            <h3 style={{ textAlign: 'center' }}>
              Randam reikiamą numerį ir paspaudžiam ant jo
            </h3>
            <h3 className="use-instruction__arrow">⬇️</h3>
            {/* style only to show button :before box */}
            <div style={{ zIndex: '1' }}>
              <button onClick={handler} className="use-instruction__button">
                Y901
              </button>
            </div>
            <h3 className="use-instruction__arrow">⬇️</h3>
            <h3 className="use-instruction__paragraph">
              Tada pasirenkam kur reikia pateikti tekstą ir ten paspaudus antrą
              pelės mygtuką ir paspaudžiam
              &quot;paste&quot;/&quot;įklijuoti&quot; arba spaudžiam
              &quot;CTRL&quot; + &quot;V&quot;
            </h3>

            <h3 className="use-instruction__arrow">⬇️</h3>
            <input className="use-instruction__text-input" type="text"></input>
          </div>
        </div>
      )}
    </>
  );
};
