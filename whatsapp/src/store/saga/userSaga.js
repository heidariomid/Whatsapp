import {takeEvery, put} from 'redux-saga/effects';
import {actions} from '../actions';
// import Axios from '../../Https/axios';
// const axios = new Axios();

//TODO FETCH Worker
function* fetchUserWorker(action) {
	try {
		// const users = yield call(() => axios.get('user/add').then((res) => res.data.items));
		yield put({type: actions.SEND_MESSAGE_SUCCESS, payload: {messages: action.payload.messages}});
	} catch (error) {
		yield put({type: actions.SEND_MESSAGE_FAILED, payload: {messages: error.message}});
	}
}
//STUB FETCH Watcher
export function* fetchUserWatcher() {
	yield takeEvery(actions.SEND_MESSAGE, fetchUserWorker);
}
