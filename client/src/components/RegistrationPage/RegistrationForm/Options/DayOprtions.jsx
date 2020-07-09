import React from "react";

const DayOptions = (props) => {

    let month = props.month;
    let dayCount;
    let dayArr = [];

    let year = props.year;
    let isLeap = new Date(year,2,1,-1).getDate()==29;


    if (   month === 'January' || month === 'March'   || month === 'May' || month === 'July'
        || month === 'August'  || month === 'October' || month === 'December' ) {
        dayCount = 31;
    }

    if (month === 'April' || month === 'June'|| month === 'September' ||  month === 'November' ) {
        dayCount = 30;
    }

    if (month === 'February' && !isLeap) {
        dayCount = 28;
    } else if (month === 'February' && isLeap) {
        dayCount = 29;
    }


    for (let i = 1; i <= dayCount; i++) {
        dayArr.push(i);
    }

    const days = dayArr.map( day => <option value={day}>{day}</option>);

    return days
}

export default DayOptions;