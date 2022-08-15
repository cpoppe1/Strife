import React from "react"
import { Link, Redirect } from 'react-router-dom'


class EditUserPasswordForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            user: this.props.currentUser,
            password: "",
            confirmNewPassword: "",
            newPassword: "",
            newPassword: ""
        }
        this.cancel =  false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.passwordErrors = this.passwordErrors.bind(this);


    }



    passwordErrors () {
        if (this.props.errors.includes('Login or password is invalid')) {
            return " - Password does not match.";
        }
        else if (this.props.errors.includes('Error Incorrect Password !')) {
            return " - Password does not match.";
        }
        return "";
    }




    componentWillUnmount () {
        this.props.removeSessionErrors()
    }

    handleInput (field) {
        return (e) => { this.setState({ [field]: e.currentTarget.value }) }
    }
    handleSubmit (e) {
        e.preventDefault();
        if (this.cancel === true) {
            this.props.removeSessionErrors();
            return;
        }
        let submissionState = {
            id: this.props.currentUser.id,
            password: this.state.newPassword
        }
        // this.props.updateUserInfo(submissionState);
        this.props.changePassword(submissionState);
    }

    render () {
        return (
            <div id="edit-userInfo-model" className="edit-userInfo-model" >
                <div className="edit-username-header-section">
                    <div className="edit-username-header">
                        Update your password
                    </div>
                    <div className="form-email-header-info">
                        Enter a your current password and a new password.
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-container1">

                        <div className="form-username-sec">
                            <h5 className="form-username-header"><label className={passwordErrorTag}>Current Password{this.passwordErrors()}</label></h5>
                            <div>
                                <div className="input-3-password-wrapper">
                                    <input value={this.state.password} onChange={this.handleInput("password")} className="input-3-password" type="password" />
                                </div>

                            </div>
                        </div>
                        <div className="password-section">
                            <h5 className="password-header1">
                                <label className={passwordErrorTag}>New Password{this.passwordErrors()}</label>
                            </h5>
                            <div className="input-3-password-wrapper">
                                <input value={this.state.password} onChange={this.handleInput("password")} type="password" className="input-3-password" />
                            </div>
                        </div>
                        <div className="username-edit-sep"></div>
                    </div>
                    <div className="username-edit-button-sec">
                        <button type="submit" className="username-edit-submit-button">Done</button>
                        <button type="submit" onClick={() => this.cancel = true} className="username-edit-cancel-button">Cancel</button>
                    </div>



                </form>
            </div>
        )
    }

}

export default EditUserPasswordForm;