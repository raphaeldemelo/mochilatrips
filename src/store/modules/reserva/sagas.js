import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addReservaSuccess } from './actions';


function* addToReserva({ id }) {
    const response = yield call(api.get, `trips/${id}`);

    yield put(addReservaSuccess(response.data))
}

export default all([
    takeLatest('ADD_RESERVA_REQUEST', addToReserva)
])