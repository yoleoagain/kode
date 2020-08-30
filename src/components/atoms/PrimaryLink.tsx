import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import Theme from '../../Theme'
import styled from 'styled-components'

const StyledLink = styled(Link)<LinkProps>`
    color: ${Theme.palette.primary.main};
    text-decoration: none;
`
const PrimaryLink: React.FC<LinkProps> = (props) => <StyledLink {...props}>{props.children}</StyledLink>

export default PrimaryLink
