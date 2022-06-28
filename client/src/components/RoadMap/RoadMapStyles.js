import styled from 'styled-components';
import { pink, orange } from '../../Colors';
import { Heading, TextWrapper } from '../../globalStyles';

export const PricingSection = styled.div`
	padding: 50px 0 160px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #101522;
`;

export const PricingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const RoadMapHeading = styled(Heading)`
	font-size: 3rem;
	margin-bottom: 24px;

	color: ${pink};
`;

export const PriceSubtitle = styled.h1`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	text-align: center;
	color: #fff;
`;

export const PricingContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	
	> div {
		margin: 0.7rem;
	}
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const PricingCardInfo = styled.div`
	background: #ebffe0;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);

	text-decoration: none;
	border-radius: 20px;
	width: 345px;


    height: 385px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 40px;
	color: #fff;
	margin: auto;
	
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
	@media screen and (max-width: 768px) {
		width: 90%;
		&:hover {
			transform: none;
		}
	}
`;

export const PricingCardPlan = styled.h3`
	margin-bottom: 5px;
	margin-top: 25px;
	font-size: 2rem;
	text-transform: uppercase ;
	font-family: 'Luckiest Guy', cursive;
	letter-spacing: 1px;
	color:#21033d;
	text-align: center;
`;

export const PricingCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: #331a4b;
`;

export const PricingCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;
`;