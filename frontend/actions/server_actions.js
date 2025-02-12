import * as ServerAPI from "../utils/server_api_util.js"
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const REMOVE_SERVER_ERRORS = "REMOVE_SERVER_ERRORS";
export const JOIN_SERVER = "JOIN_SERVER";
export const EXPLORE_SERVERS = "EXPLORE_SERVERS";
export const REMOVE_UNEXPLORED_SERVERS = "REMOVE_UNEXPLORED_SERVERS";
export const JOINING_SERVER = "JOINING_SERVER";

export const receiveServer = (server) => {
    return {
        type: RECEIVE_SERVER,
        server
    }
}

export const receiveServers = (servers) => {
    return {
        type: RECEIVE_SERVERS,
        servers
    }
}

export const removeServer = (serverId) => {
    return {
        type: REMOVE_SERVER,
        serverId
    }
}

export const receiveServerErrors = (errors) => {
    return {
        type: RECEIVE_SERVER_ERRORS,
        errors
    }
}


export const removeServerErrors = () => {
    return {
        type: REMOVE_SERVER_ERRORS,

    }
}

export const joinServerViaInvite = (inviteCode) => {
    return {
        type: JOIN_SERVER,
        inviteCode
    }
}


export const serverSearch = (servers) => {
    return {
        type: EXPLORE_SERVERS,
        servers
    }
}

export const joinServerExplore = () => {
    return {
        type: JOINING_SERVER,

    }
}

export const clearUnexploredServers = () => {
    return {
        type: REMOVE_UNEXPLORED_SERVERS,
        servers: {}
    }
}



export const fetchServers = (user) => (dispatch) =>
    ServerAPI.fetchServers(user).then((servers) => { dispatch(receiveServers(servers)) }, (err) => { dispatch(receiveServerErrors(err.responseJSON)) })

export const fetchServer = (serverId) => (dispatch) =>
    ServerAPI.fetchServer(serverId).then((server) => { return dispatch(receiveServer(server)) })

export const createServer = (server) => (dispatch) =>
    ServerAPI.createServer(server).then((server) => {
        dispatch(removeServerErrors())
        return dispatch(receiveServer(server))
    }
        , (err) => { dispatch(receiveServerErrors(err.responseJSON)) })

export const updateServer = (serverId, formData) => (dispatch) =>
    ServerAPI.updateServer(serverId, formData).then((server) => {
        dispatch(removeServerErrors())
        return dispatch(receiveServer(server))
    }
        , (err) => { dispatch(receiveServerErrors(err.responseJSON)) })

export const deleteServer = (serverId) => (dispatch) =>
    ServerAPI.deleteServer(serverId).then(() => { dispatch(removeServer(serverId)) })


export const joinServer = (inviteCode) => (dispatch) =>
    ServerAPI.joinServer(inviteCode).then((server) => {
        dispatch(joinServerViaInvite(inviteCode));
        return dispatch(receiveServer(server))
    },
        (err) => { dispatch(receiveServerErrors(err.responseJSON)) });


export const verifyName = (server) => (dispatch) =>
    ServerAPI.verifyName(server).then((server) => {
        dispatch(receiveServer(server))
    }, (err) => { dispatch(receiveServerErrors(err.responseJSON)) });


// export const exploreServers = () => dispatch =>
//     ServerAPI.exploreServers().then((servers) => dispatch(serverSearch(servers)));
export const exploreServers = (user) => dispatch =>
    ServerAPI.exploreServers(user).then((servers) => dispatch(serverSearch(servers)));


export const joiningServer = (inviteCode) => (dispatch) =>
    ServerAPI.joinServer(inviteCode).then((server) => {
        dispatch(joinServerExplore());
        return dispatch(receiveServer(server))
    },
        (err) => { dispatch(receiveServerErrors(err.responseJSON)) });

