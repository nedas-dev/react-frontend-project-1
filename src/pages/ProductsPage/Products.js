import { ThemeProvider } from 'styled-components';

import { InfoSection } from '../../components';

import { productsFirstObj, productsSecondObj } from './Data';

import productsFirstImage from '../../images/productspage/shopping.svg';
import productsSecondImage from '../../images/homepage/quickprocess.svg';

function Products(props) {
    return (
        <>
            <ThemeProvider theme={{ lightTheme: productsFirstObj.lightBg, flipSides: productsFirstObj.flipSides }}>
                <InfoSection {...productsFirstObj} imageSrc={productsFirstImage} />
            </ThemeProvider>
            <ThemeProvider theme={{ lightTheme: productsSecondObj.lightBg, flipSides: productsSecondObj.flipSides }}>
                <InfoSection {...productsSecondObj} imageSrc={productsSecondImage} />
            </ThemeProvider>
        </>
    )
}

export default Products;