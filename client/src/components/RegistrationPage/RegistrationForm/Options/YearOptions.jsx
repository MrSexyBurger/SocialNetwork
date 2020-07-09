import React from "react";

const YearOptions = () => {

    let currentYear = new Date().getFullYear();
    let startYear = currentYear - 100;
    let yearsArr = [];

    for (let i = currentYear; i >= startYear; i--) {
        yearsArr.push(i);
    }

    const result = yearsArr.map( year => <option value={year}>{year}</option> );

    return result;
}

export default YearOptions;