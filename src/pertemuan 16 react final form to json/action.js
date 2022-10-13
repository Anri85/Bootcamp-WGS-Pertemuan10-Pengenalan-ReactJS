import axios from "axios";

// menggunakan json-server untuk membuat endpoint api yang mengakses file employee.json
export const SUBMIT = (value) => async (dispatch) => {
    try {
        await axios.post("http://localhost:3001/employee", value);
        dispatch({ type: "SUBMIT", payload: value });
    } catch (error) {
        console.log(error);
    }
};
