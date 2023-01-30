import React, { useState, useEffect } from 'react';

import ConfirmNewContractData from '../../UI/ConfirmNewContract';

import { useDataContext } from '../../../context/DataContext';

export const Contracts: React.FC = (): JSX.Element => {
  const { lastContract, setLastContract } = useDataContext();

  const [lastContractDate, setLastContractDate] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isConfirmationShown, setIsConfirmationShown] =
    useState<boolean>(false);
  const [isNewContractBtnShown, setIsNewContractBtnShown] =
    useState<boolean>(true);

  const fetchDataFromApi = async (): Promise<void> => {
    try {
      setIsLoading(true);
      if (process.env.REACT_APP_SERVER_URL === undefined) {
        throw new Error('REACT_APP_SERVER_URL is not defined');
      }
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}`);
      const data = await response.json();

      if (response.ok) {
        setLastContract(data.nr);
        setLastContractDate(data.date);
        setIsLoading(false);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setError(err as string);
    }
  };

  useEffect(() => {
    void fetchDataFromApi();
    // eslint-disable-next-line
  }, [lastContract]);

  const newContractHandler = (): void => {
    setIsConfirmationShown(true);
    setIsNewContractBtnShown(false);
  };

  return (
    <div
      style={{
        height: '70vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoading && <h4>kraunama...⏳</h4>}
      {error !== '' && (
        <h4 style={{ color: 'red' }}>Klaida gaunant duomenis : {error}</h4>
      )}

      {!isLoading && error === '' && lastContract !== 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h2>
            Laisva sutartis :{' '}
            <span style={{ color: 'blue' }}>
              NCB-
              {lastContract}
            </span>
          </h2>
          <h4>Paskutinį kartą atnaujinta - {lastContractDate}</h4>
        </div>
      )}
      {isNewContractBtnShown && error === '' && !isLoading && (
        <button className="button-contract" onClick={newContractHandler}>
          SUDARIAU NAUJĄ
        </button>
      )}

      {isConfirmationShown && (
        <ConfirmNewContractData
          setIsNewContractBtnShown={setIsNewContractBtnShown}
          setIsConfirmationShown={setIsConfirmationShown}
        />
      )}
    </div>
  );
};
