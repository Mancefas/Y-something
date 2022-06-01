import HowToUseIt from "./HowToUseIt";

const Header = () => {
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
        <HowToUseIt />
      </div>
    </>
  );
};

export default Header;
