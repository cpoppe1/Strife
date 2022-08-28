
import * as SessionAPIUtil from "../utils/session_api_util.js"


export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";
export const RECEIVE_USER_SEARCH = "RECEIVE_USER_SEARCH";



export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    }
}



export const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}


export const removeCurrentUser = (userId) => {
    return {
        type: REMOVE_CURRENT_USER,
        userId
    }
}

export const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}


export const removeSessionErrors = () => {
    return {
        type: REMOVE_SESSION_ERRORS
    }
}

export const receiveUserSearch = (users) => {
    return{
        type: RECEIVE_USER_SEARCH,
        users
    }
}


//ajax dispatch

export const signUpUser = user => (dispatch) =>
    SessionAPIUtil.signUp(user).then(user => (dispatch(receiveCurrentUser(user))), err => (dispatch(receiveSessionErrors(err.responseJSON))));

export const signInUser = user => (dispatch) =>
    SessionAPIUtil.signIn(user).then((user) => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveSessionErrors(err.responseJSON)));

export const logoutUser = () => (dispatch) => {
    return SessionAPIUtil.signOut().then(() => dispatch(logoutCurrentUser()));
}


// for updating and removing a user 
export const updateUserInfo = user => (dispatch) =>
    SessionAPIUtil.updateUser(user).then((user) => (dispatch(receiveCurrentUser(user))), (err) => dispatch(receiveSessionErrors(err.responseJSON)));

//delete / ban a user from Strife or a channel/server

export const removeUserAccount = userId => (dispatch) =>
    SessionAPIUtil.removeUser(userId).then(() => { dispatch(logoutCurrentUser()), dispatch(removeCurrentUser(userId)) }, (err) => dispatch(receiveSessionErrors(err.responseJSON)));

//search up a user 
export const searchUsers = username => (dispatch) =>
SessionAPIUtil.searchUsers(username).then((users) => (dispatch(receiveUserSearch(users))), (err) => dispatch(receiveSessionErrors(err.responseJSON)));

export const removePhoneNumber = user => (dispatch) =>
    SessionAPIUtil.removePhoneNumber(user).then((user) => (dispatch(receiveCurrentUser(user))), (err) => dispatch(receiveSessionErrors(err.responseJSON)));


export const changePassword = user => (dispatch) =>
    SessionAPIUtil.changePassword(user).then((user) => (dispatch(receiveCurrentUser(user))), (err) => (dispatch(receiveSessionErrors(err.responseJSON))));



export const changeUserPFP = (userId, formData) => (dispatch) =>
    SessionAPIUtil.changeUserPFP(userId, formData).then((user) => (dispatch(receiveCurrentUser(user))), (err) => (dispatch(receiveSessionErrors(err.responseJSON))));




export const disableUserAccount = user => (dispatch) =>
    SessionAPIUtil.disableAccount(user).then((user) => (
        dispatch(receiveCurrentUser(user))
    ),
        (err) => (dispatch(receiveSessionErrors(err.responseJSON))));


export const fetchUserByStrifeId = user_strife_id_tag => (dispatch) =>
        SessionAPIUtil.fetchUserByStrifeId(user_strife_id_tag).then((user) => (
            dispatch(receiveUser(user))
        ),
        err => dispatch(receiveSessionErrors(err.responseJSON)));