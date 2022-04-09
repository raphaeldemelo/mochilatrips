import produce from 'immer';

export default function reserva(state = [], action) {
    switch (action.type) {
        case 'ADD_RESERVA':
            return produce(state, draft => {

                const viagemIndex = draft.findIndex(viagem => viagem.id === action.viagem.id);

                if (viagemIndex >= 0) {
                    draft[viagemIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.viagem,
                        amount: 1,
                    });
                }

            })
        default:
            return state;
    }
}