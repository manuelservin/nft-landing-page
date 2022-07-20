import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro',sans-serif;
  }
`;
export const Container = styled.div`
	z-index: -1;
	width: 100%;
	max-width: 1300px;
	margin: ${({ margin }) => (margin ? margin : '0 auto')};
	padding: ${({ padding }) => (padding ? padding : '0 50px')};
	@media screen and (max-width: 960px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;
export const Section = styled.section`
z-index:6;

	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse }) => (inverse ? '#210e3f;' : 'white')};
	color: ${({ inverse }) => (inverse ? 'white' : 'black')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;

export const Heading = styled.h2`
	font-size: clamp(1.3rem, 6vw, 3.1rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.4rem;
	text-align: center;
	width: ${({ width }) => (width ? width : '')};
`;

export const TextWrapper = styled.span`
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	text-align: ${({ align }) => (align ? align : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	color: ${({ color }) => (color ? color : '')};
`;


export const Button = styled(motion.button)`
	border-radius: 4px;
	background: #d61eed;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color: #fff;
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	&:hover {
		transition: all 0.3s ease-out;
		/* background: #fff; */
		color: black;
		background-color: #ebc214;
	}
`;


export default GlobalStyle