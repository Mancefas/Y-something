import HowToUseIt from "./HowToUseIt";

import { useDataContext } from "../context/DataContext";

const Header = () => {
  const { setWhatBtnsToShow, whatBtnsToShow } = useDataContext();

  const clickedReglmHandler = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => setWhatBtnsToShow("regl");
  const clickedNumbHandler = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => setWhatBtnsToShow("num");

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
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "2rem" }}>
          {whatBtnsToShow === "num" ? (
            <h3 style={{ cursor: "pointer" }} onClick={clickedReglmHandler}>
              Reglamentai
            </h3>
          ) : (
            <h3 style={{ cursor: "pointer" }} onClick={clickedNumbHandler}>
              Numeriai
            </h3>
          )}
        </div>

        <HowToUseIt />
      </div>
    </>
  );
};

export default Header;
