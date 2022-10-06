import "./App.css";

import Header from "./components/Header";
import NumberPlates from "./components/numberPlates/NumberPlates";
import ReglamentBtns from "./components/ReglamentBtns";
import Contracts from "./components/Contracts";

import { useDataContext } from "./context/DataContext";

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
