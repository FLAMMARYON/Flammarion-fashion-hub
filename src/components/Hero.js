import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const floatReverse = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-5deg); }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(180deg, #FFFDF4 0%, #FBF7F0 50%, #F8F3EB 100%);
  overflow: hidden;
`;

const FloralPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23800020'%3E%3Cpath d='M40 40c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-15c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z'/%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Cpath d='M40 25c0-2.5-1.5-5-4-6 2.5-1 4-3.5 4-6 0 2.5 1.5 5 4 6-2.5 1-4 3.5-4 6z'/%3E%3Cpath d='M40 55c0 2.5 1.5 5 4 6-2.5 1-4 3.5-4 6 0-2.5-1.5-5-4-6 2.5-1 4-3.5 4-6z'/%3E%3Cpath d='M25 40c-2.5 0-5 1.5-6 4-1-2.5-3.5-4-6-4 2.5 0 5-1.5 6-4 1 2.5 3.5 4 6 4z'/%3E%3Cpath d='M55 40c2.5 0 5-1.5 6-4 1 2.5 3.5 4 6 4-2.5 0-5 1.5-6 4-1-2.5-3.5-4-6-4z'/%3E%3C/g%3E%3C/svg%3E");
`;

const FloatingFlower = styled.div`
  position: absolute;
  font-size: ${props => props.size || '2rem'};
  color: #D4AF37;
  opacity: 0.12;
  animation: ${props => props.$reverse ? floatReverse : float} ${props => props.$duration || '6s'} ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};

  &.f1 { top: 15%; left: 10%; }
  &.f2 { top: 25%; right: 15%; }
  &.f3 { bottom: 30%; left: 8%; }
  &.f4 { bottom: 20%; right: 10%; }
  &.f5 { top: 40%; left: 5%; }
  &.f6 { top: 60%; right: 5%; }
`;

const GoldLine = styled(motion.div)`
  position: absolute;
  width: 1px;
  background: linear-gradient(to bottom, transparent, #D4AF37, transparent);

  &.left {
    left: 12%;
    top: 15%;
    height: 200px;
  }

  &.right {
    right: 12%;
    bottom: 15%;
    height: 200px;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  z-index: 10;
  padding: 0 20px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoLarge = styled(motion.img)`
  width: 90%;
  max-width: 1000px;
  height: 150px;
  object-fit: cover;
  object-position: center;
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 95%;
    height: 80px;
    margin-top: 60px;
  }
`;

const FloralDivider = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 25px 0;
  color: #D4AF37;
  font-size: 0.9rem;

  &:before, &:after {
    content: '';
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
`;

const Tagline = styled(motion.p)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 300;
  font-style: italic;
  color: #666;
  max-width: 550px;
  margin: 0 auto 15px;
  line-height: 1.8;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SubTagline = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 50px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #FFFDF4;
  background: linear-gradient(135deg, #800020 0%, #5c0017 100%);
  padding: 18px 45px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover:before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(128, 0, 32, 0.3);
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #800020;
  background: transparent;
  padding: 18px 45px;
  text-decoration: none;
  border: 1px solid #D4AF37;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: #D4AF37;
    color: #FFFDF4;
    border-color: #D4AF37;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ScrollFlower = styled(motion.span)`
  font-size: 1.2rem;
  color: #D4AF37;
  margin-bottom: 10px;
`;

const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, #D4AF37, transparent);
`;

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection>
      <FloralPattern />

      <FloatingFlower className="f1" size="3rem" $duration="7s">&#10047;</FloatingFlower>
      <FloatingFlower className="f2" size="2.5rem" $duration="8s" $delay="1s" $reverse>&#10048;</FloatingFlower>
      <FloatingFlower className="f3" size="2rem" $duration="6s" $delay="2s">&#10046;</FloatingFlower>
      <FloatingFlower className="f4" size="3.5rem" $duration="9s" $delay="0.5s" $reverse>&#10047;</FloatingFlower>
      <FloatingFlower className="f5" size="1.8rem" $duration="7s" $delay="1.5s">&#10049;</FloatingFlower>
      <FloatingFlower className="f6" size="2.2rem" $duration="8s" $delay="3s" $reverse>&#10046;</FloatingFlower>

      <GoldLine
        className="left"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 200 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
      <GoldLine
        className="right"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 200 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />

      <HeroContent>
        <LogoLarge
          src="/logo.png"
          alt="Flammarion"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <FloralDivider
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          &#10047;
        </FloralDivider>

        <Tagline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Emerging fashion stylist with a passion for creating
          visual stories through thoughtful styling and creative direction.
        </Tagline>

        <SubTagline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Fashion Stylist &middot; Visual Storyteller
        </SubTagline>

        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <PrimaryButton
            onClick={() => scrollTo('collections')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
          </PrimaryButton>
          <SecondaryButton
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>

      <ScrollIndicator
        onClick={() => scrollTo('collections')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <ScrollFlower
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          &#10048;
        </ScrollFlower>
        <ScrollLine />
      </ScrollIndicator>
    </HeroSection>
  );
}

export default Hero;
