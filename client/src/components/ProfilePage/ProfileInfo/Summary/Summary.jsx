import React from "react";
import css from "./Summary.module.css";
import SummaryItmContainer from "./SummaryItm/SummaryItmContainer";

const Summary = (props) => {
    return (
        <div className={css.summary}>
            <SummaryItmContainer itmName={'friends'}/>
        </div>
    )
}

export default Summary;