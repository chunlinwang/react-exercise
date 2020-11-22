import {INCREMENT, DECREMENT} from './actionType' 

const initialSate = {
    compteur: 20,
}

const reducer = (state = initialSate, action) => {
    console.log(action.type);
    switch(action.type) {
        case INCREMENT:
            return {compteur: state.compteur + 1};
        case DECREMENT:
            return {compteur: state.compteur - 1};
        default:
            return state;
    }
}

export default reducer;