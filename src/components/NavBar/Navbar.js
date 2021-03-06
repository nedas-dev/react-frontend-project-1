import { useState } from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavButton } from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    // click is a variable that holds if the nav menu is open or closed
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon />
                        ULTRA
                    </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu click={click} onClick={handleClick}>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                            <NavLinks to='/service'>
                                Services
                            </NavLinks>
                            <NavLinks to='/products'>
                                Products
                            </NavLinks>
                            <NavButton to='/sign-up'>
                                SIGN UP
                            </NavButton>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
