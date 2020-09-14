import React from "react";
import css from './FormsControls.module.css';
import ErrorContainer from "./ErrorContainer";
import DayOptions from "../../RegistrationPage/RegistrationForm/Options/DayOprtions";
import MonthOptions from "../../RegistrationPage/RegistrationForm/Options/MonthOptions";
import YearOptions from "../../RegistrationPage/RegistrationForm/Options/YearOptions";


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css';
import {connect} from "react-redux";
import {updateNewAvatarUrl} from "../../../redux/edit_reducer";


export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={css.loginWrap + ' ' + ( hasError ? css.error : '') }>
            <input {...input} {...props} />
            {hasError && <ErrorContainer size='small' position='bottom' error={meta.error} />}
        </div>
    )
}

export const ShortRegInput = ({input, meta, position , ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={css.shortRegWrap + ' ' + ( hasError ? css.error : '') }>
            <input {...input} {...props} />
            {hasError && <ErrorContainer size='big' position={position} error={meta.error} />}
        </div>
    )
}

export const LongRegInput = ({input, meta, position , ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={css.longRegWrap + ' ' + ( hasError ? css.error : '') }>
            <input {...input} {...props} />
            {hasError && <ErrorContainer size='big' position={position} error={meta.error} />}
        </div>
    )
}



export const birthSelect = ({input, meta, yearValue, monthValue, ...props}) => {
    const hasError = meta.touched && meta.error;
    let optionBody = '';
    let optionTitle = '';

    if (input.name == 'day'){
        optionTitle = <option value=''>День</option>;
        optionBody =  <DayOptions year={yearValue} month={monthValue} />;
    } else if (input.name == 'month') {
        optionTitle = <option value=''>Месяц</option>;
        optionBody =  <MonthOptions/>;
    } else if (input.name == 'year') {
        optionTitle = <option value=''>Год</option>;
        optionBody =  <YearOptions/>;
    }

    return (
        <div className={css.selectWrap + ' ' + (hasError ? css.error : '')}>
            <select {...input}>
                {optionTitle}
                {optionBody}
            </select>
        </div>
    )
}


export const genderInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <label className={css.genderInputWrap + ' ' + (hasError ? css.error : '')} >
            <input {...input} {...props} />
            {input.value == 'male' ? ' Мужской' : ' Женский' }
        </label>
    )
}

export const statusInput = ({input, meta, ...props}) => {
    return (
        <div className={css.statusInputWrap}>
            <input {...input} {...props} />
        </div>
    )
}

export const postInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={css.postInputWrap + ' ' + (hasError ? css.error : '')}>
            <input {...input} {...props} />
        </div>
    )
}

export const messageInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={css.messageInputWrap + ' ' + ' ' + (hasError ? css.error : '')}>
            <input {...input} {...props} />
        </div>
    )
}

export const editInput = ({input, meta, position, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={css.editInputWrap + ' ' + ( hasError ? css.error : '') }>
            <input {...input} {...props} />

            {hasError && <ErrorContainer size='small' position={position} error={meta.error} />}
        </div>
    )
}

export class renderDatePicker extends React.Component {

    state = {
        startDate: new Date(`12.7.1991`)
    };

    /*componentDidMount() {
        this.props.changeDate('7.12.1991');
    }*/


    handleChange = date => {
        this.setState({
            startDate: date
        });

        let fullDate = new Date(date);
        let month = fullDate.getMonth() + 1;
        let day = fullDate.getDate();
        let year = fullDate.getFullYear();

        month = month < 10 ? `0${month}` : month;

        let birth = `${day}.${month}.${year}`;

        this.props.changeDate(birth);
    };

    render() {
        return (
            <div className={css.DatePickerWrap} >
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    dateFormat={'dd.MM.yyyy'}
                />
            </div>
        );
    }
}



/*
export const avatarInput = ({input, meta, position, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={css.editInputWrap}>
            <input {...input} {...props} />
        </div>
    )
}
*/

class AvatarFileInput extends React.Component{
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        const { input: { onChange } } = this.props
        let file = e.target.files[0];
        onChange(file)

        let path = (window.URL || window.webkitURL).createObjectURL(file);

        this.props.updateNewAvatarUrl(path)



    }

    render(){
        const { input: { value } } = this.props
        const {input,label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
        return(
            <div><label>{label}</label>
                <div>
                    <input
                        type='file'
                        accept='.jpg, .png, .jpeg'
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}

export default connect(null, {updateNewAvatarUrl})(AvatarFileInput);