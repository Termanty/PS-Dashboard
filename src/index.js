import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import {AuthContextProvider} from "./context/AuthContext"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthContextProvider>
      <App />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
