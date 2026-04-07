import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterSection = styled.footer`
  padding: 80px 60px 40px;
  background: #800020;
  color: #FFFDF4;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 30px 30px;
  }
`;

const FloralDecor = styled.div`
  position: absolute;
  font-size: 8rem;
  color: #D4AF37;
  opacity: 0.05;

  &.left {
    top: 20px;
    left: -20px;
    transform: rotate(-15deg);
  }

  &.right {
    bottom: -20px;
    right: -20px;
    transform: rotate(45deg);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const BrandSection = styled.div``;

const LogoImg = styled.img`
  height: 60px;
  margin-bottom: 20px;
`;

const BrandDescription = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(255, 253, 244, 0.8);
  max-width: 300px;
  font-style: italic;
`;

const FloralDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 25px 0;
  color: #D4AF37;
  font-size: 0.8rem;
  opacity: 0.6;

  &:before, &:after {
    content: '';
    width: 30px;
    height: 1px;
    background: rgba(212, 175, 55, 0.5);
  }
`;

const LinksSection = styled.div``;

const LinkTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #D4AF37;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:after {
    content: '&#10047;';
    font-size: 0.5rem;
    opacity: 0.6;
  }
`;

const LinkList = styled.ul`
  list-style: none;
`;

const LinkItem = styled.li`
  margin-bottom: 12px;
`;

const Link = styled.a`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  color: rgba(255, 253, 244, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;

  &:hover {
    color: #D4AF37;
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 25px;
`;

const SocialLink = styled.a`
  width: 42px;
  height: 42px;
  border: 1px solid rgba(212, 175, 55, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  color: #D4AF37;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #D4AF37;
    color: #800020;
    border-color: #D4AF37;
    transform: translateY(-3px);
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: rgba(255, 253, 244, 0.6);
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CopyrightFlower = styled.span`
  color: #D4AF37;
  font-size: 0.8rem;
`;

function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <FooterSection>
      <FloralDecor className="left">&#10047;</FloralDecor>
      <FloralDecor className="right">&#10048;</FloralDecor>

      <Container>
        <TopSection>
          <BrandSection>
            <LogoImg src="/logo.png" alt="Flammarion" />
            <BrandDescription>
              Creating visual stories through thoughtful styling
              and creative direction. Based in Kigali.
            </BrandDescription>
            <FloralDivider>&#10047;</FloralDivider>
            <SocialLinks>
              <SocialLink href="mailto:eritlux9@gmail.com">EM</SocialLink>
              <SocialLink href="https://pin.it/7lj7I2ux8" target="_blank">PT</SocialLink>
            </SocialLinks>
          </BrandSection>

          <LinksSection>
            <LinkTitle>Services</LinkTitle>
            <LinkList>
              <LinkItem><Link onClick={() => scrollTo('collections')}>Editorial Styling</Link></LinkItem>
              <LinkItem><Link onClick={() => scrollTo('collections')}>Lookbook Styling</Link></LinkItem>
              <LinkItem><Link onClick={() => scrollTo('collections')}>Personal Styling</Link></LinkItem>
              <LinkItem><Link onClick={() => scrollTo('collections')}>Creative Direction</Link></LinkItem>
            </LinkList>
          </LinksSection>

          <LinksSection>
            <LinkTitle>Explore</LinkTitle>
            <LinkList>
              <LinkItem><Link onClick={() => scrollTo('about')}>About Me</Link></LinkItem>
              <LinkItem><Link onClick={() => scrollTo('lookbook')}>Lookbook</Link></LinkItem>
              <LinkItem><Link onClick={() => scrollTo('collections')}>Portfolio</Link></LinkItem>
              <LinkItem><Link href="https://pin.it/7lj7I2ux8" target="_blank">Pinterest</Link></LinkItem>
            </LinkList>
          </LinksSection>

          <LinksSection>
            <LinkTitle>Contact</LinkTitle>
            <LinkList>
              <LinkItem><Link onClick={() => scrollTo('contact')}>Get in Touch</Link></LinkItem>
              <LinkItem><Link href="mailto:eritlux9@gmail.com">Email Me</Link></LinkItem>
              <LinkItem><Link>Kigali, Rwanda</Link></LinkItem>
            </LinkList>
          </LinksSection>
        </TopSection>

        <BottomSection>
          <Copyright>
            <CopyrightFlower>&#10047;</CopyrightFlower>
            &copy; 2026 Flammarion. All rights reserved.
            <CopyrightFlower>&#10047;</CopyrightFlower>
          </Copyright>
        </BottomSection>
      </Container>
    </FooterSection>
  );
}

export default Footer;
