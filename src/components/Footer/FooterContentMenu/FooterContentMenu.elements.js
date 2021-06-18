import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { global } from '../../../globalVariables';
import { Container } from '../../../globalStyles';

export const FCMSec = styled.div`
background-color: ${global.darkTheme};
color: white;
padding: 3rem 0 1rem 0;
`
export const FCMContainer = styled(Container)`
max-width: 900px;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`
export const FCMWrapper = styled.div`
display: flex;
flex-direction: column;
@media screen and (max-width: 960px){
    flex-basis: 45%;
    align-items: center;
    padding-bottom: 1rem;
}
`
export const FCMHeader = styled.h3`
padding: 1rem 0;
font-weight: 400;
`
export const FCMTitle = styled(Link)`
padding: 0.2rem 0;
font-size: 14px;
text-decoration: none;
color: white;
font-weight: 350;

&:hover{
    color: ${global.buttonSecondary};
}
`