const initalState = {
    user: null,
};

const userReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "REGISTER":
            return {
                ...state,
                user: payload,
            };
        case "LOGIN":
            return {
                ...state,
                user: payload,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default userReducer;
