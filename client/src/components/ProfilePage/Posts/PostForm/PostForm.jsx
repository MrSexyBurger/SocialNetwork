import React from "react";
import css from './PostForm.module.css'
import {Field, reduxForm} from "redux-form";
import {postInput} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";

class ReduxPostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        }
    }

    render() {
        return (
            <div>
                <form className={css.postFormWrap} onSubmit={this.props.handleSubmit} >
                    <Field name={'post'} validate={required} placeholder={'Что у вас нового?'} component={postInput} />
                    <button className={css.submitBtn + ' ' + (this.props.isHover ? css.hover : '')}
                            onMouseEnter={this.props.toggleHover}
                            onMouseLeave={this.props.toggleHover}
                    >Опубликовать</button>
                </form>
            </div>
        )
    }
}

ReduxPostForm = reduxForm({form: 'post'})(ReduxPostForm);

export default ReduxPostForm;