import React from "react";
import css from './FormsControls.module.css';
import ErrorContainer from "./ErrorContainer";
import DayOptions from "../../RegistrationPage/RegistrationForm/Options/DayOprtions";
import MonthOptions from "../../RegistrationPage/RegistrationForm/Options/MonthOptions";
import YearOptions from "../../RegistrationPage/RegistrationForm/Options/YearOptions";

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