import { ThemeProvider } from 'styled-components';

import { signupFirstObj, signupSecondObj } from './Data';

import { InfoSection } from '../../components';

import signupFirstImage from '../../images/servicepage/saveup.svg';
import signupSecondImage from '../../images/servicepage/fast.svg';


function Signup(props) {
    return (
        <>
            <ThemeProvider theme={{ lightTheme: signupFirstObj.lightBg, flipSides: signupFirstObj.flipSides }}>
                <InfoSection {...signupFirstObj} imageSrc={signupFirstImage} />
            </ThemeProvider>
            <ThemeProvider theme={{ lightTheme: signupSecondObj.lightBg, flipSides: signupSecondObj.flipSides }}>
                <InfoSection {...signupSecondObj} imageSrc={signupSecondImage} />
            </ThemeProvider>

        </>
    )
}

export default Signup;