import {
    PricingSecondary,
    PricingContainer,
    PricingHeader,
    PricingWrapper,
    PricingInstanceWithLink,
    PricingLogo,
    PricingPackage,
    PricingPrice,
    PricingDescription,
    PricingButton,

} from './PricingSection.elements';

import { FaGem } from 'react-icons/fa';
import { AiFillGold } from 'react-icons/ai'
import { BiMedal } from 'react-icons/bi'
import { IconContext } from 'react-icons';

const PricingSection = () => {
    return (
        <>
            <PricingSecondary>
                <PricingContainer>
                    <PricingHeader>Our Services</PricingHeader>
                    <PricingWrapper>
                        <PricingInstanceWithLink to='/'>
                            <PricingLogo>
                                < IconContext.Provider value={{ size: '50px' }} >
                                    <BiMedal />
                                </IconContext.Provider>
                            </PricingLogo>
                            <PricingPackage>Starter Pack</PricingPackage>
                            <PricingPrice>$99.99<span>per month</span></PricingPrice>
                            <PricingDescription>100 New Users</PricingDescription>
                            <PricingDescription>$10,000 Budget</PricingDescription>
                            <PricingDescription>Retargeting analytics</PricingDescription>
                            <PricingButton>Choose Plan</PricingButton>
                        </PricingInstanceWithLink>
                        <PricingInstanceWithLink to='/'>
                            <PricingLogo>
                                < IconContext.Provider value={{ size: '50px' }} >
                                    <AiFillGold />
                                </IconContext.Provider>
                            </PricingLogo>
                            <PricingPackage>Gold Rush</PricingPackage>
                            <PricingPrice>$299.99<span>per month</span></PricingPrice>
                            <PricingDescription>1000 New Users</PricingDescription>
                            <PricingDescription>$50,000 Budget</PricingDescription>
                            <PricingDescription>Lead Gen Analytics</PricingDescription>
                            <PricingButton>Choose Plan</PricingButton>
                        </PricingInstanceWithLink>
                        <PricingInstanceWithLink to='/'>
                            <PricingLogo>
                                < IconContext.Provider value={{ size: '50px' }} >
                                    <FaGem />
                                </IconContext.Provider>
                            </PricingLogo>
                            <PricingPackage>Diamond Kings</PricingPackage>
                            <PricingPrice>$599.99<span>per month</span></PricingPrice>
                            <PricingDescription>Unlimited Users</PricingDescription>
                            <PricingDescription>Unlimited Budget</PricingDescription>
                            <PricingDescription>24/7 Support</PricingDescription>
                            <PricingButton>Choose Plan</PricingButton>
                        </PricingInstanceWithLink>
                    </PricingWrapper>
                </PricingContainer>
            </PricingSecondary>
        </>
    )
}

export default PricingSection
