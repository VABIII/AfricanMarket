import React from 'react';
import {FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer,
    FooterLinksWrapper, FooterWrap, SocialLogo, WebsiteRights} from './FooterElements';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialLogo to= '/'> African MarketPlace</SocialLogo>
                <WebsiteRights> African MarketPlace © {new Date().getFullYear()}</WebsiteRights>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLink to = '/login'> Login</FooterLink>
                            <FooterLink to = '/user'> User Profile </FooterLink>
                            <FooterLink to = '/products'> Products</FooterLink>
                            <FooterLink to = '/about'>About</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;







