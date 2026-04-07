import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 140px 60px;
  background: #F8F5F0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 30px;
  }
`;

const FloralAccent = styled.div`
  position: absolute;
  font-size: 6rem;
  color: #D4AF37;
  opacity: 0.06;

  &.top {
    top: 60px;
    right: 10%;
  }

  &.bottom {
    bottom: 60px;
    left: 10%;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
`;

const MainImage = styled.div`
  width: 100%;
  height: 650px;
  background: url('/flammarion11.jpeg');
  background-size: cover;
  background-position: center top;
  position: relative;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  @media (max-width: 768px) {
    height: 450px;
  }
`;

const ImageFrame = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  right: -25px;
  bottom: -25px;
  border: 1px solid #D4AF37;
  z-index: -1;
`;

const FloralCorner = styled.div`
  position: absolute;
  bottom: -15px;
  right: -15px;
  width: 80px;
  height: 80px;
  background: #D4AF37;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #800020;
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
`;

const Subtitle = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #D4AF37;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &:before {
    content: '';
    width: 40px;
    height: 1px;
    background: #D4AF37;
  }
`;

const Title = styled(motion.h2)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  font-weight: 300;
  color: #800020;
  letter-spacing: 2px;
  margin-bottom: 35px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled(motion.p)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: #555;
  line-height: 2;
  margin-bottom: 25px;
`;

const Quote = styled(motion.blockquote)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 400;
  font-style: italic;
  color: #800020;
  padding: 30px 0 30px 30px;
  border-left: 2px solid #D4AF37;
  margin: 45px 0;
  line-height: 1.8;
  position: relative;

  &:before {
    content: '"';
    position: absolute;
    top: 10px;
    left: -15px;
    font-size: 4rem;
    color: #D4AF37;
    opacity: 0.3;
    font-family: Georgia, serif;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 40px 0;
  color: #D4AF37;
  font-size: 0.8rem;

  &:before, &:after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #D4AF37, transparent);
  }

  &:after {
    background: linear-gradient(90deg, transparent, #D4AF37);
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  gap: 50px;
  margin-top: 50px;

  @media (max-width: 480px) {
    gap: 30px;
    flex-wrap: wrap;
  }
`;

const Stat = styled.div`
  text-align: left;
`;

const StatNumber = styled.span`
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 300;
  color: #800020;
  line-height: 1;
  margin-bottom: 8px;
`;

const StatLabel = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #888;
`;

const TeamCredits = styled(motion.div)`
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid rgba(212, 175, 55, 0.3);
`;

const CreditsTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #D4AF37;
  margin-bottom: 20px;
`;

const CreditsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const CreditItem = styled.div`
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.95rem;
  color: #666;

  span {
    color: #800020;
    font-weight: 500;
  }
`;

function About() {
  return (
    <Section id="about">
      <FloralAccent className="top">&#10047;</FloralAccent>
      <FloralAccent className="bottom">&#10048;</FloralAccent>

      <Container>
        <ImageContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MainImage />
          <ImageFrame />
          <FloralCorner>&#10047;</FloralCorner>
        </ImageContainer>

        <Content>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </Subtitle>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hello, I'm Flammarion
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm an emerging fashion stylist passionate about creating compelling
            visual narratives through thoughtful styling. My approach combines
            a keen eye for detail with a love for storytelling.
          </Description>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Currently seeking opportunities to collaborate on editorial shoots,
            lookbooks, and creative projects. I bring fresh perspective, dedication,
            and a clear point of view to every project.
          </Description>

          <Quote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Style is a way to say who you are without having to speak.
          </Quote>

          <Divider>&#10047;</Divider>

          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ fontSize: '1rem', marginTop: '20px' }}
          >
            <strong style={{ color: '#800020' }}>Services:</strong> Editorial Styling,
            Lookbook Styling, Personal Styling, Creative Direction, Wardrobe Consulting
          </Description>
        </Content>
      </Container>
    </Section>
  );
}

export default About;
