import React, { useState, isValidElement, cloneElement, InputHTMLAttributes } from 'react'
import { connect, ConnectedProps, DispatchProp } from 'react-redux'
import { changeLogin, validateLogin } from '../actions/loginActions'
import InputMasked from './InputMasked'
import { LoginState } from '../reducers/types/Login'
import MaskedInput, { maskArray } from 'react-text-mask'

interface Props {  }
interface RootState {
    login: {
        login: string,
        loginIsValid: boolean, 
        channel: 'phone' | 'email' | null // Для маски на этапе ввода
    }
}

const mapStateToProps = (state: RootState) => ({ login: state.login.login, loginIsValid: state.login.loginIsValid, channel: state.login.channel })
const mapDispatchToProps = { 
    changeLogin: (event: React.FormEvent<HTMLInputElement>) => changeLogin(event.currentTarget.value),
    validateLogin: (event: React.FormEvent<HTMLInputElement>) => validateLogin(),
}
const connector = connect(mapStateToProps, mapDispatchToProps)

function PhoneAndEmailValidation<T>(props: React.PropsWithChildren<Props> & ConnectedProps<typeof connector>){

    let inputMode = 'text'
    let pattern = ''
    let inputMask:maskArray = false

    if (props.channel === 'phone'){
        inputMode = 'tel'
        // inputMask = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
    } else if(props.channel === 'email'){
        inputMode = 'email'
        // inputMask = false
    }

    let inputProps = {
        error: !props.loginIsValid,
        helperText: !props.loginIsValid ? 'Поле заполнено неверно' : '',
        label: "Номер телефона или Email",
        inputProps: {inputMode, pattern},
        onChange: props.changeLogin,
        onBlur: props.validateLogin,
        value: props.login,
        // InputProps: {
        //     inputComponent: InputMasked as any,
        //     inputProps: {maskArray: inputMask}
        // }
    }

    if (isValidElement(props.children)){
        return cloneElement(props.children, inputProps)
    } else{
        return <>{props.children}</>
    }
}

export default connector(PhoneAndEmailValidation)