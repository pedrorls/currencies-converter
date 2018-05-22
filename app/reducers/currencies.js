import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY } from '../actions/currencies';

const initalState = {
    baseCurrency: 'BRL',
    quoteCurrency: 'USD',
    amount: 100,
    conversions: {},
};

const reducer = (state = initalState, action) => {
    switch(action.type){
        case CHANGE_CURRENCY_AMOUNT:
            return {
                ...state, 
                amount: action.amount || 0,
            }
        case SWAP_CURRENCY:
            return {
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency,
            }
        default:
            return state;
    }
};

export default reducer