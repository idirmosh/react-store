export const GetMessages = (elm) => {
    const messages = [];
    if (elm.validity.valueMissing){
        messages.push('Value required');
    } if (elm.validity.typeMismatch) {
        messages.push(`Invalid ${elm.type}`);
    }
    return messages;
}