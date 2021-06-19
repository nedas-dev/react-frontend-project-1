import styled from 'styled-components'
import { Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa'
import { global } from '../../globalVariables';

export const Nav = styled.nav`
background: ${global.darkTheme};
height: 80px;
display: flex;
color: ${global.lightTheme};
position: relative;
`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;
align-items: center;
${Container} 
`

export const NavLogo = styled(Link)`
color: ${global.lightTheme};
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
`

export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
font-size: 1.5rem;
display: none;

@media screen and (max-width: 960px){
    display: block;
    cursor: pointer;
}
`

export const NavMenu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 2rem;
@media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    position: absolute;
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    top: 80px;
    left: ${({ click }) => (click ? '0' : '-100%')};
    width: 100%;
    height: 90.7vh;
    font-size: 1.2rem;
    opacity: 1;
    transition: left 0.5s ease;
    background-color: ${global.darkTheme};

}
`

export const NavLinks = styled(Link)`
color: ${global.lightTheme};
text-decoration: none;
padding: 20px;
border-bottom: 3px solid ${global.darkTheme};
&:hover{
    /* color: #101522; */
    border-bottom: 3px solid #5c5cd0;
    /* background-color: white; */
}
`

export const NavButton = styled(Link)`
color: white;
text-decoration: none;
background-color: ${global.buttonPrimary};
border-radius: 5px;
padding: 10px 25px;
margin-left: 2rem;
border: none;
cursor: pointer;
font-weight: 350;
@media screen and (max-width: 960px){
    padding: 10px;
    outline: none;
    border: none;
    font-size: 1.25rem;
    margin: 1rem 0.5rem;
    align-self: stretch;
}
&:hover{
        background-color: ${global.buttonSecondary};
    }
`