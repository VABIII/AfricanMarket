import "../styles/Footer.css";
import {FooterContainer, FooterLink, FooterLinkItems,
    FooterLinksContainer, FooterLinksWrapper, FooterWrap,
    SocialLogo, WebsiteRights}
    from '../styled components/FooterElements';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLink className="link" to='/login'> Login</FooterLink>
                            <FooterLink className="link" to='/user'> User Profile </FooterLink>
                            <FooterLink className="link" to='/products'> Products</FooterLink>
                            <FooterLink className="link" to='/about'>About</FooterLink>
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
