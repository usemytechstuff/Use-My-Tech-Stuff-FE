import {
    LOGIN_START,
    LOGIN_SUCCESS,
    SIGN_UP_START,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    ADD_ITEM_START,
    ADD_ITEM_SUCCESS
} from '../actions'


const initialState = {
    loggingIn: false,
    error: null,
    token: localStorage.getItem('token'),
    signingUp: false,
    addingItem: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                token: action.payload
            };
        case SIGN_UP_START:
            return {
                ...state,
                signingUp: true,
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signingUp: false
            };
        case SIGN_UP_ERROR:
            return {
                ...state,
                signingUp: false
            };
        case ADD_ITEM_START:
            return {
                ...state,
                addingItem: true
            };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                addingItem: false,
            }
        default:
            return state;
        
    }

}

export default reducer;