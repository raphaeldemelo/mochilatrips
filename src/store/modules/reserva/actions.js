export function addReserva(viagem) {
    return {
        type: 'ADD_RESERVA',
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