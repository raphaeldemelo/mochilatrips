export default function reserva(state = [], action) {
    switch (action.type) {
        case 'ADD_RESERVA':
            return [...state, action.viagem];
        default:
            return state;
    }
}