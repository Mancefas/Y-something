import React, { useState } from "react";

const HowToUseIt = () => {
  const handler = () => {
    navigator.clipboard.writeText(
      "Pateikiamas teksas su regl.nr. ar kitu reikalavimu"
    );
  };

  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);

  return (
    <>
      <h3 onClick={showModalHandler} style={{ cursor: "pointer" }}>
        Kaip naudotis?
      </h3>

      {/* Modal */}

      {showModal && (
        <div
          onClick={hideModalHandler}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "1",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "60vh",
              width: "45vw",
              height: "fit-content",
              paddingBottom: "2rem",
              paddingTop: "1rem",
              borderRadius: "7px",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                width: "95%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <h2 onClick={hideModalHandler} style={{ cursor: "pointer" }}>
                ❌
              </h2>
            </div>
            <h1 style={{ marginBottom: "3rem" }}>Naudojimosi instrukcija</h1>
            <h3>Randam reikiamą numerį ir paspaudžiam ant jo</h3>
            <h3 style={{ margin: "1rem" }}>⬇️</h3>
            <div style={{ zIndex: "1" }}>
              <button onClick={handler} style={{}} className="btn">
                Y901
              </button>
            </div>
            <h3 style={{ margin: "1rem" }}>⬇️</h3>
            <h3 style={{ width: "75%", textAlign: "center" }}>
              Tada pasirenkam kur reikia pateikti tekstą ir ten paspaudus antrą
              pelės mygtuką ir paspaudžiam "paste"/"įklijuoti" arba spaudžiam
              "CTRL" + "V"
            </h3>
            <h3 style={{ margin: "1rem" }}>⬇️</h3>
            <input
              type="text"
              style={{
                height: "2rem",
                width: "21rem",
                fontWeight: "700",
                textAlign: "center",
              }}
            ></input>
          </div>
        </div>
      )}
    </>
  );
};

export default HowToUseIt;
