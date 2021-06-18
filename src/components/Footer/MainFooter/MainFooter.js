import { MainFooterSecondary, NavLogo, NavIcon, MainFooterContainer, MainFooterWrapper, MainFooterCopyright, SocialMediaWrapper, SocialLink } from './MainFooter.elements';

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

const MainFooter = (props) => {
    return (
        <MainFooterSecondary>
            <MainFooterContainer>
                <MainFooterWrapper>
                    <NavLogo>
                        <NavIcon />
                        ULTRA
                    </NavLogo>
                    <MainFooterCopyright>ULTRA &copy; 2021</MainFooterCopyright>
                    <SocialMediaWrapper>
                        <SocialLink to='/'><FaFacebook /></SocialLink>
                        <SocialLink to='/'><FaInstagram /></SocialLink>
                        <SocialLink to='/'><FaYoutube /></SocialLink>
                        <SocialLink to='/'><FaTwitter /></SocialLink>
                        <SocialLink to='/'><FaLinkedin /></SocialLink>
                    </SocialMediaWrapper>
                </MainFooterWrapper>
            </MainFooterContainer>
        </MainFooterSecondary>
    )
}

export default MainFooter;