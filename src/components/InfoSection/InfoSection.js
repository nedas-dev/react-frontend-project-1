import React from 'react';
import { InfoSecondary, InfoWrapper, InfoRow, ImageRow, TopLine, Header, SubTitle, InfoButton } from './InfoSection.elements';
import { Container } from '../../globalStyles';

const InfoSection = ({ toplineText,
    headerText,
    subtitleText,
    infobuttonText,
    imageSrc,
    lightBg,
    buttonLink,
}) => {
    return (
        <InfoSecondary>
            <Container>
                <InfoWrapper>
                    <InfoRow>
                        <TopLine>{toplineText}</TopLine>
                        <Header>{headerText}</Header>
                        <SubTitle>{subtitleText}</SubTitle>
                        <InfoButton to={buttonLink}>{infobuttonText}</InfoButton>
                    </InfoRow>
                    <InfoRow>
                        <ImageRow src={imageSrc}></ImageRow>
                    </InfoRow>
                </InfoWrapper>
            </Container>
        </InfoSecondary >
    )
}

export default InfoSection;
