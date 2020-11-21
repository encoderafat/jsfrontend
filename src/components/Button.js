import React from 'react';
import {StyledButton} from '../styles/StyledButton';

const Button = ({text,callback}) => {
    return (
        <StyledButton  type="button" onClick={callback}>
            {text}
        </StyledButton>
    )
}

export default Button;