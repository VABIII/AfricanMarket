import React from 'react';
import '../styles/Footer.css';
import {
	FooterContainer,
	FooterLink,
	FooterLinkItems,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterWrap,
	SocialLogo,
	WebsiteRights,
} from '../styled components/FooterElements';

const Footer = () => {
	const token = localStorage.getItem('token');

	return (
		<FooterContainer>
			<FooterWrap>
				<SocialLogo to="/"> African MarketPlace</SocialLogo>
				<WebsiteRights>
					African MarketPlace © {new Date().getFullYear()}
				</WebsiteRights>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							{!token && (
								<>
									<FooterLink className="link" to="/">
										Home
									</FooterLink>
									<FooterLink className="link" to="/about">
										About
									</FooterLink>
									<FooterLink className="link" to="/login">
										Login
									</FooterLink>
									<FooterLink className="link" to="/signup">
										Sign Up
									</FooterLink>
								</>
							)}

							{token && (
								<>
									<FooterLink className="link" to="/products">
										Products
									</FooterLink>
									<FooterLink className="link" to="/user">
										Profile
									</FooterLink>
									<FooterLink className="link" to="/logout">
										Logout
									</FooterLink>
								</>
							)}

							{/* If logged in */}
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
