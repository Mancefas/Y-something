import { useState, useEffect } from "react";

interface dataProps {
  company: string;
  nr: number;
}

const Contracts = () => {
  const [lastData, setLastData] = useState<dataProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const fetchDataFromApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}`);
      const data = await response.json();

      if (data !== null) {
        setLastData(data);
        setLoading(false);
      } else if (data === null) {
        throw "serverio klaida";
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
  }, []);

  return (
    <div
      style={{
        height: "70vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading && <h4>kraunama...</h4>}
      {error && <h4 style={{ color: "red" }}>{error}</h4>}

      {loading === false && error === undefined && lastData !== null && (
        <div>
          <h2>Paskutinė įmonė : {lastData?.company}</h2>
          <h2>Paskutinė sutartis : NCB-{lastData?.nr}</h2>
        </div>
      )}
    </div>
  );
};

export default Contracts;
