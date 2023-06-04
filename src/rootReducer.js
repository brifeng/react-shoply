import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import data from './data.json';

const INITIAL_STATE = { cart: {}, products: { ...data.products } };

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            console.log('added')
            const newCart = state.cart;
            newCart[action.id] = (newCart[action.id] || 0) + 1;
            console.log(newCart);
            return {
                ...state,
                cart: newCart
            };
        }
        case REMOVE_FROM_CART: {
            console.log('removed')
            const newCart = state.cart;
            if (newCart[action.id] > 0)
                newCart[action.id]--;
            if (newCart[action.id] === 0)
                delete newCart[action.id];
            console.log(newCart);
            return {
                ...state,
                cart: newCart
            }
        }
        default:
            return state;
    }
}

export default rootReducer;