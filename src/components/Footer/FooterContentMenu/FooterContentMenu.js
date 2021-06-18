import {
    FCMSec,
    FCMContainer,
    FCMHeader,
    FCMWrapper,
    FCMTitle
} from './FooterContentMenu.elements';

const FooterContentMenu = (props) => {
    return (
        <FCMSec>
            <FCMContainer>
                <FCMWrapper>
                    <FCMHeader>About Us</FCMHeader>
                    <FCMTitle to='/'>How it works</FCMTitle>
                    <FCMTitle to='/'>Testimonials</FCMTitle>
                    <FCMTitle to='/'>Careers</FCMTitle>
                    <FCMTitle to='/'>Investors</FCMTitle>
                    <FCMTitle to='/'>Terms of Service</FCMTitle>
                </FCMWrapper>
                <FCMWrapper>
                    <FCMHeader>Contact Us</FCMHeader>
                    <FCMTitle to='/'>Contact</FCMTitle>
                    <FCMTitle to='/'>Support</FCMTitle>
                    <FCMTitle to='/'>Destinations</FCMTitle>
                    <FCMTitle to='/'>Sponsorships</FCMTitle>
                </FCMWrapper>
                <FCMWrapper>
                    <FCMHeader>Videos</FCMHeader>
                    <FCMTitle to='/'>Submit Video</FCMTitle>
                    <FCMTitle to='/'>Ambassadors</FCMTitle>
                    <FCMTitle to='/'>Agency</FCMTitle>
                    <FCMTitle to='/'>Influencer</FCMTitle>
                </FCMWrapper>
                <FCMWrapper>
                    <FCMHeader>Social Media</FCMHeader>
                    <FCMTitle to='/'>Instagram</FCMTitle>
                    <FCMTitle to='/'>Twitter</FCMTitle>
                    <FCMTitle to='/'>Facebook</FCMTitle>
                    <FCMTitle to='/'>Youtube</FCMTitle>
                </FCMWrapper>
            </FCMContainer>
        </FCMSec>
    )
}

export default FooterContentMenu;