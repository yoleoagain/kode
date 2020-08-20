import React, { useState, isValidElement, cloneElement, InputHTMLAttributes } from 'react'
import { connect, ConnectedProps, DispatchProp } from 'react-redux'
import { changeLogin } from '../actions/loginActions'
import { LoginState } from '../reducers/types/Login'

interface Props {  }
interface RootState {
    login: {
        login: string,
        loginIsValid: boolean, 
        channel: 'phone' | 'email' | null // Для маски на этапе ввода
    }
}

const mapStateToProps = (state: RootState) => ({ login: state.login.login, loginIsValid: state.login.loginIsValid, channel: state.login.channel })
const mapDispatchToProps = { changeLogin: (event: React.FormEvent<HTMLInputElement>) => changeLogin(event.currentTarget.value) }
const connector = connect(mapStateToProps, mapDispatchToProps)

function PhoneAndEmailValidation<T>(props: React.PropsWithChildren<Props> & ConnectedProps<typeof connector>){
    const [helperText, setHelperText] = useState('Incorrect entry.')
    const [mask, setMask] = useState('')
    let inputMode = 'text'
    
    switch(props.channel){
        case 'phone': inputMode = 'tel'; break;
        case 'email': inputMode = 'email'; break;
    }

    if (isValidElement(props.children)){
        console.log('props', props)
        return cloneElement(props.children, {
            // error,
            helperText,
            inputProps: {inputMode},
            onChange: props.changeLogin,
            value: props.login
        })
    } else{
        return <>{props.children}</>
    }
}



export default connector(PhoneAndEmailValidation)