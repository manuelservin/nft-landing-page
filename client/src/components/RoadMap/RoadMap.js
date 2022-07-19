import React from 'react';
import { Button, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	RoadMapHeading,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,

	PricingCardFeatures,
	PricingCardFeature,
} from './RoadMapStyles';
import Tilt from 'react-tilt';
import { roadMapData } from '../../data/homeData';

const RoadMap = () => {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="roadmap">
				<PricingWrapper>
					<RoadMapHeading> 
						
						ROAD-MAP</RoadMapHeading>
					<TextWrapper
						color="white"
						maxWidth="460px"
						mb="2rem"
						size="1.2rem"
						lineHeight="1.3rem"
						align="center"
						weight="600"
					>
						Listen without limits on your phone, speaker, and other devices at the most
						suitable option for you.
					</TextWrapper>
					<PricingContainer>
						{roadMapData.map((card, index) => (
							<Tilt
								className="Tilt"
								key={index}
								options={{ max: 15, scale: 1.01, speed: 200 }}
							>
								<PricingCardInfo key={index}>
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardFeatures>
										{card.body}
									</PricingCardFeatures>
								</PricingCardInfo>
							</Tilt>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
};

export default RoadMap;