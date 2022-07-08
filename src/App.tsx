import "./App.css";

import Header from "./components/Header";
import ReglamentBtns from "./components/ReglamentBtns";

import { DataContextProvider } from "./context/DataContext";

function App() {
  return (
    <DataContextProvider>
      <div className="App">
        <Header />
        <ReglamentBtns />
      </div>
    </DataContextProvider>
  );
}

export default App;
