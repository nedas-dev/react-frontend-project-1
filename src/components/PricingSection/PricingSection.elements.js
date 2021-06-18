import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Container } from '../../globalStyles';
import { global } from '../../globalVariables';

export const PricingSecondary = styled.div`
background-color: ${global.buttonPrimary};
`

export const PricingContainer = styled(Container)`
max-width: 1200px;
padding-top: 5rem;
padding-bottom: 5rem;
`

export const PricingHeader = styled.h1`
color: white;
font-size: 2.2rem;
line-height: 2.5rem;
letter-spacing: 1px;
margin-bottom: 1rem;
margin-top: 0.5rem;
text-align: center;
font-weight: 500;
padding-bottom: 2rem;
`

// PricingWrapper,
// PricingInstance,
// PricingLogo,
// PricingPackage,
// PricingPrice,
// PricingDescription,
// PricingButton
export const PricingWrapper = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: row;
justify-content: space-evenly;
@media screen and (max-width: 960px){
    flex-direction: column;
}
`

export const PricingInstanceWithLink = styled(Link)`
padding: 4rem 2rem;
background-color: #242424;
width: 260px;
color: white;
text-align: center;
text-decoration: none;

@media screen and (max-width: 960px){
    width: 80%;
    max-width: 400px;
    margin: 2rem auto;
    padding: 6rem 2rem;
}
@media screen and (min-width: 960px){
    &:hover{
    transform: scale(1.05);
    transition: all 0.3s ease; 
}
}
`

export const PricingLogo = styled.div`
padding-bottom: 1rem;
color: #b1b1b1;
`

export const PricingPackage = styled.h3`
font-weight: 400;
`

export const PricingPrice = styled.h1`
letter-spacing: 1px;
margin: 1rem 0rem;
margin-bottom: 2rem;
span{
    font-size: 14px;
    display: block;
    font-weight: 200;
}
`

export const PricingDescription = styled.div`
color: #b1b1b1;
font-size: 14px;
padding: 5px 0px;
`

export const PricingButton = styled.button`
margin-top: 2rem;
padding: 10px 35px;
background-color: ${global.buttonPrimary};
color: white;
border-radius: 5px;
text-decoration: none;
cursor: pointer;
&:hover{
    background-color: ${global.buttonSecondary};
}
`