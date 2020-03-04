import React from "react";
import { Provider } from "react-redux";
import Content from "./components/Content";
import store from "./store";
import "./styles/index.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Content />
      </div>
    </Provider>
  );
}

export default App;
