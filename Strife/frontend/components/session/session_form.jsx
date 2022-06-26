//this file will combine both the sign/in/up forms to be rendered based on 
//certain conditions


import React from "react";
import { Link } from "react-router-dom";


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.formType === 'Sign In' ? { email: "", password: "", emailError: "", passwordError: "" } : { email: "", username: "", birthday: "", password: "" };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.errors = this.errors.bind(this);
        this.userNameErrors = this.userNameErrors.bind(this);
        this.emailErrors = this.emailErrors.bind(this);
        this.passwordErrors = this.passwordErrors.bind(this);
        this.birthdayErrors = this.birthdayErrors.bind(this);
        this.loginAsDemoUser1 = this.loginAsDemoUser1.bind(this);
        this.loginAsDemoUser2 = this.loginAsDemoUser2.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.removeErrors();
        let submissionState = {};
        if (this.props.formType === 'Sign Up') {
            submissionState = {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                birthday: this.state.birthday
                // birthday: new Date(this.state.birthday)

            }
        }
        else {
            submissionState = {
                email: this.state.email,
                password: this.state.password
            }
        }

        this.props.processForm(submissionState);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    errors() {

        return (
            <ul>
                {this.props.errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        )
    }

    componentWillUnmount() {
        this.props.removeSessionErrors();
    }

    loginAsDemoUser1() {
        let demoUser = {
            email: 'DemoUser1@strife.com',
            password: 'qwerty1234'
        }
        this.props.processForm(demoUser);
    }

    loginAsDemoUser2() {
        let demoUser = {
            email: 'DemoUser2@strife.com',
            password: 'QWERTY1234'
        }
        this.props.processForm(demoUser);
    }


    userNameErrors() {

        let USERNAME_ERRORS = ['Username is too short (minimum is 2 characters)', 'Username is too long (maximum is 32 characters)', 'Username Must be between 2 and 32 in length', "Username can't be blank"]
        if (this.props.formType === "Sign Up") {
            if (this.props.errors.includes("Username can't be blank")) {
                return " - This field is required";
            }
            else if (this.props.errors.includes('Username is too short (minimum is 2 characters)')) {

                return ' - Must be between 2 and 32 in length';
            }
            else if (this.props.errors.includes('Username is too long (maximum is 32 characters)')) {
                return ' - Must be between 2 and 32 in length';
            }

        }
        return "";
    }

    emailErrors() {
        const EMAIL_ERRORS = ['Email Not well formed email address', "Must be 320 or fewer in Length", "Email can't be blank", "Email has already been taken", "Login or password is invalid"];

        if (this.props.formType === "Sign In") {
            if (this.props.errors.includes('Login or password is invalid')) {
                return " - Login or password is invalid";
            }
        }

        if (this.props.formType === "Sign Up") {
            if (this.props.errors.includes("Email can't be blank")) {
                return " - can't be blank";
            }
            else if (this.props.errors.includes("Email Not well formed email address")) {

                return " - Not well formed email address";
            }
            else if (this.props.errors.includes("Email Must be 320 or fewer in Length")) {
                return " - Must be 320 or fewer in Length";
            }
            else if (this.props.errors.includes("Email has already been taken")) {
                return " - Email is already registered ";
            }

        }

        return "";
    }

    passwordErrors() {
        const PASSWORD_ERRORS = ['Password is too long (maximum is 72 characters)', "Password is too short (minimum is 8 characters)", "Password can't be blank", 'Login or password is invalid'];
        if (this.props.formType === "Sign In") {
            if (this.props.errors.includes('Login or password is invalid')) {
                return " - Login or password is invalid";
            }
        }
        if (this.props.formType === "Sign Up") {
            if (this.props.errors.includes("Password can't be blank")) {
                return " - can't be blank";
            }
            else if (this.props.errors.includes("Password is too long (maximum is 72 characters)")) {

                return " - Must be 72 or fewer in length";
            }
            else if (this.props.errors.includes("Password is too short (minimum is 8 characters)")) {
                return " - Must be at least 8 characters long";
            }

        }
        return "";
    }

    birthdayErrors() {
        const BIRTHDAY_ERRORS = ["Birthday can't be blank"]
        // if(this.props.formType === "Sign In"){
        //     if()
        // }
        if (this.props.formType === "Sign Up") {

            if (this.props.errors.includes("Birthday can't be blank")) {
                return " - can't be blank"
            }

        }
        return "";
    }


    render() {

        //assign variables to change classname tags depending if an error has occcured or not

        let emailErrorTag = "";
        let passwordErrorTag = "";
        let birthdayErrorTag = "";
        let usernameErrorTag = "";
        if (this.props.formType === "Sign In" && this.props.errors.length > 0) {
            emailErrorTag = this.props.errors.includes('Login or password is invalid') ? "login-error" : ""
            passwordErrorTag = this.props.errors.includes('Login or password is invalid') ? "login-error" : ""
        }
        else if (this.props.formType === "Sign Up") {
            emailErrorTag = this.props.errors.includes("Email Not well formed email address") ||
                this.props.errors.includes("Email Must be 320 or fewer in Length") ||
                this.props.errors.includes("Email can't be blank") ||
                this.props.errors.includes("Email has already been taken") ? "login-error" : "";

            passwordErrorTag = this.props.errors.includes("Password is too short (minimum is 8 characters)") ||
                this.props.errors.includes("Password can't be blank") ||
                this.props.errors.includes("Password is too long (maximum is 72 characters)") ? "login-error" : "";


            // birthdayErrorTag = this.birthdayErrors()=== "" ? "" : "login-error";

            usernameErrorTag = this.props.errors.includes('Username is too short (minimum is 2 characters)') ||
                this.props.errors.includes('Username is too long (maximum is 32 characters)') ||
                this.props.errors.includes("Username can't be blank") ? "login-error" : ""
        }

        //assign variables that will display content bassed if the form is sigin vs sign out
        const email = (
            <div className="field">
                <label id="email-label" className={emailErrorTag}>EMAIL{this.emailErrors()}</label><br />
                <input id="email" className={emailErrorTag} type="email" value={this.state.email} onChange={this.handleInput('email')} />
            </div>
        );
        const password = (
            <div className="field">
                <label id="password-label" className={passwordErrorTag}>PASSWORD{this.passwordErrors()}</label><br />
                <input id="password" className={passwordErrorTag} type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </div>
        );

        let birthday;
        let userName = this.props.formType === "Sign In" ? ("") : (
            <div className="field">
                <label id="username-label" className={usernameErrorTag}>USERNAME{this.userNameErrors()}</label><br />
                <input id="username" type="text" value={this.state.username} onChange={this.handleInput('username')} />
            </div>
        );

        //messages depending on signup or sign in
        const submitButtonMessage = this.props.formType === "Sign In" ? "Login" : "Continue"
        const headerMessage = this.props.formType === "Sign In" ? (<h2 className="welcome-message">Welcome Back!</h2>) :
            (<h2 className="signup-header">Create an account</h2>);
        const subHeaderMessage = this.props.formType === "Sign In" ? ("We're so excited to see you again!") : ("");









        //drop box functions discord does not use the normal html date input tag 
        const days = new Array();
        for (let i = 1; i <= 31; i++) {
            days.push(<option key={i} value={i}>{i}</option>);
        }

        const years = new Array();
        const months= []






        return (
            <div className="session-signup-form">
                <div className="login-box">

                    {headerMessage}

                    <h3>{subHeaderMessage}</h3>

                    <form onSubmit={this.handleSubmit}>

                        {/* <input type="text"value={this.state.username} onChange={this.handleInput('username')}/> */}
                        {email}
                        {/* <div className="email-field">
                            <label id="email-field" className={emailErrorTag}>
                                EMAIL{this.emailErrors()}
                            </label>
                            <input type="email" className={emailErrorTag} id="email" value={this.state.email} onChange={this.handleInput('email')} />
                        </div> */}
                        {userName}

                        {password}
                        {/* {birthday} */}
                        <input type="date" value={this.state.birthday} onChange={this.handleInput('birthday')} />
                        {/* {password} */}





                        <div className="field"><button type="submit">{submitButtonMessage}</button></div>

                    </form>
                </div>
            </div>
        )
    }

}


export default SessionForm;