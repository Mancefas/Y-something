import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import ReglamentBtns from "./components/ReglamentBtns";
import SearchY from "./components/SearchY";
import SortBtns from "./components/SortBtns";
import { data, sameText } from "./store/data";

function App() {
  const [initData, setInitData] = useState(data);

  const filterMostUsed = () => {
    const newFilteredData = data.filter((e) => e.mostUsed === true);
    setInitData(newFilteredData);
  };
  const wholeData = () => {
    setInitData(data);
  };

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }}>
        <SortBtns
          data={data}
          setInitData={setInitData}
          filterMostUsed={filterMostUsed}
          wholeData={wholeData}
        />
        <SearchY initData={initData} setInitData={setInitData} />
      </div>
      <ReglamentBtns sameText={sameText} data={data} initData={initData} />
    </div>
  );
}

export default App;
