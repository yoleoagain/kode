import React from 'react'
import MaskedInput, { maskArray } from 'react-text-mask'

type InputMaskedProps = {
    inputRef: (ref: HTMLInputElement | null) => void;
    mask: maskArray | []
}

const InputMasked: React.FC<InputMaskedProps> = (props) => {

    const { inputRef, mask, ...other } = props

    return(
        <MaskedInput
            {...other}
            ref={(ref: any) => {
                inputRef(ref ? ref.inputElement : null)
            }}
            mask={mask}
            placeholderChar={'\u2000'}
            showMask
        />
    )
}

export default InputMasked
