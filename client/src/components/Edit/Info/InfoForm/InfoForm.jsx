import React from "react";
import css from "./InfoForm.module.css";
import {Field, formValueSelector, reduxForm} from "redux-form";
import {
    editInput,
    genderInput,
    renderDatePicker,
} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../../../utils/validators/validators";
import SubmitBtnContainer from "../../../common/FormsControls/SubmitBtn/SubmitBtnContainer";
import {connect} from "react-redux";
import RegistrationReduxForm from "../../../RegistrationPage/RegistrationForm/RegistrationForm";


const maxLength15 = maxLengthCreator(15);
const maxLength30 = maxLengthCreator(30);
const minLength2 = minLengthCreator(2)
const minLength4 = minLengthCreator(4)

class InfoForm extends React.Component {

    componentDidMount () {

        const info = this.props.info;
        let username = info.username.split(' ');

        this.props.initialize(
            {
                firstname: username[0],
                surname: username[1],
                gender: info.gender,
                birth: info.birth,
                country: info.location.country,
                city: info.location.city,
                school: info.education.school,
                university: info.education.university,
                faculty: info.education.faculty,
                organisation: info.job.organisation,
                profession: info.job.profession
            }
        );
    }

    changeDate = (date) => {
        const info = this.props.info;
        let username = info.username.split(' ');

        this.props.initialize(
            {
                firstname: this.props.firstnameValue,
                surname: this.props.surnameValue,
                gender: this.props.genderValue,
                birth: this.props.date,
                country: this.props.countryValue,
                city: this.props.cityValue,
                school: this.props.schoolValue,
                university: this.props.universityValue,
                faculty: this.props.facultyValue,
                organisation: this.props.organisationValue,
                profession: this.props.professionValue
            }
        );
    }

    render(){
        return (
            <div className={css.InfoFormWrap}>
                <form onSubmit={this.props.handleSubmit}>

                    <div className={css.sectionLabel}>
                        <span className={css.sectionLabelText}>Ваше имя</span>
                        <div className={css.sectionLabelLine}></div>
                    </div>
                    <div className={css.usernameWrap}>
                        <Field placeholder={'Имя'} name={'firstname'} component={editInput} validate={[required, maxLength15, minLength2]} position={'bottom'} />
                        <Field placeholder={'Фамилия'} name={'surname'} component={editInput} validate={[required, maxLength15, minLength2]} position={'bottom'} />
                    </div>


                    <div className={css.sectionLabel}>
                        <span className={css.sectionLabelText}>Дата рождения</span>
                        <div className={css.sectionLabelLine}></div>
                    </div>
                    <div className={css.birthWrap}>
                        <Field name={'birth'} component={renderDatePicker} changeDate={this.changeDate} />
                    </div>


                    <div className={css.sectionLabel}>
                        <span className={css.sectionLabelText}>Ваш пол</span>
                        <div className={css.sectionLabelLine}></div>
                    </div>
                    <div className={css.genderWrap}>
                        <Field name={'gender'} value={'male'} type={'radio'} component={genderInput} />
                        <Field name={'gender'} value={'female'} type={'radio'} component={genderInput} />
                    </div>


                    <div className={css.sectionLabel}>
                        <span className={css.sectionLabelText}>Где вы живете</span>
                        <div className={css.sectionLabelLine}></div>
                    </div>
                    <div className={css.locationWrap}>
                        <Field placeholder={'Страна'} name={'country'} component={editInput} validate={[maxLength30]} position={'bottom'} />
                        <Field placeholder={'Город'} name={'city'} component={editInput} validate={[maxLength30]} position={'bottom'} />
                    </div>


                    <div className={css.sectionLabel}>
                        <span className={css.sectionLabelText}>Ваша школа</span>
                        <div className={css.sectionLabelLine}></div>
                    </div>
                    <div className={css.schoolWrap}>
                        <Field placeholder={'Название школы'} name={'school'} component={editInput} validate={[maxLength30]} position={'bottom'} />
                    </div>


                    <div className={css.sectionLabel}>
                        <span className={css.sectionLabelText}>Образование</span>
                        <div className={css.sectionLabelLine}></div>
                    </div>
                    <div className={css.locationWrap}>
                        <Field placeholder={'Университет'} name={'university'} component={editInput} validate={[maxLength30]} position={'bottom'} />
                        <Field placeholder={'Факультет'} name={'faculty'} component={editInput} validate={[maxLength30]} position={'bottom'} />
                    </div>


                    <div className={css.sectionLabel}>
                        <span className={css.sectionLabelText}>Место работы</span>
                        <div className={css.sectionLabelLine}></div>
                    </div>
                    <div className={css.locationWrap}>
                        <Field placeholder={'Организация'} name={'organisation'} component={editInput} validate={[maxLength30]} position={'bottom'} />
                        <Field placeholder={'Должность'} name={'profession'} component={editInput} validate={[maxLength30]} position={'bottom'} />
                    </div>


                    <div className={css.submitBtnWrap}>
                        <SubmitBtnContainer/>
                    </div>




                </form>
            </div>
        )
    }


}

InfoForm = reduxForm({form: 'info'})(InfoForm);

const selector = formValueSelector('info') // <-- same as form name

export default  InfoForm = connect(state => {
    const firstnameValue = selector(state, 'firstname');
    const surnameValue = selector(state, 'surname');
    const genderValue = selector(state, 'gender');
    const birthValue = selector(state, 'birth');
    const countryValue = selector(state, 'country');
    const cityValue = selector(state, 'city');
    const schoolValue = selector(state, 'school');
    const universityValue = selector(state, 'university');
    const facultyValue = selector(state, 'faculty');
    const organisationValue = selector(state, 'organisation');
    const professionValue = selector(state, 'profession');

    return {
        firstnameValue,
        surnameValue,
        genderValue,
        birthValue,
        countryValue,
        cityValue,
        schoolValue,
        universityValue,
        facultyValue,
        organisationValue,
        professionValue
    }
})(InfoForm);