import React from 'react';
import {StyledInput} from '../styles/StyledInput';

const Input = ({placeholder,callback}) => {
    return (
        <StyledInput placeholder={placeholder} onChange={callback}>

        </StyledInput>
    )
}

export default Input;