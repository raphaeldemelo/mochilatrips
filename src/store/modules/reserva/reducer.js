import produce from 'immer';

export default function reserva(state = [], action) {
    switch (action.type) {
        case 'ADD_RESERVA_SUCCESS':
            return produce(state, draft => {

                draft.push(action.viagem);

            });

        case 'REMOVE_RESERVA':
            return produce(state, draft => {
                const viagemIndex = draft.findIndex(viagem => viagem.id === action.id);


                if (viagemIndex >= 0) {
                    draft.splice(viagemIndex, 1);
                }
            });

        case 'UPDATE_RESERVA': {

            if (action.amount <= 0) {
                return state;
            }

            return produce(state, draft => {
                const viagemIndex = draft.findIndex(viagem => viagem.id === action.id);

                if (viagemIndex >= 0) {
                    draft[viagemIndex].amount = Number(action.amount);
                }
            });
        }

        default:
            return state;
    }
}