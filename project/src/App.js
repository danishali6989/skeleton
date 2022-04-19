import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStoreAndPersistor, setAppConfiguration, LOCALES } from "generic";
import { APP_CONFIG } from "./utils/config";
import { Router } from "./navigation";

const { persistor, store } = createStoreAndPersistor(storage);
window.store = store;

function App() {
  useEffect(() => {
    global.locales = LOCALES;
    global.config = APP_CONFIG;
    setAppConfiguration(APP_CONFIG);
  }, []);
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
