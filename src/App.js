import "./App.css";
import { data, sameText } from "./store/data";

function App() {
  const clicked = (e) => {
    const clickedId = e.target.id;
    const clickedItem = data.filter((item) => item.name === `${clickedId}`);
    const textFromClickedId = clickedItem[0].text;
    navigator.clipboard.writeText(`${sameText}${textFromClickedId}`);
  };

  return (
    <div className="App">
      <div className="btnsDiv">
        {data.map((e) => (
          <button className="btn" id={e.name} onClick={clicked}>
            {e.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
