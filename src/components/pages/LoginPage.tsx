import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../reducers/rootReducer'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '../atoms/Button'
import Navbar from '../molecules/Navbar'
import LoginTemplate from '../templates/LoginTemplate'
import PhoneAndEmailValidation from '../../APIComponents/PhoneAndEmailValidation'
import SignUpLink  from '../molecules/SignUpLink'

const mapState = (state: RootState) => ({ fetching: state.login.fetching })
const mapDispatch = {}
const connector = connect(mapState, mapDispatch)
type ReduxProps = ConnectedProps<typeof connector>

const LoginPage = (props: ReduxProps) => {
    const input = (
        <PhoneAndEmailValidation>
            <TextField />
        </PhoneAndEmailValidation>
    )
    const button = <Button disabled={props.fetching} color="primary">Войти</Button>

    return (
        <LoginTemplate 
            navigation={<Navbar />}
            input = {input}
            button = {button}
            signUp = {<SignUpLink/>}
        />
    )
}

export default connector(LoginPage)
