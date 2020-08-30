import React from 'react'
import ArrowBack from '../atoms/ArrowBack'
import styled from 'styled-components'

type NavbarProps = {
    header?: string | undefined
}

const StyledNavbar = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
`
const Arrow = styled.span`margin-right: 19px;`

const Header = styled.span`
    font-size: 20px;
    margin: 0;
`

const Navbar: React.FC<NavbarProps> = ({header}) => {
    return (
        <StyledNavbar>
            <Arrow>
                <ArrowBack/>
            </Arrow>
            <Header>{header}</Header>
        </StyledNavbar>
    )
}

export default Navbar
