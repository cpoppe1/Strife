import { connect } from "react-redux";
import { withRouter } from "react-router";
import { closeModal, openModalWithProps } from "../../actions/modal_actions";
import ModalManager from "./modal_manager.jsx";

const mSTP = (state,ownProps) => {
    return {
        modal: state.ui.modal,
        modalProps: state.ui.modalProps,

    }
}
const mDTP = (dispatch) => {
    return {
        // openModalWithProps: (modal,modal_props) => dispatch(openModalWithProps(modal,modal_props)),
        openModalWithProps: (modal_props) => dispatch(openModalWithProps(modal_props)),

        closeModal: ()=> dispatch(closeModal())
    }
}

// const ModalManagerContainer = connect(mSTP,mDTP)(withRouter(ModalManager));
const ModalManagerContainer = withRouter(connect(mSTP,mDTP)(ModalManager));
// const ModalManagerContainer = connect(mSTP,mDTP)(ModalManager);
export default ModalManagerContainer;