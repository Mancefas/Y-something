import React, { useState } from "react";

import { useDataContext } from "../context/DataContext";

interface ChildPropsType {
  setShowFirstButton: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirmQuestionShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmNewData: React.FC<ChildPropsType> = ({
  setShowFirstButton,
  setConfirmQuestionShow,
}) => {
  const { lastData, setLastData } = useDataContext();

  const [error, setEror] = useState<string | undefined>();

  const sendNewDataToAPI = async (params: number) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}`, {
        method: "PATCH",
        body: JSON.stringify({ nr: params }),
      });
      if (response.ok) {
        setShowFirstButton(true);
        setConfirmQuestionShow(false);
        setLastData(params);
      } else {
        throw response.statusText;
      }
    } catch (err) {
      console.error(err);
      setEror(err as string);
    }
  };

  const yesBtnHandler = () => {
    sendNewDataToAPI(lastData + 1);
  };

  const noBtnHandler = () => {
    setShowFirstButton(true);
    setConfirmQuestionShow(false);
  };

  return (
    <div style={{ height: "35vh", paddingTop: "3rem" }}>
      <h3>Ar tikrai pridėti naują sutartį?</h3>
      {error && (
        <div>
          <h3 style={{ color: "red" }}>klaida : {error}</h3>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "2rem",
        }}
        className="buttons--container"
      >
        <button className="button-contract" onClick={yesBtnHandler}>
          TAIP
        </button>
        <button className="button-contract" onClick={noBtnHandler}>
          NE
        </button>
      </div>
    </div>
  );
};

export default ConfirmNewData;
