import React, {Component} from "react";
import css from "./StatusForm.module.css";
import {Field, reduxForm} from "redux-form";
import {statusInput} from "../../../../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator} from "../../../../../utils/validators/validators";

const maxLength60 = maxLengthCreator(60);

class ReduxStatusForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status
        }
    }

    componentWillMount () {
        this.props.initialize({ status: this.props.status });
    }

    componentWillReceiveProps (props) {

        if (this.state.status !== props.status) {
            this.props.destroy();
            this.props.initialize({ status: props.status });
            this.setState({status: props.status});
        }
    }

    render() {
        return (
            <div>
                <form className={css.statusFormWrap} onSubmit={this.props.handleSubmit} >
                    <Field autoFocus={true}  name={'status'} validate={maxLength60}  component={statusInput} />
                    <button className={css.submitBtn + ' ' + (this.props.isHover ? css.hover : '')}
                            onMouseEnter={this.props.toggleHover}
                            onMouseLeave={this.props.toggleHover}
                    >Сохранить</button>
                </form>
            </div>
        )
    }
}

ReduxStatusForm = reduxForm({form: 'status'})(ReduxStatusForm);

export default ReduxStatusForm;