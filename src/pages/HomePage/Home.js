import React from 'react'

import { ThemeProvider } from 'styled-components';

// Importing components
import { InfoSection, PricingSection } from '../../components';

// Importing data
import { homeFirstObj, homeSecondObj, homeThirdObj, homeFourthObj } from './Data';

// Importing images
import homeFirstImage from '../../images/homepage/business.svg';
import homeSecondImage from '../../images/homepage/meninblue.jpg';
import homeThirdImage from '../../images/homepage/quickprocess.svg'
import homeFourthImage from '../../images/homepage/security.svg'
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
        </>
    )
}

export default Home
