import { useState, useEffect } from "react";

import ConfirmNewData from "./ConfirmNewData";

import { useDataContext } from "../context/DataContext";

const Contracts = () => {
  const { lastData, setLastData } = useDataContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [confirmQuestionShow, setConfirmQuestionShow] =
    useState<boolean>(false);
  const [showFirstButton, setShowFirstButton] = useState<boolean>(true);

  const fetchDataFromApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}`);
      const data = await response.json();

      if (response.ok) {
        setLastData(data.nr);
        setLoading(false);
      } else {
        throw response.statusText;
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(err as string);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
    // eslint-disable-next-line
  }, [lastData]);

  const newContractHandler = () => {
    setConfirmQuestionShow(true);
    setShowFirstButton(false);
  };

  return (
    <div
      style={{
        height: "70vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading && <h4>kraunama...⏳</h4>}
      {error && (
        <h4 style={{ color: "red" }}>Klaida gaunant duomenis : {error}</h4>
      )}

      {loading === false && error === undefined && lastData !== 0 && (
        <div>
          <h2 style={{ marginBottom: "3rem" }}>
            Laisva sutartis :{" "}
            <span style={{ color: "blue" }}>
              NCB-
              {lastData}
            </span>
          </h2>
        </div>
      )}
      {showFirstButton && !error && !loading && (
        <button className="button-contract" onClick={newContractHandler}>
          SUDARIAU NAUJĄ
        </button>
      )}

      {confirmQuestionShow && (
        <ConfirmNewData
          setShowFirstButton={setShowFirstButton}
          setConfirmQuestionShow={setConfirmQuestionShow}
        />
      )}
    </div>
  );
};

export default Contracts;
