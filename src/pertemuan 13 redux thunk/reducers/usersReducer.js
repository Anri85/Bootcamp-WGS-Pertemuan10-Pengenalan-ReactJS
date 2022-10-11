export default (state = [], action) => {
    switch (action.payload) {
        case "FETCH_USERS":
            return [...state, action.payload];
        default:
            return state;
    }
};
