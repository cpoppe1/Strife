
import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import EntitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";

const rootReducer = combineReducers({
    // entities: EntitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
})

export default rootReducer;
