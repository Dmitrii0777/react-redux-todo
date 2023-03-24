// REACT
import React from "react";
import ReactDOM from "react-dom/client";

// REDUX
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import App from "@components/app/App";

// STORE
import { store, persistor } from "./store";

// STYLES
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path=":filter" element={<App />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
