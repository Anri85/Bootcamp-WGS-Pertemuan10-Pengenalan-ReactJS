import axios from "./axios";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
    const response = await axios.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response?.data });
};

export const fetchUsers = (id) => async (dispatch) => {
    const response = await axios.get(`/users/${id}`);
    dispatch({ type: "FETCH_USERS", payload: response?.data });
};

export const fetchUsersAndPost = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map("userId")
        .uniq()
        .forEach((id) => dispatch(fetchUsers(id)))
        .value();
};
