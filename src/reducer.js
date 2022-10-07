import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";

// membuat sebuah store yang menampung reducer untuk counting
export default configureStore({
    reducer: {
        // memasangkan reducer counter
        counter: counterReducer,
    },
});
