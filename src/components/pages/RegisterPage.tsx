import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '../atoms/Button'
import Navbar from '../molecules/Navbar'
import RegisterTemplate from '../templates/RegisterTemplate'
import PhoneAndEmailValidation from '../../APIComponents/PhoneAndEmailValidation'

const LoginPage: React.FC = () => {
    const input = (
        <TextField
            placeholder="Номер телефона"
            helperText="Укажите ваш номер телефона. Он будет использоваться для входа в приложение'}"
        />
    )
    const button = <Button color="primary">Продолжить</Button>

    return (
        <RegisterTemplate 
            navigation={<Navbar header="Регистрация в Utair" />}
            input = {input}
            button = {button}
            agreements = {() => null}
        />
    )
}

export default LoginPage
