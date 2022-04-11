export function addReservaRequest(id) {
    return {
        type: 'ADD_RESERVA_REQUEST',
        id
    }
}

export function addReservaSuccess(viagem) {
    return {
        type: 'ADD_RESERVA_SUCCESS',
        viagem
    }
}

export function removeReserva(id) {
    return {
        type: 'REMOVE_RESERVA',
        id,
    }
}

export function updateAmountRequest(id, amount) {
    return {
        type: 'UPDATE_RESERVA_REQUEST',
        id,
        amount,
    }
}
export function updateAmountSuccess(id, amount) {
    return {
        type: 'UPDATE_RESERVA_SUCCESS',
        id,
        amount,
    }
}