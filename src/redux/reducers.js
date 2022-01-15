import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "./actions";

const initialState = {
    items: [],
};

function userReducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case ADD_ITEM:


            newState.items = [...newState.items, action.payload];
            console.log(newState);
            return newState;

        case REMOVE_ITEM:


            newState.items = [...newState.items.filter(
                (item, index) => index !== action.payload
            ),];
            console.log(newState);
            return newState;

        case CHECKOUT:
            return initialState;

        default:
            return state;
    }
}

export default userReducer;
