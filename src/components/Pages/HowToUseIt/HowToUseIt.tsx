import React, { useState } from 'react';

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
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '1',
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '60vh',
              minWidth: '45vw',
              width: 'fit-content',
              height: 'fit-content',
              paddingBottom: '2rem',
              paddingTop: '1rem',
              borderRadius: '7px',
              backgroundColor: '#fff',
            }}
          >
            <div
              style={{
                minWidth: '95%',
                width: 'fit-content',
                display: 'flex',
                justifyContent: 'flex-end',
                textAlign: 'center',
              }}
            >
              <h2 onClick={handleHideModal} style={{ cursor: 'pointer' }}>
                ❌
              </h2>
            </div>
            <h1
              style={{
                marginBottom: '3rem',
                textAlign: 'center',
              }}
            >
              Naudojimosi instrukcija
            </h1>
            <h3 style={{ textAlign: 'center' }}>
              Randam reikiamą numerį ir paspaudžiam ant jo
            </h3>
            <h3 style={{ margin: '1rem' }}>⬇️</h3>
            <div style={{ zIndex: '1' }}>
              <button onClick={handler} className="btn">
                Y901
              </button>
            </div>
            <h3 style={{ margin: '1rem' }}>⬇️</h3>
            <h3 style={{ width: '75%', textAlign: 'center' }}>
              Tada pasirenkam kur reikia pateikti tekstą ir ten paspaudus antrą
              pelės mygtuką ir paspaudžiam
              &quot;paste&quot;/&quot;įklijuoti&quot; arba spaudžiam
              &quot;CTRL&quot; + &quot;V&quot;
            </h3>

            <h3 style={{ margin: '1rem' }}>⬇️</h3>
            <input
              type="text"
              style={{
                height: '2rem',
                width: '80%',
                fontWeight: '700',
                textAlign: 'center',
              }}
            ></input>
          </div>
        </div>
      )}
    </>
  );
};
