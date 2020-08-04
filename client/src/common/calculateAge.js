const declOfNum = (number, titles) => { // склонение именительных рядом с числительным
    const cases = [2, 0, 1, 1, 1, 2];
    return number+" "+titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

export const calculateAge = (birthDate) => { //закидывать дату в формате строки ('7.12.91')

    let now = new Date();
    let currentYear = now.getFullYear();

    birthDate = birthDate.split('.');
    birthDate = new Date(birthDate[2], birthDate[1], birthDate[0])

    let birthYear = birthDate.getFullYear();
    let age = currentYear - birthYear;

    if (now < new Date(birthDate.setFullYear(currentYear))) {
        age = age - 1;
    }

    age = declOfNum(age, ['год', 'года', 'лет'])
    return age; // 28 лет
}