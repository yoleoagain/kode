import React from 'react'
import styled from 'styled-components'

const StyledLabel = styled.label`color: #8090A6;`

const Label: React.FC = (props) => <StyledLabel>{props.children}</StyledLabel>

export default Label
