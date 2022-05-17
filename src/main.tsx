import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ContextProvider } from "./contexts/Context";
import { CarContextProvider } from "./contexts/CarContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <CarContextProvider>
        <App />
      </CarContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
