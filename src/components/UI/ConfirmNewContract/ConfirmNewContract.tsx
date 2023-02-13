import React, { useState } from 'react';

import { DateForToday } from 'helpers/Helpers';
import { useDataContext } from 'context/DataContext';

import './confirm-new-contract.scss';

interface ChildPropsType {
  setIsNewContractBtnShown: React.Dispatch<React.SetStateAction<boolean>>;
  setIsConfirmationShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConfirmNewContract: React.FC<ChildPropsType> = ({
  setIsNewContractBtnShown,
  setIsConfirmationShown,
}) => {
  const { lastContract, setLastContract } = useDataContext();

  const [error, setEror] = useState<string>('');

  const sendNewDataToAPI = async (params: number): Promise<void> => {
    try {
      if (process.env.REACT_APP_SERVER_URL === undefined) {
        throw new Error('REACT_APP_SERVER_URL is not defined');
      }
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}`, {
        method: 'PATCH',
        body: JSON.stringify({ nr: params, date: DateForToday() }),
      });
      if (response.ok) {
        setIsNewContractBtnShown(true);
        setIsConfirmationShown(false);
        setLastContract(params);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.error(err);
      setEror(err as string);
    }
  };

  const yesBtnHandler = (): void => {
    sendNewDataToAPI(lastContract + 1)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const noBtnHandler = (): void => {
    setIsNewContractBtnShown(true);
    setIsConfirmationShown(false);
  };

  return (
    <div className="confirm-contract">
      <h3>Ar tikrai pridėti naują sutartį?</h3>
      {error !== '' && (
        <div>
          <h3 className="confirm-contract__error">klaida : {error}</h3>
        </div>
      )}
      <div className="confirm-contract__buttons-container">
        <button className="confirm-contract__button" onClick={yesBtnHandler}>
          TAIP
        </button>
        <button className="confirm-contract__button" onClick={noBtnHandler}>
          NE
        </button>
      </div>
    </div>
  );
};
