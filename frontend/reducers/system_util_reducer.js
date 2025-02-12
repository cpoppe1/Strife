import { FETCH_STRIFE_BOT } from "../actions/session_actions";
// import bot_PFP from "../../app/assets/images/discord_Strife_logo.png";
import bot_PFP from "/app/assets/images/Strife_logo_compressed.png";
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

//stop fetching the bot just hard code it as it will always be avaliable and no need to slow down every thing
const _STRIFE_BOT = {
    1: {
        "id": 1,
        "username": "Mr.Wumpus",
        // "email": "wumbo@strife.com",
        "online": true,
        // "phone_number": null,
        "strife_id_tag": "1",
        "color_tag": 10,
        "photo": bot_PFP,
        // "friend_request_status": 3,
        // "ownedServers": [],
        // "serversJoined": [],
        // "dmServersJoined": [],
    }
}

const systemUtilReducer = (state = { _STRIFE_BOT }, action) => {
    Object.freeze(state);
    // return state;
    // switch (action.type) {
    //     case FETCH_STRIFE_BOT:
    //         let bot = Object.assign({}, state, { ['StrifeBot']: { [action.bot.id]: action.bot } });
    //         return bot;
    //     default:
    //         return state;
    // }

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return state;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }

}


export default systemUtilReducer;