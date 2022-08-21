import React from "react"
import { Link, Redirect } from 'react-router-dom'


class EditUserPFP extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            photo: '',
            photo_url: this.props.currentUser.photo,
            submit: false,

        }

        // if (this.state.photo_url === null) {
        //     photo_url
        // }

        this.file_input = null;
        this.cancel = false;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFileInput = this.handleFileInput.bind(this);
        this.fileProcessingErrors = this.fileProcessingErrors.bind(this);
    }


    componentDidUpdate (prevProps) {
        if (this.state.submit && prevProps.currentUser !== this.props.currentUser) { return };
    }




    fileProcessingErrors () {
        if (this.props.errors.includes('cannot process file')) {
            return " - file is bad format/failed to process";
        }
        return "";
    }


    handleFileInput (e) {
        const fileReader = new FileReader();
        const file = e.currentTarget.files[0];
        fileReader.onloadend = () => {
            this.setState({
                photo_url: fileReader.result,
                photo: file
            });
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
        else {
            this.setState({ photo_url: "", photo: null })
        }



    }

    componentDidMount () {
        this.file_input = document.querySelector("input[type=file]");
    }

    componentWillUnmount () {
        this.props.removeSessionErrors()
    }

    handleInput (input) {
        return (e) => { this.setState({ [input]: e.currentTarget.value }) }
    }

    handleSubmit (e) {
        e.preventDefault();
        if (this.cancel === true) {
            this.props.removeSessionErrors();
            return;
        }


        let formData = new FormData();

     

        let submissionState = {};
        formData.append('user[username]',this.props.currentUser.username);
        if (this.state.photo) {
            formData.append('user[photo]', this.state.photo);
             submissionState = {
                id: this.props.currentUser.id,
                photo: this.state.photo
            }
        }
       
        this.props.changeUserPFP(this.props.currentUser.id,formData);

        this.setState({
            submit: true,
        })
    }

    render () {

        
        let fileErrorTag = this.props.errors.length > 0 ? "field-error" : "";


        return (

            <div id="edit-userInfo-model" className="edit-userInfo-model" >
                <div className="edit-username-header-section">
                    <div className="edit-username-header">
                        Change your Avatar
                    </div>
                    <div className="edit-username-header-info">
                        Upload a .jpg, .jpeg, .gif, or .png file
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-container1">

                        <div className="form-username-sec">
                            <h5 className="form-username-header"> <label className={fileErrorTag}>Avatar{this.fileProcessingErrors()}</label></h5>
                            <div className="username-form-input-sec">
                                <div className="username-input-wrapper1">

                                    <div className="user-pfp-wrapper" onClick={() => this.file_input.click()}>
                                        <p className="user-pfp-header">Upload new avatar</p>
                                        <img className="img-upload-hint-icon" />
                                        <img className="user-pfp" id="display-user-pfp" src={this.state.photo_url} alt={this.state.photo_url} />
                                    </div>

                                    <input type='file' accept=".jpg, .jpeg, .svg, .png, .gif" onChange={this.handleFileInput} />
                                </div>
                            </div>
                        </div>

                        <div className="username-edit-sep"></div>
                    </div>
                    <div className="username-edit-button-sec">
                        <button type="submit" className="username-edit-submit-button">Save</button>
                        <button type="submit" onClick={() => this.cancel = true} className="username-edit-cancel-button">Cancel</button>
                    </div>



                </form>
            </div>




        )


    }



}

export default EditUserPFP;
