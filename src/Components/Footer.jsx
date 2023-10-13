import { mobile,tab,labtop } from "../Responsiveness/responsive";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #8f5555;
  padding: 5rem 10rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  color:white;
  /* flex-direction:column; */
  ${labtop({
    flexDirection:"column",
    gap:"5rem",

  })}
`;

const SocialMediaLinks = styled.div`
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  margin-right: 10px;
  color:white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all .5s ease-in-out;
  &:hover {
    color: #007bff;
  }

`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
  font-size:2rem;
  `;

const Address = styled.p`
  margin: 0;
  `;

const OpeningHours = styled.div`
  margin-bottom: 20px;
  `;

const FooterText = styled.p`
font-size:2rem;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaLinks>
        <SocialLink href="https://www.facebook.com">Facebook</SocialLink>
        <SocialLink href="https://www.twitter.com">Twitter</SocialLink>
        <SocialLink href="https://www.instagram.com">Instagram</SocialLink>
      </SocialMediaLinks>
      <ContactInfo>
        <Address>123 Gym Street, Cityville</Address>
        <FooterText>Phone: (555) 123-4567</FooterText>
        <FooterText>Email: info@gymwebsite.com</FooterText>
      </ContactInfo>
      <OpeningHours>
        <FooterText>Opening Hours</FooterText>
        <FooterText>Monday - Friday: 6:00 AM - 10:00 PM</FooterText>
        <FooterText>Saturday: 8:00 AM - 8:00 PM</FooterText>
        <FooterText>Sunday: 10:00 AM - 6:00 PM</FooterText>
      </OpeningHours>
      <FooterText>© 2023 Gym Website. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
