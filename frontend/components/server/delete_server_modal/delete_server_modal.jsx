import React from "react";
import { useRef, useEffect, useState } from "react";

const DeleteServerModal = (props) => {
    const popupRef = useRef();
    const [confirmServerName, setConfirmServerName] = useState("");


    useEffect(() => {
        window.addEventListener('keyup', handleESC, false);
        return function cleanUp () {
            props.removeServerErrors();
            props.removeChannelErrors();
            window.removeEventListener('keyup', handleESC, false);
        }

    }, []);


    const handleESC = (e) => {

        const keys = {
            27: () => {
                e.preventDefault();
                props.setServerDeletion(false);
                window.removeEventListener('keyup', handleESC, false);

            },
        };
        if (keys[e.keyCode]) {
            keys[e.keyCode]();
        }
    }


    const handleDeleteServerEXE = () => {

        let subState = {
            id: props.server.id,
            server_owner_id: props.server_owner_id,
            server_name: confirmServerName
        }

        props.verifyName(subState).then(() => {
            props.closeModal();
            props.history.push('/channels/@me');
            props.deleteServer(props.server.id).then(() => {
                props.fetchUserServers(props.currentUser.id);
            });
        })
        props.removeServerErrors()

    }
    const renderServerNameErrors = () => {

        let serverNameErrorList = [
            "You didn't enter the server name correctly",
            'You cannot destroy a server that is not yours !',

        ];


        let serverNameErrorMessages = {
            0: "You didn't enter the server name correctly",
            1: "You cannot destroy a server that is not yours !",
        }

        for (let i = 0; i < serverNameErrorList.length; i++) {
            if (props.errors.includes(serverNameErrorList[i])) {
                return serverNameErrorMessages[i];
            }
        }

        return "";

    }

    let serverNameErrorsTag = props.errors.length > 0 ? "server-error" : "";

    return (
        <div className="delete-server-modal-wrapper" onClick={() => props.setServerDeletion(false)}>
            <div className="delete-server-flex-box">
                <div className="delete-server-modal-inner-wrapper" >
                    <div id="delete-server-modal" className="delete-server-modal" onClick={(e) => e.stopPropagation()} ref={popupRef}>
                        <form onSubmit={handleDeleteServerEXE}>
                            <div className="delete-server-form-header-wrapper">
                                <h2 className="delete-server-form-header">
                                    Delete{` `}{`'${props.server.server_name}'`}
                                </h2>
                            </div>
                            <div className="delete-server-scroll-base">
                                <div className="delete-server-warning-card">
                                    <div className="delete-server-warning-text">
                                        Are You sure that you want to delete{` `}
                                        <strong>{`${props.server.server_name}`}</strong>?
                                        This action cannot be undone.
                                    </div>
                                </div>
                                <div className="delete-server-sep"></div>

                                <div className="server-name-section">
                                    <h5 className="server-name-header1">
                                        Enter Server Name
                                    </h5>
                                    <div className="input-server-name-wrapper">
                                        <input
                                            value={confirmServerName}
                                            onChange={(e) => setConfirmServerName(e.currentTarget.value)}
                                            type="text"
                                            className="input-server-name"
                                            spellCheck={false}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <label className={serverNameErrorsTag}>{renderServerNameErrors()}</label>
                                </div>
                                <div className="delete-server-sep"></div>
                            </div>
                            <div className="delete-server-button-sec">
                                <button type="submit" className="delete-server-submit-button">Delete Server</button>
                                <button type="button" onClick={() => props.setServerDeletion(false)} className="delete-server-cancel-button">Cancel</button>
                            </div>

                        </form>
                    </div>
                </div>




            </div>
        </div>

    )


}

export default DeleteServerModal;