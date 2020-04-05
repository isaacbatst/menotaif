import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import Content from "./components/Content";
import store from "./store";
import "./styles/index.scss";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
