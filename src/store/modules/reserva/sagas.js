import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addReservaSuccess, updateAmountReserva } from './actions';


function* addToReserva({ id }) {

    const viagemExiste = yield select(
        state => state.reserva.find(viagem => viagem.id === id)
    );

    if (viagemExiste) {
        const amount = viagemExiste.amount + 1;
        yield put(updateAmountReserva(id, amount))

    } else {
        const response = yield call(api.get, `trips/${id}`);

        const data = {
            ...response.data,
            amount: 1,
        }

        yield put(addReservaSuccess(data))
    }

}

export default all([
    takeLatest('ADD_RESERVA_REQUEST', addToReserva)
])