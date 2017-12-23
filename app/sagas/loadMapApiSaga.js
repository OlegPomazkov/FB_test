var call = require('redux-saga/effects').call;
var put = require('redux-saga/effects').put;
var takeEvery = require('redux-saga/effects').takeEvery;

function* onLoadMapApi(action) {
  try {
    const newMap = yield call(() => 
      new Promise((resolve, reject) => window.ymaps.ready(() => resolve('OK')))
    );	

    yield put({type: "LOAD_MAP_API_SUCCESS", payload: newMap});
  } catch (e) {
    yield put({type: "LOAD_MAP_API_ERROR", payload: e.message});
  }
}

function* loadMapApiSaga() {
  yield takeEvery("LOAD_MAP_API", onLoadMapApi);
}

module.exports.loadMapApiSaga = loadMapApiSaga;