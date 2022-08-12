import watchAddEditSaga from "./Saga1";
import watchDeleteSaga from "./Saga2";
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga () {
    yield all([
        fork(watchAddEditSaga),
        fork(watchDeleteSaga),
    ]);
}