import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App name={faker.name.findName()} avatar={faker.image.avatar()} comment={faker.lorem.lines()} date={new Date().toDateString()} />
        <App name={faker.name.findName()} avatar={faker.image.avatar()} comment={faker.lorem.lines()} date={new Date().toDateString()} />
        <App name={faker.name.findName()} avatar={faker.image.avatar()} comment={faker.lorem.lines()} date={new Date().toDateString()} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
