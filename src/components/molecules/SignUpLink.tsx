import React from 'react'
import styled from 'styled-components'
import Label from '../atoms/Label'
import PrimaryLink from '../atoms/PrimaryLink'

const Wrap = styled.div`
    &&{
        display: flex;
        flex-direction: column;
    }

    && label{
        margin-bottom: 5px;
    }

`

const SignUpLink: React.FC = (props) => {
    return(
        <Wrap>
            <Label>{'Нет аккаунта?'}</Label>
            <PrimaryLink to="/sign-up">{'Зарегистрируйтесь'}</PrimaryLink>
        </Wrap>
    )
}

export default SignUpLink
