import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

// membuat sebuah store yang menampung reducer
export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
});
