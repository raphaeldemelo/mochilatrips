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

export function updateAmountReserva(id, amount) {
    return {
        type: 'UPDATE_RESERVA',
        id,
        amount,
    }
}