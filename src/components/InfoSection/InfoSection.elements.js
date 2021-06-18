import styled from 'styled-components';
import { global } from '../../globalVariables';
import { Link } from 'react-router-dom';

export const InfoSecondary = styled.div`
background-color: ${({ theme }) => theme.lightTheme ? global.lightTheme : global.darkTheme};
padding: 7rem 0px;
`
export const InfoWrapper = styled.div`
display: flex;
flex-direction: ${({ theme }) => theme.flipSides ? 'row-reverse' : 'row'};
justify-content: space-evenly;
align-items: center;
@media screen and (min-width: 600px) and (max-width: 840px){
    padding: 0px 50px;
}
@media screen and (max-width: 840px){
    flex-direction: column;
}
`

export const InfoRow = styled.div`
display: flex;
flex-direction: column;
text-align: left;
flex-basis: 40%;

@media screen and (max-width: 840px){
    margin-bottom: 3rem;
}
`

export const ImageRow = styled.img`
width: 100%;
max-height: auto;
margin: auto;
@media screen and (max-width: 960px){
    width: 85%;
}
`

export const TopLine = styled.div`
font-size: 18px;
color: ${({ theme }) => theme.lightTheme ? global.buttonPrimary : '#d2d2d2'};
line-height: 2rem;
letter-spacing: 1px;
`

export const Header = styled.div`
color: ${({ theme }) => theme.lightTheme ? 'black' : 'white'};
font-size: 2.2rem;
line-height: 2.5rem;
letter-spacing: 1px;
padding-bottom: 1rem;
padding-top: 0.5rem;
`

export const SubTitle = styled.div`
font-size: 16px;
line-height: 22px;
color: ${({ theme }) => theme.lightTheme ? 'black' : 'white'};
`

export const InfoButton = styled(Link)`
margin: 2rem 0 0 0;
padding: 10px 60px;
align-self: flex-start;
text-align: center;
background-color: ${({ theme }) => theme.lightTheme ? global.buttonSecondary : global.buttonPrimary};
color: ${global.lightTheme};
border-radius: 5px;
text-decoration: none;
cursor: pointer;
&:hover{
    background-color: ${({ theme }) => theme.lightTheme ? global.buttonPrimary : global.buttonSecondary};
}
@media screen and (max-width: 960px){
    align-self: stretch;
}
`
