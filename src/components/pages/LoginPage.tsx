import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '../atoms/Button'
import Navbar from '../molecules/Navbar'
import LoginTemplate from '../templates/LoginTemplate'
import PhoneAndEmailValidation from '../../APIComponents/PhoneAndEmailValidation'

const LoginPage: React.FC = () => {
    const input = <PhoneAndEmailValidation><TextField /></PhoneAndEmailValidation>
    const button = <Button>Войти</Button>

    return (
        <LoginTemplate 
            navigation={<Navbar header={'Navbar'} />}
            input = {input}
            button = {button}
        />
    )
}

export default LoginPage
