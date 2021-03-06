import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import notesApp from "./reducer";
import App from "./App";
const store = createStore(notesApp);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
