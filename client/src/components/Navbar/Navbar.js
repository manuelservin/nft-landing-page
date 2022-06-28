import React,{useState, useEffect} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Button } from '../../globalStyles';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavItem,
	NavItemBtn,
	NavLinks,
	NavBtnLink,
} from './NavbarStyles';



const Navbar = () => {
  const [show, setShow] = useState(false);
	const [background, setBackground] = useState(false);
	const navigate = useNavigate();
  const location = useLocation();

  


  const closeMobileMenu = () => {
		if (location.pathname !== '/') {
			navigate('/',{replace: true});
		}
		setShow(false);
	};
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 80) {
				setBackground(true);
				return;
			}
			setBackground(false);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

  const data = ['Collection', 'Roadmap', 'Team'];

  return (
    <>
			<Nav background={background}>
				<NavbarContainer>
					<NavLogo to="/" onClick={scroll.scrollToTop}>
						<NavIcon src="./logo.svg" alt="" />
					Monster
					</NavLogo>
					<MobileIcon onClick={() => setShow(!show)}>
						{show ? <FaTimes /> : <FaBars />}
					</MobileIcon>

					<NavMenu onClick={() => setShow(!show)} show={show}>
						{data.map((navItem, index) => (
							<NavItem key={index}>
								<NavLinks
									spy={true}
									duration={500}
									smooth={true}
									exact="true"
									offset={-80}
									to={navItem.toLowerCase()}
									onClick={closeMobileMenu}
								>
									{navItem}
								</NavLinks>
							</NavItem>
						))}
						<NavItemBtn>
							<NavBtnLink to="/sign-up">
								<Button onClick={closeMobileMenu} fontBig primary>
									SIGN UP
								</Button>
							</NavBtnLink>
						</NavItemBtn>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
  )
}

export default Navbar