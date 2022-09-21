import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const arr = [
    {
        name: "Arya",
        comment: "This is awesome",
        date: new Date().toDateString(),
        avatar: faker.image.avatar(),
    },
    {
        name: "Desi",
        comment: "You did well",
        date: new Date().toDateString(),
        avatar: faker.image.avatar(),
    },
    {
        name: "Reza",
        comment: "Congratulation",
        date: new Date().toDateString(),
        avatar: faker.image.avatar(),
    },
];

root.render(
    <React.StrictMode>
        <App data={arr} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
