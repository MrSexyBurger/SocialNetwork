import React from "react";
import css from './PostForm.module.css'
import {Field, reduxForm} from "redux-form";
import {postInput} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";
import PostFormBtnContainer from "./PostFormBtn/PostFormBtnContainer";

let ReduxPostForm = props => {
    return (
        <div className={css.postFormWrap}>
            <form className={css.postForm} onSubmit={props.handleSubmit} >
                <Field name={'post'} validate={required} placeholder={'Что у вас нового?'} component={postInput} />
                <PostFormBtnContainer/>
            </form>
        </div>
    )
}

ReduxPostForm = reduxForm({form: 'post'})(ReduxPostForm);

export default ReduxPostForm;