import React from "react";
import {email, maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {Field, formValueSelector, reduxForm} from "redux-form";
import {connect} from "react-redux";
import YearOptions from "./Options/YearOptions";
import {birthSelect, genderInput, LongRegInput, ShortRegInput} from "../../common/FormsControls/FormsControls";
import css from './RegistrationForm.module.css';
import ErrorContainer from "../../common/FormsControls/ErrorContainer";

const maxLength15 = maxLengthCreator(15);
const minLength2 = minLengthCreator(2)
const minLength4 = minLengthCreator(4)

let RegistrationReduxForm = (props) => {
    const dayValue = props.dayValue;
    const monthValue = props.monthValue;
    const yearValue = props.yearValue;
    const genderValue = props.genderValue;
    const submitFailed = props.submitFailed;

    let birthError;

    if (submitFailed) {
        if (!dayValue || !monthValue || !yearValue) {
            birthError = true;
        } else {
            birthError = false;
        }
    } else {
        birthError = false;
    }

    let genderError;

    if (submitFailed) {
        if (!genderValue) {
            genderError = true;
        } else {
            genderError = false;
        }
    } else {
        genderError = false;
    }



    return (
            <div className={css.registrationFormWrap}>
                <form onSubmit={props.handleSubmit}>
                    <div className={css.usernameWrap}>
                        <Field placeholder={'Имя'} name={'firstName'} component={ShortRegInput} validate={[required, maxLength15, minLength2]} position={'left'} />
                        <Field placeholder={'Фамилия'} name={'surname'} component={ShortRegInput} validate={[required, maxLength15, minLength2]} position={'top'} />
                    </div>
                    <div>
                        <Field placeholder={'Эл. адрес'} name={'email'} component={LongRegInput} validate={[required, email ]} position={'left'} />
                    </div>
                    <div>
                        <Field placeholder={'Пароль'} name={'password'} component={LongRegInput} validate={[required, maxLength15, minLength4]} position={'left'} />
                    </div>

                    <div className={css.birthWrap}>
                        <label>Дата рождения</label>
                        <div className={css.birth}>
                            <div className={css.birthFieldsWrap}>
                                <Field name='day' component={birthSelect} yearValue={yearValue} monthValue={monthValue} validate={required} ></Field>
                                <Field name='month' component={birthSelect} validate={required}></Field>
                                <Field name='year' component={birthSelect} validate={required}></Field>
                            </div>
                            {birthError ? <ErrorContainer size='medium' position={'left'} error={'Укажите ваш возраст'} /> : null}
                        </div>
                    </div>

                    <div className={css.genderWrap}>
                        <label>Пол</label>
                        <div className={css.gender}>
                            <div className={css.genderFieldsWrap}>
                                <Field name={'gender'}  type='radio' value={'male'} validate={required} component={genderInput} />
                                <Field name={'gender'}  type='radio' value={'female'} validate={required} component={genderInput} />
                            </div>
                            {genderError ? <ErrorContainer size='medium' position={'left'} error={'Укажите ваш пол!'} /> : null}
                        </div>
                        <div className={css.genderText}>Нажимая кнопку Регистрация, вы принимаете Условия, Политику использования данных и Политику в отношении файлов cookie.
                            Вы можете получать от нас SMS-уведомления, отказаться от которых можно в любой момент.</div>
                    </div>
                    <div className={css.submitWrap}>
                        <button  onMouseEnter={props.toggleHover} onMouseLeave={props.toggleHover} className={css.submitBtn + ' ' + (props.isHover ? css.hover : '') }>Регистрация</button>
                    </div>
                </form>
            </div>

    )
}
RegistrationReduxForm = reduxForm({form: 'registration'})(RegistrationReduxForm);

const selector = formValueSelector('registration') // <-- same as form name

RegistrationReduxForm = connect(state => {
    const dayValue = selector(state, 'day');
    const monthValue = selector(state, 'month');
    const yearValue = selector(state, 'year');
    const genderValue = selector(state, 'gender');

    return {
        dayValue,
        monthValue,
        yearValue,
        genderValue
    }
})(RegistrationReduxForm)

export default RegistrationReduxForm;