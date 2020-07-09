export const required = (value) => {
    if (value) return undefined;
    return 'Поле не должно быть пустым!';
}

export const minLengthCreator = maxLength => value =>
    value && value.length < maxLength
        ? `Поле содержит менее ${maxLength} символов!`
        :  undefined;

export const maxLengthCreator = maxLength => value =>
    value && value.length > maxLength
        ? `Поле содержит более ${maxLength} символов!`
        :  undefined;


export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Не корректно указан адрес эл. почты!'
        : undefined