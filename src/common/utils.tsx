/**
 * Определение на этапе ввода email или номер телефона
 */
export function isNumberOrEmail(text: string){
    if (text.length === 1 && (['+', '8'].includes(text[1]))){
        return 'phone'
    } else if (text.includes('+7') && !text.includes('@')){
        return 'phone'
    } else if (text.includes('@')){
        return 'email'
    } else{
        return null
    }
    // if (isPhoneNumber(text)){
    //     return 'phone'
    // } else if(isEmail(text)){
    //     return 'email'
    // } else{
    //     return null
    // }
}

export function isPhoneNumber(phoneNumber: string){
    let match = phoneNumber.match(/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/g)
    return match !== null && match[0].length === phoneNumber.length
}

export function isEmail(email: string){
    let match = email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return match !== null && match[0].length === email.length
}


export function delay(time: number){ return new Promise(resolve => setTimeout(resolve, time)) }