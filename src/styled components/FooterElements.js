import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: darkslategrey;
`;

export const FooterWrap = styled.div`
    padding: 50px 30px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display:flex;
    justify-content:center;
    @media screen and (max-midth: 860px){
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display:flex;
    @media screen and (max-midth: 860px){
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    flex-direction: row;
    align-items: center;
    margin: 18px;
    text-align:left;
    box-sizing: border-box;
    color: #fff;
    @media screen and (max-midth: 460px){
        margin: 0;
        padding: 12px;
        width: 100%;
    }
`;

export const FooterLink = styled(Link)`
    color: lightgrey;
    text-decoration: none;
    margin: 0 0.5rem 0 .5rem;
    font-size: 14px;
`;

export const SocialLogo =styled(Link)`
    color:lightgrey;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2.0rem;
    display: flex;
    align-items: center;
    font-weight: bold;
`;

export const WebsiteRights = styled.small`
    color:lightgrey;
`;



