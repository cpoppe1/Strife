import React from "react"
import { Link, Redirect } from 'react-router-dom'
import EditUserNameContainer from "../user_edit_username_form/user_edit_username_container.js"
import EditUserEmailContainer from "../user_edit_email_form/user_edit_email_container.js"
import EditUserPFPContainer from "../user_edit_profile_pic_form/user_edit_pfp_container.js"
import EditUserPasswordContainer from "../user_edit_password_form/user_edit_password_container.js"
import EditUserPhoneNumberContainer from "../user_edit_phone_number_form/user_edit_phone_number_container.js"
import RemoveUserPhoneNumberContainer from "../user_remove_phone_number_form/user_remove_phone_number_container.js"
import DisableUserAccountContainer from "../user_disable_account_form/user_disable_account_container.js"
import DeleteUserAccountContainer from "../user_delete_account_form/user_delete_account_container.js"
import default_PFP from "/app/assets/images/defaultProfilePic.png";

class UserProfile extends React.Component {

  constructor (props) {

    super(props)

    this.state = {

      user: this.props.currentUser,
      userEdit: false,
      deleteForm: false,
      userNameEdit: false,
      changeEmail: false,
      changePhone: false,
      changePassword: false,
      changePFP: false,
      removePhoneNumber: false,
      disableUser: false,
      deleteUser: false,
      demoUser: false,
      userEmail: this.props.currentUser.email,
      userPhone: this.props.currentUser.phone_number,
      reveal: "Reveal",
      reveal1: "Reveal",
      password: ""

    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.scrambleEmail = this.scrambleEmail.bind(this);
    this.scramblePhoneNumber = this.scramblePhoneNumber.bind(this);
    this.handleRevealClick = this.handleRevealClick.bind(this);
    this.handleRevealClick2 = this.handleRevealClick2.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.renderEditUserNameModal = this.renderEditUserNameModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleESC = this.handleESC.bind(this);
    this.handleSubModalClose = this.handleSubModalClose.bind(this);
    this.closeAllSubMods = this.closeAllSubMods.bind(this);
    this.renderChangeEmail = this.renderChangeEmail.bind(this);
    this.renderChangePhone = this.renderChangePhone.bind(this);
    this.renderChangePassword = this.renderChangePassword.bind(this);
    this.renderChangeUserPFP = this.renderChangeUserPFP.bind(this);
    this.renderRemovePhoneNumber = this.renderRemovePhoneNumber.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.checkIfDemoUser = this.checkIfDemoUser.bind(this);
    this.renderDeleteUser = this.renderDeleteUser.bind(this);
    this.renderDisableUser = this.renderDisableUser.bind(this);



  }



  renderDeleteUser () {
    if (this.state.deleteUser === true) {
      window.removeEventListener('keyup', this.props.handleESC, false);
      window.addEventListener('keyup', this.handleESC, false);
      return (
        <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("deleteUser")} >
          <div className="edit-user-flex-box">
            <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>

              <div onSubmit={() => this.handleSubmit("deleteUser")}>
                <DeleteUserAccountContainer />

              </div>

            </div>
          </div>
        </div>
      )


    }
  }

  renderDisableUser () {
    if (this.state.disableUser === true) {
      window.removeEventListener('keyup', this.props.handleESC, false);
      window.addEventListener('keyup', this.handleESC, false);
      return (
        <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("disableUser")} >
          <div className="edit-user-flex-box">
            <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>

              <div onSubmit={() => { this.handleSubmit("disableUser") }}>
                <DisableUserAccountContainer />
              </div>

            </div>
          </div>
        </div>
      )


    }
  }




  handleLogout () {
    this.props.closeModal();
    this.props.logoutUser();
  }

  checkIfDemoUser () {

    //this will lock bot, demo user 1, and 2 ,from beign edited /deleted

    if (this.props.currentUser.id === 1 || this.props.currentUser.id === 2 || this.props.currentUser.id === 3) {
      //set demouserstate active
      this.setState({ demoUser: true });
      document.getElementById("edit-username-button").disabled = true;
      document.getElementById("edit-user-profile-pic-button").disabled = true;
      document.getElementById("change-password-button").disabled = true;
      document.getElementById("edit-email-button").disabled = true;
      document.getElementById("edit-phone-button").disabled = true;
      // document.getElementById("remove-phone-button").disabled = true;
      // document.getElementById("enable-two-auth-button"); // no disable as this feature is diabled already for all users
      document.getElementById("disable-account-button").disabled = true;
      document.getElementById("delete-account-button").disabled = true;

    }
    else {
      this.setState({ demoUser: false });
      document.getElementById("edit-username-button").disabled = false;
      document.getElementById("edit-user-profile-pic-button").disabled = false;
      document.getElementById("change-password-button").disabled = false;
      document.getElementById("edit-email-button").disabled = false;
      document.getElementById("edit-phone-button").disabled = false;
      // document.getElementById("remove-phone-button").disabled = false;
      document.getElementById("disable-account-button").disabled = false;
      document.getElementById("delete-account-button").disabled = false;
      return;
    }


  }




  renderRemovePhoneNumber () {
    if (this.state.removePhoneNumber === true) {
      window.removeEventListener('keyup', this.props.handleESC, false);
      window.addEventListener('keyup', this.handleESC, false);

      return (
        <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("removePhoneNumber")} >
          <div className="edit-user-flex-box">
            <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>

              <div onSubmit={() => this.handleSubmit("removePhoneNumber")}>
                <RemoveUserPhoneNumberContainer />
              </div>

            </div>
          </div>
        </div>
      )


    }
  }


  renderChangePhone () {
    if (this.state.changePhone === true) {
      window.removeEventListener('keyup', this.props.handleESC, false);
      window.addEventListener('keyup', this.handleESC, false);

      return (
        <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("changePhone")} >
          <div className="edit-user-flex-box">
            <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>
              <div className="edit-user-info-exit-button" >

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  onClick={() => this.handleSubModalClose("changePhone")}
                ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
                </svg>

              </div>
              <div onSubmit={() => this.handleSubmit("changePhone")}>
                <EditUserPhoneNumberContainer />
              </div>

            </div>
          </div>
        </div>
      )




    }
  }

  renderChangePassword () {
    if (this.state.changePassword === true) {
      window.removeEventListener('keyup', this.props.handleESC, false);
      window.addEventListener('keyup', this.handleESC, false);
      return (
        <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("changePassword")} >
          <div className="edit-user-flex-box">
            <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>
              <div className="edit-user-info-exit-button" >

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  onClick={() => this.handleSubModalClose("changePassword")}
                ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
                </svg>

              </div>
              <div onSubmit={() => this.handleSubmit("changePassword")}>
                <EditUserPasswordContainer />
              </div>

            </div>
          </div>
        </div>
      )
    }
  }

  renderChangeUserPFP () {
    if (this.state.changePFP === true) {
      window.removeEventListener('keyup', this.props.handleESC, false);
      window.addEventListener('keyup', this.handleESC, false);


      return (
        <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("changePFP")} >
          <div className="edit-user-flex-box">
            <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>
              <div className="edit-user-info-exit-button" >

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  onClick={() => this.handleSubModalClose("changePFP")}
                ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
                </svg>

              </div>
              <div onSubmit={() => this.handleSubmit("changePFP")}>
                <EditUserPFPContainer />

              </div>

            </div>
          </div>
        </div>
      )

    }
  }



  renderChangeEmail () {
    if (this.state.changeEmail === true) {
      window.removeEventListener('keyup', this.props.handleESC, false);
      window.addEventListener('keyup', this.handleESC, false);
      return (
        <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("changeEmail")} >
          <div className="edit-user-flex-box">
            <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>
              <div className="edit-user-info-exit-button" >

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  onClick={() => this.handleSubModalClose("changeEmail")}
                ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
                </svg>

              </div>
              <div onSubmit={() => this.handleSubmit("changeEmail")}>
                <EditUserEmailContainer />
              </div>

            </div>
          </div>
        </div>
      )
    }
  }



  closeAllSubMods () {
    let array = [
      'userNameEdit',
      'changeEmail',
      'changePhone',
      'changePassword',
      'changePFP',
      'removePhoneNumber',
      "disableUser",
      "deleteUser",

    ];
    for (let i = 0; i < array.length; i++) {
      this.handleSubModalClose(array[i])
      // this.closeModal(i)
      this.closeModal(array[i])
      window.removeEventListener('keyup', this.handleESC, false);
      window.addEventListener('keyup', this.props.handleESC, false);

    }
    window.removeEventListener('keyup', this.handleESC, false);
    window.addEventListener('keyup', this.props.handleESC, false);


  }


  handleESC (e) {
    const keys = {
      27: () => {
        e.preventDefault();
        this.closeAllSubMods();
        window.removeEventListener('keyup', this.handleESC, false);

      },
    };
    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }



  handleSubModalClose (subModalName) {

    let submodalToClose = document.getElementById("edit-userInfo-model")
    submodalToClose.classList.add("transition-out");
    // submodalToClose.className = "edit-userInfo-model transition-out"

    console.log("animation triggered");
    // setTimeout(() => {
    // this.props.removeSessionErrors();
    this.closeModal(subModalName);
    // }, 10);
    // return submodalToClose

  }



  openModal (field) {
    this.setState({ [field]: true })

  }

  closeModal (field) {

    if (this.mounted) {
      setTimeout(() => {
        this.props.removeSessionErrors();
        this.setState({ [field]: false })
        window.removeEventListener('keyup', this.handleESC, false);
        window.addEventListener('keyup', this.props.handleESC, false);

      }, 100)
      window.removeEventListener('keyup', this.handleESC, false);

      window.addEventListener('keyup', this.props.handleESC, false);

    }
  }



  renderEditUserNameModal () {
    if (this.state.userNameEdit) {
      window.removeEventListener('keyup', this.props.handleESC, false);
      window.addEventListener('keyup', this.handleESC, false);

      return (


        <div className="edit-userInfo-modal-wrapper" onClick={() => this.closeModal("userNameEdit")} >
          <div className="edit-user-flex-box">
            <div id="edit-userInfo-model" className="edit-userInfo-model" onClick={e => e.stopPropagation()}>
              <div className="edit-user-info-exit-button" >

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  onClick={() => this.handleSubModalClose("userNameEdit")}
                ><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path>
                </svg>

              </div>
              <div onSubmit={() => this.handleSubmit("userNameEdit")}>
                <EditUserNameContainer />
              </div>

            </div>
          </div>
        </div>


      )
    }
  }


  handleCloseModal () {
    let modalToClose = document.getElementById("user-profile");
    modalToClose.classList.add("transition-out");
    setTimeout(() => {
      this.props.removeSessionErrors();
      this.props.closeModal();
    }, 100);
  }


  componentDidMount () {
    this.scrambleEmail();
    this.scramblePhoneNumber();
    this.checkIfDemoUser();
    this.mounted = true;


    window.addEventListener('keyup', this.props.handleESC, false);


  }
  componentWillUnmount () {
    this.mounted = false;
    window.removeEventListener('keyup', this.props.handleESC, false);
    this.props.removeSessionErrors();

  }



  handleRevealClick (e) {

    if (this.state.reveal === "Reveal") {
      this.setState({ reveal: "Hide" });
    }
    else if (this.state.reveal === "Hide") {
      this.setState({ reveal: "Reveal" });
    }

  }

  handleRevealClick2 (e) {

    if (this.state.reveal1 === "Reveal") {
      this.setState({ reveal1: "Hide" });
    }
    else if (this.state.reveal1 === "Hide") {
      this.setState({ reveal1: "Reveal" });
    }

  }

  handleSubmit (modalName) {
    setTimeout(() => {
      if (this.props.errors.length === 0) {
        this.closeModal(modalName);
        // this.handleSubModalClose(modalName);
      }
      // else {
      // this.props.removeSessionErrors();
      // //   // this.handleSubModalClose(modalName);
      //   return;
      // }

    }, 1000);

    // if (this.props.errors.length > 0) {
    //   setTimeout(() => {
    //     this.props.removeSessionErrors();

    //   }, 2000)
    // }


    //reduce the timepout of closing the window allows for the erros to be processed .
  }

  scrambleEmail () {
    // let e_mail = this.state.userEmail;
    let e_mail = this.props.currentUser.email;
    let email_Scramble = "";
    for (let i = 0; i < e_mail.length; i++) {
      if (e_mail[i] === "@") {
        email_Scramble = email_Scramble + e_mail.slice(i);
        return email_Scramble;
      }
      else {
        email_Scramble += "*";
      }
    }

  }

  scramblePhoneNumber () {
    if (this.props.currentUser.phone_number === null) {
      return "";
    }
    else {
      // let phoneNum = this.state.userPhone.toString();
      let phoneNum = this.props.currentUser.phone_number;
      let part1 = phoneNum.slice(0, -4);
      part1 = part1.replace(/\W/g, "*");
      part1 = part1.replace(/\d/g, "*") + phoneNum.slice(-4);
      return part1;
    }
  }



  render () {

    let default_profile_pic = this.props.currentUser.photo === undefined ? <img className="user-avatar-img" /> : <img src={this.props.currentUser.photo} alt="pfp" />
    // let default_profile_pic = this.props.currentUser.photo === undefined ? "https://strife-seeds.s3.amazonaws.com/defaultProfilePic.png" : this.props.currentUser.photo;
    let scrambledEmail = this.state.reveal1 === "Reveal" ? this.scrambleEmail() : this.props.currentUser.email;
    let scramblePhone = this.state.reveal === "Reveal" ? this.scramblePhoneNumber() : this.props.currentUser.phone_number;
    const { reveal } = this.state.reveal;
    let removePhoneNum = this.state.demoUser === true ? ("") : this.props.currentUser.phone_number !== null ? (
      <button id="remove-phone-button" type="button" onClick={() => this.openModal("removePhoneNumber")} className="remove-phone-num">Remove</button>
    ) : ("");
    let revealPhone = this.props.currentUser.phone_number !== null ? (
      <button id="reveal" type="button" className="reveal-button" onClick={() => this.handleRevealClick()}>{this.state.reveal}</button>
    ) : ("")
    let accountEditingLockedMessage = this.state.demoUser === true ? (<div className="demo-edit-lock-warning">
      <p>Editing Disabled For Demo Accounts</p>
      {/* <p>Create Your own account to edit account information and credentials</p> */}
    </div>) : ("");

    return (
      <div className="user-profile-wrapper" onClick={e => e.stopPropagation()}>
        {this.renderChangeUserPFP()}
        {this.renderDeleteUser()}
        {this.renderDisableUser()}
        {this.renderChangePassword()}
        {this.renderRemovePhoneNumber()}
        {this.renderChangeEmail()}
        {this.renderChangePhone()}
        {this.renderEditUserNameModal()}
        <div className="user-profile" id="user-profile">

          <div className="sidebar">
            <div className="sidebar-scrollbar">
              <div className="sidebar-inner">

                <div className="user-profile-left-side">


                  <ul className="user-profile-item-list">

                    <li><h3 className="user-profile-header3">User Settings</h3></li>


                    {/* <Link to={`/users/${this.props.currentUser.id}`}> */}

                    <li className="user-profile-item">My Account</li>

                    {/* </Link> */}

                    <li className="user-profile-item">Friend Requests</li>
                    <li className="user-profile-item">Profiles</li>
                    <li className="user-profile-item">Privacy & Safety</li>
                    <li className="user-profile-item">Authorized Apps</li>
                    <li className="user-profile-item">Devices</li>
                    <li className="user-profile-item">Connections</li>
                    <div className="user-settings-separator"></div>
                    <li><h3 className="user-profile-header3">Billing Settings</h3></li>
                    <li className="user-profile-item" ><div className="strife-nitro-lbl">
                      Nitro
                      <div className="strife-nitro-img">
                        <svg className='strife-nitro-clock1'
                          aria-hidden="true" role="img" width="12" height="12" viewBox="0 0 20 20">
                          <g fill="none" fillRule="evenodd">
                            <path fill="currentColor" d="M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708
                                                     1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334
                                                      18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999
                                                       1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667
                                                        5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145
                                                         14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937
                                                          10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572
                                                           9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675
                                                            9.99999 4.66675Z">
                            </path></g>
                        </svg>
                        1 month free</div>
                    </div></li>
                    <li className="user-profile-item">Server Boost</li>
                    <li className="user-profile-item">Subscriptions</li>
                    <li className="user-profile-item">Gift Inventory</li>
                    <li className="user-profile-item">Billing</li>
                    <div className="user-settings-separator"></div>
                    <li><h3 className="user-profile-header3">App Settings</h3></li>
                    <li className="user-profile-item">Appearance</li>
                    <li className="user-profile-item">Accessibility</li>
                    <li className="user-profile-item">Voice & Video</li>
                    <li className="user-profile-item">Text & Images</li>
                    <li className="user-profile-item">Notifications</li>
                    <li className="user-profile-item">Keybinds</li>
                    <li className="user-profile-item">Language</li>
                    <li className="user-profile-item">Streamer Mode</li>
                    <li className="user-profile-item">Advanced</li>
                    <div className="user-settings-separator"></div>
                    <li><h3 className="user-profile-header3">Activity Settings</h3></li>
                    <li className="user-profile-item">Activity Privacy</li>
                    <li className="user-profile-item">Registered Games</li>
                    <div className="user-settings-separator"></div>
                    <li className="user-profile-item">What's New</li>
                    <li className="user-profile-item">HypeSquad</li>
                    <div className="user-settings-separator"></div>
                    <li className="user-profile-item" onClick={() => this.handleLogout()}>
                      <span>Log Out</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </li>
                    <div className="user-settings-separator"></div>
                    <div className="user-profile-socials">

                      <a className="upm-twitter" title="Twitter" href="https://twitter.com/discord/" target="_blank">
                        {/* <i className="fa-brands fa-twitter fa-lg"></i> */}
                        <svg className="upm-twitter-icon" width="20" height="16" viewBox="0 0 20 16" aria-hidden="true" role="img">
                          <g fill="none" fillRule="evenodd">
                            <path fill="currentColor" d="M1,14.1538462 L1.95,14.1538462 C3.73125,14.1538462 5.5125,13.5384615
                                      6.81875,12.4307692 C5.15625,12.4307692 3.73125,11.2 3.1375,9.6 C3.375,9.6 3.6125,9.72307692 3.85,9.72307692 
                                      C4.20625,9.72307692 4.5625,9.72307692 4.91875,9.6 C3.1375,9.23076923 1.7125,7.63076923 1.7125,5.66153846 C2.1875,5.90769231 
                                      2.78125,6.15384615 3.49375,6.15384615 C2.425,5.41538462 1.83125,4.18461538 1.83125,2.70769231 C1.83125,1.96923077 2.06875,1.23076923
                                      2.30625,0.615384615 C4.20625,3.07692308 7.05625,4.67692308 10.38125,4.8 C10.2625,4.67692308 10.2625,4.30769231 10.2625,4.06153846
                                      C10.2625,1.84615385 12.04375,0 14.18125,0 C15.25,0 16.31875,0.492307692 17.03125,1.23076923 C17.8625,1.10769231 18.8125,0.738461538 
                                      19.525,0.246153846 C19.2875,1.23076923 18.575,1.96923077 17.8625,2.46153846 C18.575,2.46153846 19.2875,2.21538462 20,1.84615385 
                                      C19.525,2.70769231 18.8125,3.32307692 18.1,3.93846154 L18.1,4.43076923 C18.1,9.84615385 14.18125,16 6.9375,16 
                                      C4.68125,16 2.6625,15.3846154 1,14.1538462 Z">
                            </path>
                            <rect width="20" height="16"></rect>
                          </g>
                        </svg>

                      </a>

                      <a className="upm-facebook" href="https://www.facebook.com/discord/" title="Facebook" target="_blank">
                        {/* <i className="fa-brands fa-facebook-square fa-lg"></i> */}
                        <svg className="upm-facebook-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" role="img">
                          <g fill="none" fillRule="evenodd">
                            <path fill="currentColor" d="M0,1.99406028 C0,0.892771196 0.894513756,0 1.99406028,0 L14.0059397,0 C15.1072288,0 16,0.894513756 16,1.99406028 
                                  L16,14.0059397 C16,15.1072288 15.1054862,16 14.0059397,16 L1.99406028,16 C0.892771196,16 0,15.1054862 0,14.0059397 L0,1.99406028 Z M8.23182341,16 L10.3991764,16 
                                  L10.3991764,9.93141161 L12.5663127,9.93141161 L13,7.76405862 L10.3991764,7.76405862 L10.3246195,6.3468265 C10.3246195,5.66107601 10.5049432,5.17342158 11.4698488,5.17342158 
                                  L12.974642,5.17385505 L12.974642,3.12202197 C12.7618079,3.09319618 12.3142495,3 11.4644304,3 C9.69001851,3 8.18500859,4.20353112 
                                  8.18500859,6.23043964 L8.23182341,7.76405862 L6.06425368,7.76405862 L6.06425368,9.93141161 L8.23182341,9.93141161 L8.23182341,16 Z">
                            </path>
                            <rect width="16" height="16"></rect>
                          </g>
                        </svg>
                        
                      </a>


                      <a className="upm-instagram" href="https://www.instagram.com/discord/" title="Instagram" target="_blank">
                        {/* <i className="fa-brands fa-instagram fa-lg"></i> */}
                      </a>


                    </div>
                    <div className="version-number">
                      <span>Stable 140575 (12c29a3)</span>
                      <br />
                      <span>Windows 11 64-bit</span>

                    </div>

                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div className="user-profile-right-side-wrapper">
            <div className="user-profile-rs-inner-wrapper">

              <div className="user-profile-right-side">


                <div className="user-profile-header1-div">
                  <h3 className="user-profile-header1">My Account</h3>
                </div>

                <div className="my-account-container-wrapper">

                  <div className="my-account-container">

                    <div className="account-card-banner">{accountEditingLockedMessage}</div>


                    <div className="account-card-user-info">

                      <div className="account-avatar-wrapper">

                        {/* <img className="user-avatar-img" /> */}
                        {/* <img src={default_profile_pic} alt="pfp" /> */}
                        {default_profile_pic}

                      </div>

                      <div>
                        <div className="account-card-username-div">

                          <div className="account-card-username-strife-id-tag">
                            <span className="account-settings-username">{this.props.currentUser.username}</span>
                            <span className="account-settings-strife-id-tag">#{this.props.currentUser.strife_id_tag}</span>

                          </div>
                          <div className="overflow-menu">
                            <svg className="overflowMenuIcon" width="24" height="24" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M7 12.001C7 10.8964 6.10457 10.001 
                                5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 
                                7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 
                                10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 
                                12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 
                                10.001 19 10.001Z">
                              </path>
                            </svg>
                          </div>

                        </div>
                        <div className="user-badge-container"></div>

                      </div>

                      <button type="button" onClick={() => this.openModal("changePFP")} id="edit-user-profile-pic-button" className="edit-user-profile-button">Edit User Profile</button>


                    </div>

                    <div className="account-card-background">
                      <div className="account-card-background-inner-wrapper">
                        <div className="account-card-background-inner-field-1">
                          <div className="constrainedRow">
                            <div className="constrain-username">
                              <h5 className="constrain-username-header">Username</h5>
                              <div className="constrain-username-inner">
                                <span className="const-user-name">{this.props.currentUser.username}</span>
                                <span className="const-id-tag">#{this.props.currentUser.strife_id_tag}</span>
                              </div>
                            </div>
                          </div>
                          <button type="button" className="edit-profile-props-button" id="edit-username-button" onClick={() => this.openModal("userNameEdit")}>Edit</button>
                        </div>


                        <div className="field2">

                          <div className="constrainedRow">
                            <div>
                              <h5 className="constrain-username-header">Email</h5>
                              <div>
                                <span className="const-hidden-props">{scrambledEmail}
                                  <button type="button" className="reveal-button" onClick={() => this.handleRevealClick2()}>{this.state.reveal1}</button>
                                </span>
                              </div>
                            </div>

                          </div>

                          <button type="button" id="edit-email-button" className="edit-profile-props-button" onClick={() => this.openModal("changeEmail")} >Edit</button>

                        </div>



                        <div className="field3">
                          <div className="constrainedRow">
                            <div>
                              <h5 className="constrain-username-header">Phone Number</h5>
                              <div>
                                <span className="const-hidden-props">{scramblePhone}
                                  {revealPhone}
                                </span>

                              </div>
                            </div>
                          </div>
                          <div className="phone-num-button-container">
                            {removePhoneNum}
                            <button type="button" id="edit-phone-button" className="edit-profile-props-button" onClick={() => this.openModal("changePhone")} >Edit</button>
                          </div>

                        </div>

                      </div>


                    </div>




                  </div>

                </div>

                <div className="divider-margin"></div>
                <div className="userSecuritySettings">

                  <div className="passwrd-section">
                    <h1 className="passwrdAuth">Password and Authentication</h1>
                  </div>
                  <div className="password-edit-section">
                    <div>
                      <button type="button" id="change-password-button" className="changePasswordButton" onClick={() => this.openModal("changePassword")}>
                        Change Password
                      </button>
                    </div>

                    <div className="two-factor-auth-wrapper">
                      <div className="two-factor-auth-inner">
                        <div>
                          <div className="auth-header-div">
                            <h5 className="auth-header">Two-factor authentication</h5>
                          </div>
                          <div className="auth-info-div">
                            <p className="auth-info">
                              Protect your Strife account with an extra layer of security. Once configured, you'll be required
                              to enter both your password and an authentication code from your mobile phone in order to sign in.
                            </p>
                          </div>
                          <div>
                            <button id="enable-two-auth-button" type="button" className="auth-button" disabled>Enable Two-Factor Auth</button>
                          </div>


                        </div>

                      </div>

                      <div className="auth-pic-div">
                        <img className="auth-security-img" />
                      </div>


                    </div>


                  </div>


                </div>

                <div className="divider-margin"></div>
                <div className="acc-removal-section">
                  <div className="account-rem-header-div">

                    <h5 className="account-rem-header">Account Removal</h5>
                  </div>
                  <div className="account-rem-info-div">

                    <p className="account-rem-info">
                      Disabling your account means you can recover it at any time after taking this action.
                    </p>
                  </div>
                  <div className="account-del-button-cont">
                    <button onClick={() => this.openModal("disableUser")} type="button" id="disable-account-button" className="disable-account-button">Disable Account</button>
                    <button onClick={() => this.openModal("deleteUser")} type="button" id="delete-account-button" className="account-delete-button">Delete Account</button>


                  </div>
                </div>



              </div>

              <div className="tools-container">

                <div className="tool-x-to-esc-button-wrapper">
                  <div className="inner-tool-container">
                    <div className="x-to-esc-button" onClick={() => this.handleCloseModal()}>
                      <svg role="img" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 
                                12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z">
                        </path>
                      </svg>
                    </div>
                    <div className="esc-bind">ESC</div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>

    )
  }
}




export default UserProfile;