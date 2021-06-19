import { PricingSection, InfoSection } from '../../components';

import { ThemeProvider } from 'styled-components';

import { serviceFirstObj, serviceSecondObj } from './Data';

import serviceFirstImage from '../../images/servicepage/saveup.svg';
import serviceSecondImage from '../../images/servicepage/fast.svg'

function Service(props) {
    return (
        <>
            <PricingSection />
            <ThemeProvider theme={{ lightTheme: serviceFirstObj.lightBg, flipSides: serviceFirstObj.flipSides }}>
                <InfoSection {...serviceFirstObj} imageSrc={serviceFirstImage} />
            </ThemeProvider>
            <ThemeProvider theme={{ lightTheme: serviceSecondObj.lightBg, flipSides: serviceSecondObj.flipSides }}>
                <InfoSection {...serviceSecondObj} imageSrc={serviceSecondImage} />
            </ThemeProvider>
        </>
    )
}

export default Service;