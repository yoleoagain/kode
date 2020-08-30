import React from 'react'
import PrimaryLink from '../atoms/PrimaryLink'
import styled from 'styled-components'

type AgreementsProps = {
    checked: boolean
}

const StyledAgreements = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

const Navbar: React.FC<AgreementsProps> = ({checked}) => {
    return (
        <StyledAgreements>
            <input type="checkbox" />
            <span>
                Я ознакомлен <PrimaryLink to="/privacy">с условиями моих персональных данных</PrimaryLink>
            </span>
        </StyledAgreements>
    )
}

export default Navbar
