import { createSlice } from "@reduxjs/toolkit";

// membuat sebuah slice yang didalamnya dapat mengatur nilai awai state dan membuat sebuah action perubah state
export const counterSlice = createSlice({
    name: "counter",
    // mengatur nilai awal state
    initialState: {
        value: 0,
    },
    // action
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

// export action agar dapat digunakan pada setiap komponen
export const { increment, decrement, reset } = counterSlice.actions;
// export counter reducer agar dapat dipasangkan pada store
export default counterSlice.reducer;
