import React from "react";

const MonthOptions = (props) => {

    /*const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                      'August', 'September', 'October', 'November', 'December' ];*/

    /*const monthArr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
        'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


    const months = monthArr.map( month => <option value={month}>{month}</option>);
*/

    const monthArr = [
        {eng: 'January',   rus: 'Январь',   val:1},
        {eng: 'February',  rus: 'Февраль',  val:2},
        {eng: 'March',     rus: 'Март',     val:3},
        {eng: 'April',     rus: 'Апрель',   val:4},
        {eng: 'May',       rus: 'Май',      val:5},
        {eng: 'June',      rus: 'Июнь',     val:6},
        {eng: 'July',      rus: 'Июль',     val:7},
        {eng: 'August',    rus: 'Август',   val:8},
        {eng: 'September', rus: 'Сентябрь', val:9},
        {eng: 'October',   rus: 'Октябрь',  val:10},
        {eng: 'November',  rus: 'Ноябрь',   val:11},
        {eng: 'December',  rus: 'Декабрь',  val:12},
    ]

    const months = monthArr.map( month => <option value={month.val}>{month.rus}</option>);

    return months;
}

export default MonthOptions;