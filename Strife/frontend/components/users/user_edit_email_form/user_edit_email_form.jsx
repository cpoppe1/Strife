import React from "react"
import { Link, Redirect } from 'react-router-dom'


class EditUserEmailForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
            email: this.props.currentUser.email,
            password: ""
        }
        this.cancel = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.userNameErrors = this.userNameErrors.bind(this);
        this.passwordErrors = this.passwordErrors.bind(this);

    }

    
    passwordErrors () {
        if (this.props.errors.includes('Login or password is invalid')) {
            return " - Password does not match.";
        }
        else if (this.props.errors.includes("Error Incorrect Password !")){
            return " - Password does not match.";
        }
        return "";
    }



    emailErrors() {
       
        let emailErrorList = [
            "Email can't be blank",
            "Email Not well formed email address",
            "Email Must be 320 or fewer in Length",
            "Email has already been taken"
        ];

        let emailErrorMsgs = {
            0: " - can't be blank",
            1: " - Not well formed email address",
            2: " - Must be 320 or fewer in Length",
            3: " - Email is already registered "

        }


        return "";
    }


    componentWillUnmount () {
        this.props.removeSessionErrors()
    }

    handleInput (field) {
        return (e) => { this.setState({ [field]: e.currentTarget.value }) }
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.cancel === true){
            return;
        }
        let submissionState = {
            email: this.state.email
        }
        this.props.updateUserInfo(submissionState);
      }



      render (){

        let emailErrorTag = this.props.errors.length > 0 ? "field-error" : "";
        let passwordErrorTag = this.props.errors.length > 0 ? "field-error" : "";

        return (
            <div id="edit-userInfo-model" className="edit-userInfo-model" >
            <div className="edit-username-header-section">
                <div className="edit-username-header">
                    Change your username
                </div>
                <div className="edit-username-header-info">
                    Enter a new username and your existing password
                </div>
            </div>
            <form  onSubmit={this.handleSubmit}>
                <div className="form-container1">

                    <div className="form-username-sec">
                        <h5 className="form-username-header"><label className={usernameErrorTag}>Username{this.userNameErrors()}</label></h5>
                        <div className="username-form-input-sec">
                            <div className="username-input-wrapper1">
                                <input placeholder={this.props.currentUser.username} value={this.state.username} onChange={this.handleInput("username")} className="input-1" type="text" />
                            </div>
                            <div className="username-input-wrapper2">
                                <span className="quarter-hash-tag">#</span>
                                <input className="input-2" type="text" placeholder={this.props.currentUser.strife_id_tag} disabled />
                            </div>

                            <span className="form-question-mark">
                                <svg aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24">
                                    <g fill="currentColor" fillRule="evenodd" transform="translate(7 4)">
                                        <path d="M0 4.3258427C0 5.06741573.616438356 5.68539326 1.35616438 5.68539326 2.09589041
                                     5.68539326 2.71232877 5.06741573 2.71232877 4.3258427 2.71232877 2.84269663 4.31506849
                                      2.78089888 4.5 2.78089888 4.68493151 2.78089888 6.28767123 2.84269663 6.28767123
                                       4.3258427L6.28767123 4.63483146C6.28767123 5.25280899 5.97945205 5.74719101 5.42465753
                                        6.05617978L4.19178082 6.73595506C3.51369863 7.10674157 3.14383562 7.78651685 3.14383562
                                         8.52808989L3.14383562 9.64044944C3.14383562 10.3820225 3.76027397 11 4.5 11 5.23972603
                                          11 5.85616438 10.3820225 5.85616438 9.64044944L5.85616438 8.96067416 6.71917808 8.52808989C8.1369863
                                           7.78651685 9 6.30337079 9 4.69662921L9 4.3258427C9 1.48314607 6.71917808 0 4.5 0 2.21917808 0 0 
                                           1.48314607 0 4.3258427zM4.5 12C2.5 12 2.5 15 4.5 15 6.5 15 6.5 12 4.5 12L4.5 12z">
                                        </path>
                                    </g>
                                </svg>
                                <div className="user-settings-toggle4">Want to customize your tag? Get Nitro!</div>

                            </span>

                        </div>
                    </div>
                    <div className="password-section">
                        <h5 className="password-header1">
                            <label className={passwordErrorTag}>Current Password{this.passwordErrors()}</label>
                        </h5>
                        <div className="input-3-password-wrapper">
                            <input value={this.state.password} onChange={this.handleInput("password")} type="password" className="input-3-password" />
                        </div>
                    </div>
                    <div className="username-edit-sep"></div>
                </div>
                <div className="username-edit-button-sec">
                    <button type="submit" className="username-edit-submit-button">Done</button>
                    <button type="submit" onClick={() => this.cancel=true} className="username-edit-cancel-button">Cancel</button>
                </div>



            </form>
        </div>
        )
      }



}

export default EditUserEmailForm;