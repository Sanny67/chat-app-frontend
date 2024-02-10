import { all } from "redux-saga/effects";
import AuthSaga from "./Auth/saga.js";

export default function* rootSaga() {
    yield all([
        AuthSaga(),
    ]);
}
