import React from 'react'
import styled from 'styled-components'
import Theme from '../../Theme'

type LoginTemplateProps = {
    navigation?: React.FC | React.ReactElement,
    input?: React.FC | React.ReactElement,
    button?: React.FC | React.ReactElement,
    signUp?: React.FC | React.ReactElement
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${Theme.spacing(5)};
`

const ElementWrapper = styled.span`
    padding: ${Theme.spacing(4, 0)};
    width: 100%;
    display: flex;
    flex-direction: column;
`

const LoginTemplate: React.FC<LoginTemplateProps> = (props) => {
    return (
        <Wrapper>
            {props.navigation}
            <ElementWrapper>{props.input}</ElementWrapper>
            <ElementWrapper>{props.button}</ElementWrapper>
            <ElementWrapper>{props.signUp}</ElementWrapper>
        </Wrapper>
    )
}

export default LoginTemplate
