import { put, all, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import API from "../../utils/API";

function* performRegisterActionSaga({ params }) {
    console.log("params2", params)
    try {
      const { data } = yield API.post("/user/register", params );
      console.log("data", data)
  
      if (data.status === "success") {
        yield put({
          type: actionTypes.REGISTER_ACTION_SUCCESS,
          payload: data,
        });
        localStorage.setItem("token", data.data.token)
  
      } else {
        yield put({
          type: actionTypes.REGISTER_ACTION_FAILURE,
          message: data.message,
        });
      }
  
    } catch (error) {
      yield put({
        type: actionTypes.LOGIN_ACTION_FAILURE,
        message: "Invalid Credentials",
      });
    }
}

function* performLoginActionSaga({ params }) {
  console.log("params1", params)
  try {
    const { data } = yield API.post("login", params );

    if (data.status === "success") {
      yield put({
        type: actionTypes.LOGIN_ACTION_SUCCESS,
        payload: data,
      });
      localStorage.setItem("token", data.data.token)

    } else {
      yield put({
        type: actionTypes.LOGIN_ACTION_FAILURE,
        message: data.message,
      });
    }

  } catch (error) {
    yield put({
      type: actionTypes.LOGIN_ACTION_FAILURE,
      message: "Invalid Credentials",
    });
  }
}

function* performLogoutActionSaga() {
  try {
    yield put({ type: actionTypes.SET_LOADING, payload: true });
    const { data } = yield API.post("/logout");

    if (data.status === "success") {
      yield put({
        type: actionTypes.LOGOUT_ACTION_SUCCESS,
        payload: data,
      });
      localStorage.removeItem("token");
      console.log("Successfully Logged Out");
      
    } else {
      console.log("There was an error while logging out");
      yield put({
        type: actionTypes.LOGOUT_ACTION_FAILURE,
        errorMessage: "There was an error while logging out",
      });
    }

  } catch (error) {
    console.log("There was an error while logging out");
    yield put({
      type: actionTypes.LOGOUT_ACTION_FAILURE,
      errorMessage: "There was an error while logging out",
    });
  }
}

function* AuthSaga() {
  yield all([
    takeLatest(actionTypes.REGISTER_ACTION, performRegisterActionSaga),
    takeLatest(actionTypes.LOGIN_ACTION, performLoginActionSaga),
    takeLatest(actionTypes.LOGOUT_ACTION, performLogoutActionSaga),
  ]);
}

export default AuthSaga;
