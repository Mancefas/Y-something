import HowToUseIt from "../Pages/HowToUseIt/HowToUseIt";

import { useDataContext } from "../../context/DataContext";

const Header = () => {
  const { setWhatBtnsToShow, whatBtnsToShow } = useDataContext();

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
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", gap: "2rem" }}>
          {whatBtnsToShow === "num" ? (
            <h3 style={{ cursor: "pointer" }} onClick={() => setWhatBtnsToShow("regl")}>
              Reglamentai
            </h3>
          ) : (
            <h3 style={{ cursor: "pointer" }} onClick={() => setWhatBtnsToShow("num")}>
              Numeriai
            </h3>
          )}
        </div>

        <HowToUseIt />

        <h3 style={{ cursor: "pointer" }} onClick={() => setWhatBtnsToShow("none")}>
          Sutartys
        </h3>
      </div>
    </>
  );
};

export default Header;
