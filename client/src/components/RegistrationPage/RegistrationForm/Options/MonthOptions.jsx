import React from "react";

const MonthOptions = (props) => {

    /*const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                      'August', 'September', 'October', 'November', 'December' ];*/

    /*const monthArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
        'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


    const months = monthArr.map( month => <option value={month}>{month}</option>);
*/

    const monthArr = [
        {eng: 'January',   rus: 'Январь' },
        {eng: 'February',  rus: 'Февраль' },
        {eng: 'March',     rus: 'Март' },
        {eng: 'April',     rus: 'Апрель' },
        {eng: 'May',       rus: 'Май' },
        {eng: 'June',      rus: 'Июнь' },
        {eng: 'July',      rus: 'Июль' },
        {eng: 'August',    rus: 'Август' },
        {eng: 'September', rus: 'Сентябрь' },
        {eng: 'October',   rus: 'Октябрь' },
        {eng: 'November',  rus: 'Ноябрь' },
        {eng: 'December',  rus: 'Декабрь' },
        ]

    const months = monthArr.map( month => <option value={month.eng}>{month.rus}</option>);

    return months;
}

export default MonthOptions;