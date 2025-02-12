import React from "react";
import CreateServerFormContainer from "../server/create_server_forms/create_server_form_container.js";
import UserProfileContainer from "../users/user_profile/user_profile_container.js";
import UserSearchContainer from "../users/user_search_modal/user_search_container.js";
import CreateDmModalContainer from "../dm_servers/create_new_dm/create_dm_container.js";
import FriendRequestErrorModalContainer from "../friends/friend_request_error_modal/friend_request_error_modal_container.js";
import DownloadAppsContainer from "../server/download_apps/download_apps_container.js";
import EditFriendshipModalContainer from "../friends/edit_friendship_modal/edit_friendship_container.js";
import ChannelDropDownContainer from "../channels/channel_drop_down/channel_drop_down_container.js";
import ServerSettingsModalContainer from "../server/server_settings/server_settings_modal_container.js";
import LeaveServerModalContainer from "../server/leave_server_modal/leave_server_modal_container.js";
import DeleteServerModalContainer from "../server/delete_server_modal/delete_server_modal_container.js";
import InviteToServerModalContainer from "../server/invite_to_server_modal/invite_to_server_modal_container.js";
import ChannelSettingsModalContainer from "../channels/channel_settings/channel_settings_modal_container.js";
import CreateChannelModalContainer from "../channels/create_channel_modal/create_channel_modal_container.js";
import ActionButtonPopUpContainer from "../server/server_search/action_button_pop_up_container.js";
import DeleteDmMessageModalContainer from "../dm_servers/delete_dm_message_modal/delete_dm_message_modal_container.js";
import DeleteServerChannelMessageModalContainer from "../server/delete_server_message_modal/delete_server_message_modal_container.js";
import InviteToDMCallModalContainer from "../dm_servers/select_dm_members_call/select_dm_members_container.js";
import StartConversationSearchBarModalContainer from "../friends/user_asset_search_modal/user_asset_search_modal_container.js";
import WEBRTCDMCallModalContainer from "../dm_servers/dm_call/dm_call_container.js";
import STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS_CONTAINER from "../calls/video_and_voice_call_container.js";

class ModalManager extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            setSpecialFeatures: 0,
        }
        this.setModalSpecialFeatures = this.setModalSpecialFeatures.bind(this);

    }
    //this function is to set special modal background/ positioning for different modals that need it 
    setModalSpecialFeatures (modifier) {
        this.setState({ setSpecialFeatures: modifier });
    }

 

    render () {


        let renderedModal;
        let modalMod = 0;
        // using a switch statement to reduce slow down of processing multiple if statemnets with similar
        // or little complex condtions also to dry up the code
        switch (this.props.modal) {
            case 'createServerForm':

                renderedModal = (<div className="modal-child-component" onClick={e => e.stopPropagation()}>
                    <CreateServerFormContainer />
                </div>)

                break;
            case 'userProfile':
                renderedModal = <UserProfileContainer />
                break;

            case 'frf-error':
                renderedModal = <FriendRequestErrorModalContainer />
                break;

            case 'downloadApps':
                renderedModal = <DownloadAppsContainer />
                break;

            case 'userSearch':

                renderedModal = <UserSearchContainer />

                break;

            case 'StartConversationSearch':
                renderedModal = <StartConversationSearchBarModalContainer />
                modalMod = 0;
                break;

            case 'friendOptions':

                renderedModal = <EditFriendshipModalContainer />

                break;


            case 'createDmModal':

                renderedModal = <CreateDmModalContainer />
                modalMod = 1;

                break;


            case 'ServerSettings':

                //props and state doNOT get passed in modal manager however location still gets passed
                // and can be accessed so we can manipulate this to get the props and state we need back to 
                // use server settings
                const serverId = this.props.history.location.pathname.split('/');
                // renderedModal = <ServerSettingsModalContainer serverId={serverId[2]} currentChannelId={serverId[3]} />
                renderedModal = <ServerSettingsModalContainer />

                modalMod = 0;

                break;

            case 'ChannelDropDown':

                renderedModal = <ChannelDropDownContainer />
                modalMod = 1;

                break;

            case 'CreateChannel':



                renderedModal = <CreateChannelModalContainer />
                modalMod = 0;

                break;


            case 'DeleteServer':

                renderedModal = <DeleteServerModalContainer />
                modalMod = 0;

                break;
            case 'LeaveServer':

                renderedModal = <LeaveServerModalContainer />
                modalMod = 0;

                break;

            case 'ChannelSettings':

                renderedModal = <ChannelSettingsModalContainer mod_Channel_ID={this.props.modalProps} />
                modalMod = 0;

                break;

            case 'ActionButton':

                renderedModal = <ActionButtonPopUpContainer serverLink={this.props.modalProps.serverInvite} />
                modalMod = 1;

                break;

            case 'DeleteDmMessage':

                renderedModal = <DeleteDmMessageModalContainer />
                modalMod = 0;

                break;

            case 'DeleteServerChannelMessage':
                renderedModal = <DeleteServerChannelMessageModalContainer />
                modalMod = 0;
                break;

            case 'InviteToServer':

                renderedModal = (
                    <div className="modal-child-component" onClick={e => e.stopPropagation()}>
                        <InviteToServerModalContainer />
                    </div>
                )
                modalMod = 0;

                break;
            case 'InviteDMMembersToCall':
                renderedModal = <InviteToDMCallModalContainer />
                modalMod = 0;
                break;

            case 'WEBRTC_DM_CALL':
                renderedModal = <WEBRTCDMCallModalContainer />
                modalMod = 0;
                break;
            case "STRIFE_WEBRTC_CALL":
                renderedModal = <STRIFE_VIDEO_AND_VOICE_CALL_VIA_WEB_RTC_ON_RAILS_CONTAINER />
                modalMod = 0;
                break;
            default:
                return null;
        }



        if (!this.props.modal) {
            return null;
        }



        return (
            <div className={`modal-struct-${modalMod}`} onClick={this.props.closeModal}>
                {/* <div className="modal-child-component" onClick={e => e.stopPropagation()}>
                    {renderedModal}
                </div> */}
                {renderedModal}
            </div>


        );




    }


}

export default ModalManager;

