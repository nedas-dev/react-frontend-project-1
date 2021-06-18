import styled from 'styled-components';
import { global } from '../../../globalVariables';
import { Container } from '../../../globalStyles';

export const ESContainerSecondary = styled.div`
background-color: ${global.darkTheme};
width: 100%;
`

export const ESContainer = styled(Container)`
padding: 4rem 0;
color: white;
text-align: center;
`
export const ESHeader = styled.h1`
font-size: 1.4rem;
line-height: 1.6rem;
letter-spacing: 1px;
padding-bottom: 1rem;
padding-top: 0.5rem;
font-weight: 400;
`
export const ESSubHeader = styled.h2`
font-size: 1rem;
line-height: 1.1rem;
letter-spacing: 1px;
padding-bottom: 1rem;
padding-top: 0.5rem;
font-weight: 300;
`
export const ESForm = styled.form``

export const ESFormEmailInput = styled.input`
padding: 10px 30px;
margin-right: 0.5rem;
border-radius: 4px;
border:none;
outline: none;
@media screen and (max-width: 760px){
    display: block;
    width: 60%;
    margin: auto;
    text-align: center;
}
`
export const ESFormButton = styled.button`
padding: 10px 40px;
background-color: ${({ theme }) => theme.lightTheme ? global.buttonPrimary : global.buttonSecondary};
color: ${global.lightTheme};
border-radius: 5px;
cursor: pointer;
&:hover{
    background-color: ${({ theme }) => theme.lightTheme ? global.buttonSecondary : global.buttonPrimary};
}
@media screen and (max-width: 760px){
    display: block;
    width: 60%;
    margin: auto;
    text-align: center;
}
`