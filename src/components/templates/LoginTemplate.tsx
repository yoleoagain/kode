import React from 'react'
import styled from 'styled-components'

type LoginTemplateProps = {
    navigation?: React.FC | React.ReactElement,
    input?: React.FC | React.ReactElement,
    button?: React.FC | React.ReactElement,
    signUp?: React.FC | React.ReactElement
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const LoginTemplate: React.FC<LoginTemplateProps> = (props) => {
    return (
        <Wrapper>
            {props.navigation}
            {props.input}
            {props.button}
            {props.signUp}
        </Wrapper>
    )
}

export default LoginTemplate
