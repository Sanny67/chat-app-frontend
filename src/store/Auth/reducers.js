import * as actionTypes from "./actionTypes";

const initialState = {
    loading: false,
    user: {},
    errorMessage: "",
};

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
        return {
            ...state,
            loading: action.payload,
        };
        case actionTypes.REGISTER_ACTION:
        return {
            ...state,
            loading: true,
        };
        case actionTypes.REGISTER_ACTION_SUCCESS:
        return {
            ...state,
            loading: false,
        };
        case actionTypes.REGISTER_ACTION_FAILURE:
        return {
            ...state,
            loading: false,
            errorMessage: action.message,
        };
        case actionTypes.LOGIN_ACTION:
        return {
            ...state,
            loading: true,
        };
        case actionTypes.LOGIN_ACTION_SUCCESS:
        return {
            ...state,
            loading: false,
            user: action.payload.user,
        };
        case actionTypes.LOGIN_ACTION_FAILURE:
        return {
            ...state,
            loading: false,
            errorMessage: action.message,
        };
        case actionTypes.LOGOUT_ACTION:
        return {
            ...state,
            loading: true,
            user: {},
        };
        case actionTypes.LOGOUT_ACTION_SUCCESS:
        return {
            ...state,
            loading: false,
            user: {},
        };
        case actionTypes.LOGOUT_ACTION_FAILURE:
        return {
            ...state,
            loading: false,
            user: action.payload,
        };
        default:
            return state;
    }
};

export default Auth;