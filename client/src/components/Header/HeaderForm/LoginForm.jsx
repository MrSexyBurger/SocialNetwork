import React from "react";
import {email, maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import css from './LoginForm.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";

const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
    const btnClass = props.isHover ? `${css.loginBtn} ${css.hover}`  : css.loginBtn;

    return (
        <form className={css.loginForm} onSubmit={props.handleSubmit}>
            <Field placeholder={'Email'} name={'email'} component={Input} validate={[ required, email ]} />
            <Field placeholder={'Password'} name={'password'} component={Input} validate={[ required, maxLength15 ]}/>
            <button className={btnClass}
                    onMouseEnter={props.toggleHover}
                    onMouseLeave={props.toggleHover}
            >Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;