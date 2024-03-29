import styled from "styled-components";

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.2rem;
color: var(--lightGray);
// background: var(--mainRed);
background: ${props => props.card ? 'var(--mainRed)' : 'var(--darkBlue)'};
border: none;
border-radius: 5px;
padding: .3rem .6rem;
cursor: pointer;
margin: ${props => props.clearbutton ? "1.2rem 0 1rem 0" : ".2rem .5rem .2rem 0"} ;
transition: all .4s ease;
&:hover {
    background: var(--mainBlue);
} 
&:focus {
    outline: none;
} 
`;