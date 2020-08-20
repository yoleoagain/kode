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
}


export function delay(time: number) { return new Promise(resolve => setTimeout(resolve, time)) }