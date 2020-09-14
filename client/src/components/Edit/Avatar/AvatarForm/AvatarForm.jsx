import React from "react";
import css from "./AvatarForm.module.css";
import {Field, reduxForm} from "redux-form";
import SubmitBtnContainer from "../../../common/FormsControls/SubmitBtn/SubmitBtnContainer";
import { post } from "axios";
import {connect} from "react-redux";
import {updateNewAvatarUrl, updateSaving} from "../../../../redux/edit_reducer";
import AvatarInputLabelContainer from "./AvatarInputLabel/AvatarInputLabelContainer";
import EditSaving from "../../EditSaving/EditSaving";

class AvatarForm extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "React",
        };
    }

    renderInput = ({ input, type, meta, accept }) => {
        //const { mime } = this.props;
        //console.log(this.props)
        return (
            <div>
                <input
                    id={'avatarInput'}
                    hidden={true}
                    name={input.name}
                    type={type}
                    //accept={mime}
                    accept={accept}
                    onChange={event => this.handleChange(event, input)}
                />
                <AvatarInputLabelContainer/>
            </div>
        );
    };

    handleChange = (event, input) => {
        event.preventDefault();
        let imageFile = event.target.files[0];
        if (imageFile) {
            const localImageUrl = URL.createObjectURL(imageFile);
            const imageObject = new window.Image();

            imageObject.onload = () => {
                imageFile.width = imageObject.naturalWidth;
                imageFile.height = imageObject.naturalHeight;
                input.onChange(imageFile);
                URL.revokeObjectURL(imageFile);
            };
            imageObject.src = localImageUrl;

            this.props.updateNewAvatarUrl(localImageUrl);
        }

    };

    onFormSubmit = data => {

        const updateSaving = this.props.updateSaving;

        let formData = new FormData();
        formData.append("name", data.image.name);
        formData.append("image", data.image);
        const config = {
            withCredentials: true,
            baseURL: 'http://localhost:9000/',
            headers: { "content-type": "multipart/form-data" }
        };
        const url = "/profile/avatar";

        updateSaving(true);
        post(url, formData, config)
            .then(function(response) {
                console.log("FILE UPLOADED SUCCESSFULLY");
                updateSaving(false)
            })
            .catch(function(error) {
                console.log("ERROR WHILE UPLOADING FILE");
            });
    };

    render(){
        const { handleSubmit } = this.props;

        return (
            <div className={css.AvatarFormWrap}>

                <form onSubmit={handleSubmit(this.onFormSubmit)} >
                    <div className={css.usernameWrap}>
                        <Field name={'image'}
                               type={'file'}
                               accept={'.jpg, .png, .jpeg'}
                               component={this.renderInput}
                        />
                    </div>

                    <div className={css.submitBtnWrap}>
                        <SubmitBtnContainer/>
                    </div>

                </form>

                {this.props.saving && <EditSaving/>}

            </div>
        )
    }

}

AvatarForm = reduxForm({form: 'avatar'})(AvatarForm);

const mapStateToProps = state => {
    return {
        saving: state.edit.saving
    }
}

export default  connect(mapStateToProps, {updateNewAvatarUrl, updateSaving})(AvatarForm);