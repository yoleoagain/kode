import React from 'react'
import styled from 'styled-components'
import Theme from '../../Theme'

type RegisterTemplateProps = {
    navigation?: React.FC | React.ReactElement,
    input?: React.FC | React.ReactElement,
    button?: React.FC | React.ReactElement,
    agreements?: React.FC | React.ReactElement
}

const Wrapper = styled.div`
    padding: ${Theme.spacing(5, 5, 0, 5)};
    height: 100%;
`

const ElementWrapper = styled.span`
    padding: ${Theme.spacing(4, 0)};
    width: 100%;
    display: flex;
    flex-direction: column;
`

const AgreementsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    flex-grow: 1;
    justify-content: flex-end;
    padding-bottom: ${Theme.spacing(4 * 2)};
`

const RegisterTemplate: React.FC<RegisterTemplateProps> = (props) => {
    return (
        <Wrapper>
            {props.navigation}
            <ElementWrapper>{props.input}</ElementWrapper>
            <AgreementsWrapper>
                {props.agreements}
                {props.button}
            </AgreementsWrapper>
        </Wrapper>
    )
}

export default RegisterTemplate
