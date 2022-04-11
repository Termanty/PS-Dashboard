import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.render(
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
      <App />
      </StyledEngineProvider>
    </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
