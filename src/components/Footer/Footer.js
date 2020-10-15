import React from "react";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterHeading,
  FooterSubhead,
  Form,
  FormInput,
  LinksContainer,
  LinksWrapper,
  LinkItems,
  LinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  LogoLink,
  LogoIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elememts";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterHeading>
        <FooterSubhead>You can unsubscribe at any time.</FooterSubhead>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <LinksContainer>
        <LinksWrapper>
          <LinkItems>
            <LinksTitle>About Us</LinksTitle>
            <FooterLink to="/sign-up">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </LinkItems>
          <LinkItems>
            <LinksTitle>Contact Us</LinksTitle>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Support</FooterLink>
            <FooterLink to="/">Destinations</FooterLink>
            <FooterLink to="/">Sponsorships</FooterLink>
          </LinkItems>
        </LinksWrapper>
        <LinksWrapper>
          <LinkItems>
            <LinksTitle>Videos</LinksTitle>
            <FooterLink to="/">Submit Video</FooterLink>
            <FooterLink to="/">Ambassadors</FooterLink>
            <FooterLink to="/">Agency</FooterLink>
            <FooterLink to="/">Influencer</FooterLink>
          </LinkItems>
          <LinkItems>
            <LinksTitle>Social Media</LinksTitle>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
          </LinkItems>
        </LinksWrapper>
      </LinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <LogoLink to="/">
            <LogoIcon />
            ULTRA
          </LogoLink>
          <WebsiteRights>ULTRA © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              }
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
