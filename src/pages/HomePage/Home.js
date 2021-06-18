import React from 'react'

import { ThemeProvider } from 'styled-components';

// Importing components
import { InfoSection, PricingSection, EmailSubscription, FooterContentMenu, MainFooter } from '../../components';

// Importing data
import { homeFirstObj, homeSecondObj, homeThirdObj, homeFourthObj } from './Data';

// Importing images
import homeFirstImage from '../../images/business.svg';
import homeSecondImage from '../../images/meninblue.jpg';
import homeThirdImage from '../../images/quickprocess.svg'
import homeFourthImage from '../../images/security.svg'
const Home = () => {
    return (
        <>
            <ThemeProvider theme={{ lightTheme: homeFirstObj.lightBg, flipSides: homeFirstObj.flipSides }}>
                <InfoSection {...homeFirstObj} imageSrc={homeFirstImage} />
            </ThemeProvider>
            <ThemeProvider theme={{ lightTheme: homeSecondObj.lightBg, flipSides: homeSecondObj.flipSides }}>
                <InfoSection {...homeSecondObj} imageSrc={homeSecondImage} />
            </ThemeProvider>
            <ThemeProvider theme={{ lightTheme: homeThirdObj.lightBg, flipSides: homeThirdObj.flipSides }}>
                <InfoSection {...homeThirdObj} imageSrc={homeThirdImage} />
            </ThemeProvider>
            <PricingSection />
            <ThemeProvider theme={{ lightTheme: homeFourthObj.lightBg, flipSides: homeFourthObj.flipSides }}>
                <InfoSection {...homeFourthObj} imageSrc={homeFourthImage} />
            </ThemeProvider>
            <EmailSubscription />
            <FooterContentMenu />
            <MainFooter />
        </>
    )
}

export default Home
