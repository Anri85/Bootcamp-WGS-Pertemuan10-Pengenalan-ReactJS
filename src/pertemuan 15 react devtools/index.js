/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

import App from "./App";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

root.render(
    <React.StrictMode>
        {/* konfigurasi agar store dapat digunakan dalam App dengan menggunakan Provider */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
