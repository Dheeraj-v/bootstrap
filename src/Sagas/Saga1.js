import { takeLatest, put, delay } from "redux-saga/effects";

export function* setAddEdit() {
  yield delay(4000);
  yield put({ type: "SET_ADD_EDIT_SUCCESS", value: true });
}

const watchAddEditSaga =  function* watchAddEditSaga() {
  yield takeLatest("SET_ADD_EDIT", setAddEdit);
}

watchAddEditSaga.sagaName = 'watchAddEditSaga';

export default watchAddEditSaga;