import { nrPlates } from "../../store/data";

const NumberPlates = () => {
  const clickedHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const clickedId = (e.target as HTMLElement).id;
    const clickedItem = nrPlates.filter(
      (item) => item.shortNr === `${clickedId}`
    );
    const textFromClickedId = clickedItem[0].fullNr;
    navigator.clipboard.writeText(`${textFromClickedId}`);
  };

  return (
    <div
      className="btnsDiv"
      style={{ margin: "auto", paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      {nrPlates.map((e) => (
        <button
          key={e.shortNr}
          className="btn"
          id={e.shortNr}
          onClick={clickedHandler}
        >
          {e.shortNr}
        </button>
      ))}
    </div>
  );
};

export default NumberPlates;
