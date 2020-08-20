import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

type ButtonProps = {
  disabled?: boolean,
  children?: React.ReactNode,
  color?: "primary" | "secondary" | undefined | "default",
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledButton = styled(Button)`
  cursor: ${(p) => p.disabled ? 'not-allowed' : 'pointer'};
  border-radius: 0 !important;
  color: #FFFFFF;
  font-family: Arial;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px 0;
  border: 0;
`;

const KButton: React.FC<ButtonProps> = ({children, disabled, onClick, color}) => {
    return(
      <StyledButton 
        onClick={onClick} 
        disabled={disabled}
        color={color}
        variant="contained"
      >
        {children}
      </StyledButton>
    )
}

export default KButton