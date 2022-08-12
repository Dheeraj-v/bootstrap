import { takeLatest, put, delay } from "redux-saga/effects";

function* setDelete() {
  yield delay(4000);
  yield put({ type: "SET_DELETE_SUCCESS", value: true });
}

const watchDeleteSaga =  function* watchDeleteSaga() {
    yield takeLatest("SET_ADD_EDIT", setDelete);
  }
  
  watchDeleteSaga.sagaName = 'watchDeleteSaga';
  
  export default watchDeleteSaga;