import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '../atoms/Button'
import Navbar from '../molecules/Navbar'
import LoginTemplate from '../templates/LoginTemplate'
import PhoneAndEmailValidation from '../../APIComponents/PhoneAndEmailValidation'
import SignUpLink  from '../molecules/SignUpLink'

const LoginPage: React.FC = () => {
    const input = (
        <PhoneAndEmailValidation>
            <TextField />
        </PhoneAndEmailValidation>
    )
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
