import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FriendShipIndex1 from './friends_list1';
import { requestFriendships, removeFriendshipErrors } from '../../../actions/friendship_actions';
import { selectFriendStatus } from '../../../utils/selectors_api_util';

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        friends: selectFriendStatus(state, 3),
        dmServers: Object.values(state.entities.dmServers),
        errors: state.errors.friendship
    }
};


const mDTP = (dispatch) => {
    return {
        requestFriendships: () => dispatch(requestFriendships()),
        removeFriendshipErrors:()=> dispatch(removeFriendshipErrors())
    }
};

const FriendShipIndexContainer1 = withRouter(connect(mSTP, mDTP)(FriendShipIndex1));
export default FriendShipIndexContainer1;
