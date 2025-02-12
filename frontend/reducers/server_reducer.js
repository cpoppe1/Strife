import { RECEIVE_SERVER, RECEIVE_SERVERS, REMOVE_SERVER } from "../actions/server_actions.js"
import { RECEIVE_SERVER_MEMBERSHIP, REMOVE_SERVER_MEMBERSHIP } from "../actions/server_membership_actions.js"
import { LOGOUT_CURRENT_USER } from "../actions/session_actions"



const serverReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_SERVER:
            nextState[action.server.id] = action.server;
            return nextState;
        case RECEIVE_SERVERS:
            return action.servers;
        case REMOVE_SERVER:
            delete nextState[action.serverId]
            return nextState

        case RECEIVE_SERVER_MEMBERSHIP:
        nextState[action.servermembership.id]= action.servermembership;
        return nextState;
        case REMOVE_SERVER_MEMBERSHIP:
            nextState[action.membershiphash.id]= action.membershiphash;
            return nextState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}
export default serverReducer;