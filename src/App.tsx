import "./App.css";
import Header from "./components/Header";
import ReglamentBtns from "./components/ReglamentBtns";
import SearchY from "./components/SearchY";
import SortBtns from "./components/SortBtns";
import { DataContextProvider } from "./context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <div className="App">
        <Header />
        <div style={{ display: "flex" }}>
          <SortBtns />
          <SearchY />
        </div>
        <ReglamentBtns />
      </div>
    </DataContextProvider>
  );
}

export default App;
