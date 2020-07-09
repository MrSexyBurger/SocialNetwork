import React from "react";
import RegistrationFormContainer from "./RegistrationForm/RegistrationFormContainer";
import css from './Registration.module.css';

const Registration = (props) => {
    return (
        <div className={css.regPageWrap}>
            <div className={css.regPage}>
                <div className={css.regPageL}>
                    <div className={css.regPageText}>
                        Social Natwork помогает вам всегда оставаться на связи и общаться со своими знакомыми.
                    </div>
                    <img src={'https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png'} />
                </div>

                <div>
                    <div className={css.regFormTitle}>
                        <h1>Регистрация</h1>
                        <h2>Быстро и легко.</h2>
                    </div>
                    <RegistrationFormContainer/>
                </div>
            </div>
        </div>
    )
}

export default Registration;