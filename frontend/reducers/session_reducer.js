import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

// create a default state 
const _nullSession = Object.freeze( {
    // currentUser: null
    id: null,

});

const sessionReducer = (state = _nullSession ,action) => {
    Object.freeze(state);
    
    switch(action.type){
        case RECEIVE_CURRENT_USER:

        return Object.assign({},{id: action.currentUser.id});

        case  LOGOUT_CURRENT_USER:
            return _nullSession;
            default:
                return state;

    }

}


export default sessionReducer;