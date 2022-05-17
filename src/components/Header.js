import React, { useState } from "react";
import HowToUseIt from "./HowToUseIt";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);
  return (
    <>
      <div
        style={{
          height: "5rem",
          borderBottom: "1px solid",
          borderColor: "black",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <h3 onClick={showModalHandler} style={{ cursor: "pointer" }}>
          Kaip naudotis?
        </h3>
      </div>
      {showModal && <HowToUseIt onClose={hideModalHandler} />}
    </>
  );
};

export default Header;
