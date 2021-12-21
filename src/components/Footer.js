import React from 'react';
import {FooterContainer, FooterLink, FooterLinkItems, FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper, FooterWrap, SocialLogo, WebsiteRights} from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About</FooterLinkTitle>
                            <FooterLink to = '/login'> Login</FooterLink>
                            <FooterLink to = '/login'> User Profile </FooterLink>
                            <FooterLink to = '/login'> Products</FooterLink>
                            <FooterLink to = '/'> Contact Us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                    <SocialLogo to= '/'> African MarketPlace</SocialLogo>
                    <WebsiteRights> African MarketPlace © {new Date().getFullYear()}</WebsiteRights>                
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;







