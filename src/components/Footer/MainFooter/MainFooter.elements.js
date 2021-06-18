import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { FaMagento } from 'react-icons/fa';

import { global } from '../../../globalVariables';
import { Container } from '../../../globalStyles';

export const MainFooterSecondary = styled.div`
background-color: ${global.darkTheme};
padding: 4rem 30px;
`

export const MainFooterContainer = styled(Container)`
max-width: 1000px;
`

export const MainFooterWrapper = styled.div`
display: flex;
color: white;
align-items: center;
justify-content: space-between;
@media screen and (max-width: 960px){
    flex-direction: column;
}
`

export const NavLogo = styled(Link)`
color: ${global.lightTheme};
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;

@media screen and (max-width: 960px){
    padding: 1.5rem 0;
}
`

export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
`

export const MainFooterCopyright = styled.div`
font-size: 12px;
justify-self: center;
border: 1px solid white;
`

export const SocialMediaWrapper = styled.div`
width: 250px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
@media screen and (max-width: 960px){
    padding: 1.5rem 0;
}
`

export const SocialLink = styled(Link)`
color: white;
font-size: 20px;
&:hover{
    color: ${global.buttonSecondary};
}
`