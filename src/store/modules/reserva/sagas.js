import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { addReservaSuccess, updateAmountSuccess } from './actions';


function* addToReserva({ id }) {

    const viagemExiste = yield select(
        state => state.reserva.find(viagem => viagem.id === id)
    );

    const meuStock = yield call(api.get, `/stock/${id}`);

    const stockAmount = meuStock.data.amount;

    const currentStock = viagemExiste ? viagemExiste.amount : 0;

    const amount = currentStock + 1;

    if (amount > stockAmount) {
        alert('quantidade máxima atingida!!')
        return;
    }

    if (viagemExiste) {
        yield put(updateAmountSuccess(id, amount))

    } else {
        const response = yield call(api.get, `trips/${id}`);

        const data = {
            ...response.data,
            amount: 1,
        }

        yield put(addReservaSuccess(data))
        history.push('/reserva');
    }

}

function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    const meuStock = yield call(api.get, `/stock/${id}`);

    const stockAmount = meuStock.data.amount;

    if (amount > stockAmount) {
        alert('quantidade máxima atingida!!')
        return;
    }

    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('ADD_RESERVA_REQUEST', addToReserva),
    takeLatest('UPDATE_RESERVA_REQUEST', updateAmount),
])