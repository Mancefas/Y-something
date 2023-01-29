import "./App.css";

import Header from "../Header/Header";
import NumberPlates from "../Pages/NumberPlates/NumberPlates";
import ReglamentBtns from "../UI/ReglBtns/ReglamentBtns";
import Contracts from "../Pages/Contracts/Contracts";

import { useDataContext } from "../../context/DataContext";

function App() {
  const { whatBtnsToShow } = useDataContext();
  return (
    <div className="App">
      <Header />
      {whatBtnsToShow === "regl" ? (
        <ReglamentBtns />
      ) : whatBtnsToShow === "num" ? (
        <NumberPlates />
      ) : (
        <Contracts />
      )}
    </div>
  );
}

export default App;
