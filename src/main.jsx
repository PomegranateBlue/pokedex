// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GlobalStyle from "./GlobalStyle.jsx";
import { Provider } from "react-redux";
import store from "../src/redux/config/configStore.jsx";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
