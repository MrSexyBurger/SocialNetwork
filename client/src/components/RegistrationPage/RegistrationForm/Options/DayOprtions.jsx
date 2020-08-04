import React from "react";

const DayOptions = (props) => {

    let month = props.month;
    let dayCount;
    let dayArr = [];

    let year = props.year;
    let isLeap = new Date(year,2,1,-1).getDate()==29;

    if ( month == 1 || month == 3   || month == 5 || month == 7
        || month == 8  || month == 10 || month == 12 ) {
        dayCount = 31;
    }

    if (month == 4 || month == 6|| month == 9 ||  month == 11 ) {
        dayCount = 30;
    }

    if (month == 2 && !isLeap) {
        dayCount = 28;
    } else if (month == 2 && isLeap) {
        dayCount = 29;
    }

    for (let i = 1; i <= dayCount; i++) {
        dayArr.push(i);
    }

    const days = dayArr.map( day => <option value={day}>{day}</option>);

    return days
}

export default DayOptions;