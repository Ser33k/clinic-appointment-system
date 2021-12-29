import "./App.css";
import Main from "./components/Main";

import StoreProvider from "./store/storeProvider";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Main />
      </div>
    </StoreProvider>
  );
}

export default App;
