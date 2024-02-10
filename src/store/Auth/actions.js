import * as actionTypes from "./actionTypes";

export const performRegisterAction = (params) => ({
    type: actionTypes.REGISTER_ACTION,
    params,
});

export const performLoginAction = (params) => ({
    type: actionTypes.LOGIN_ACTION,
    params,
});

export const performLogoutAction = (params) => ({
  type: actionTypes.LOGOUT_ACTION,
  params,
});