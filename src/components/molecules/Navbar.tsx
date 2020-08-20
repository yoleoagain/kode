import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
    display: flex;
`

type NavbarProps = {
    header: string
}

const Navbar: React.FC<NavbarProps> = ({header}) => {
    return (
        <StyledNavbar>
            <span>{'<-'}</span>
            <h3>{header}</h3>
        </StyledNavbar>
    )
}

export default Navbar
