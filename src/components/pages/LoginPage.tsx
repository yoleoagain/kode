import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../reducers/rootReducer'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '../atoms/Button'
import Navbar from '../molecules/Navbar'
import LoginTemplate from '../templates/LoginTemplate'
import PhoneAndEmailValidation from '../../APIComponents/PhoneAndEmailValidation'
import LoginButton from '../../APIComponents/LoginButton'
import SignUpLink  from '../molecules/SignUpLink'

const LoginPage = () => {
    const input = (
        <PhoneAndEmailValidation>
            <TextField />
        </PhoneAndEmailValidation>
    )
    // Запуск 
    // const button = (
    //     <LoginButton>
    //         <Button color="primary">Войти</Button>            
    //     </LoginButton>
    // )
    const button = <Button color="primary">Войти</Button>

    return (
        <LoginTemplate 
            navigation={<Navbar />}
            input = {input}
            button = {button}
            signUp = {<SignUpLink/>}
        />
    )
}

export default LoginPage
