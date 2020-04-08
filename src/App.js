import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom'
import Content from "./components/Content";
import store from "./store";
import "./styles/index.scss";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Content />
      </HashRouter>
    </Provider>
  );
}

export default App;
