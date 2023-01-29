import React, { useState } from "react";

import { DateForToday } from "../../../helpers/Helpers";

import { useDataContext } from "../../../context/DataContext";

interface ChildPropsType {
  setIsNewContractBtnShown: React.Dispatch<React.SetStateAction<boolean>>;
  setIsConfirmationShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmNewData: React.FC<ChildPropsType> = ({
  setIsNewContractBtnShown,
  setIsConfirmationShown,
}) => {
  const { lastContract, setLastContract } = useDataContext();

  const [error, setEror] = useState<string | undefined>();

  const sendNewDataToAPI = async (params: number) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}`, {
        method: "PATCH",
        body: JSON.stringify({ nr: params, date: DateForToday() }),
      });
      if (response.ok) {
        setIsNewContractBtnShown(true);
        setIsConfirmationShown(false);
        setLastContract(params);
      } else {
        throw response.statusText;
      }
    } catch (err) {
      console.error(err);
      setEror(err as string);
    }
  };

  const yesBtnHandler = () => {
    sendNewDataToAPI(lastContract + 1);
  };

  const noBtnHandler = () => {
    setIsNewContractBtnShown(true);
    setIsConfirmationShown(false);
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
