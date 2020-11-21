import styled from 'styled-components';

export const StyledInput = styled.input.attrs(props => ({
    // we can define static props
    type: "text",
  }))`
    color: rgb(0,168,230);
    font-size: 1em;
    border: 2px solid rgb(0,168,230);
    border-radius: 5px;
  
    margin: 5px;
    padding: 5px;
  `;