import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 120px 0;
  background: linear-gradient(180deg, #F5F0EB 0%, #FFFDF4 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const FloralBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23800020'%3E%3Ccircle cx='50' cy='50' r='4'/%3E%3Cpath d='M50 35c0-3-2-6-5-7 3-1 5-4 5-7 0 3 2 6 5 7-3 1-5 4-5 7z'/%3E%3Cpath d='M50 65c0 3 2 6 5 7-3 1-5 4-5 7 0-3-2-6-5-7 3-1 5-4 5-7z'/%3E%3Cpath d='M35 50c-3 0-6 2-7 5-1-3-4-5-7-5 3 0 6-2 7-5 1 3 4 5 7 5z'/%3E%3Cpath d='M65 50c3 0 6-2 7-5 1 3 4 5 7 5-3 0-6 2-7 5-1-3-4-5-7-5z'/%3E%3C/g%3E%3C/svg%3E");
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  padding: 0 60px;
`;

const SectionSubtitle = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #D4AF37;
  margin-bottom: 15px;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  font-weight: 300;
  color: #800020;
  letter-spacing: 4px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HorizontalScroll = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 60px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #F5F0EB;
  }

  &::-webkit-scrollbar-thumb {
    background: #D4AF37;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

const LookCard = styled(motion.div)`
  flex: 0 0 350px;
  height: 550px;
  position: relative;
  overflow: hidden;
  scroll-snap-align: start;
  cursor: pointer;

  @media (max-width: 768px) {
    flex: 0 0 280px;
    height: 450px;
  }
`;

const LookImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.bg};
  background-size: cover;
  background-position: center;
  transition: transform 0.8s ease;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
  transform: translateZ(0);

  ${LookCard}:hover & {
    transform: scale(1.05);
  }
`;

const LookOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
  transition: all 0.4s ease;

  ${LookCard}:hover & {
    background: linear-gradient(to top, rgba(128, 0, 32, 0.8) 0%, rgba(128, 0, 32, 0.3) 100%);
  }
`;

const LookFrame = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  pointer-events: none;
  transition: all 0.4s ease;

  ${LookCard}:hover & {
    border-color: rgba(212, 175, 55, 0.6);
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
  }
`;

const LookFloral = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 1.2rem;
  color: #D4AF37;
  opacity: 0;
  transform: rotate(-15deg);
  transition: all 0.4s ease;

  ${LookCard}:hover & {
    opacity: 0.8;
    transform: rotate(0deg);
  }
`;

const LookContent = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  color: #FFFDF4;
`;

const LookNumber = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  font-weight: 300;
  color: #D4AF37;
  opacity: 0.8;
  line-height: 1;
  display: block;
  margin-bottom: 10px;
`;

const looks = [
  {
    number: "01",
    title: "",
    description: "",
    bg: "url('/flammarion42.jpeg')"
  },
  {
    number: "02",
    title: "",
    description: "",
    bg: "url('/flammarion4.jpeg')"
  },
  {
    number: "03",
    title: "",
    description: "",
    bg: "url('/flammarion3.jpeg')"
  },
  {
    number: "04",
    title: "",
    description: "",
    bg: "url('/flammarion2.2.jpeg')"
  },
  {
    number: "05",
    title: "",
    description: "",
    bg: "url('/flammarion59.jpeg')"
  },
  {
    number: "06",
    title: "",
    description: "",
    bg: "url('/flammarion52.jpeg')"
  }
];

function Lookbook() {
  return (
    <Section id="lookbook">
      <FloralBackground />

      <SectionHeader>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Process
        </SectionSubtitle>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Lookbook
        </SectionTitle>
      </SectionHeader>

      <HorizontalScroll>
        {looks.map((look, index) => (
          <LookCard
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <LookImage bg={look.bg} />
            <LookOverlay />
            <LookFrame />
            <LookFloral>&#10047;</LookFloral>
            <LookContent>
              <LookNumber>{look.number}</LookNumber>
            </LookContent>
          </LookCard>
        ))}
      </HorizontalScroll>
    </Section>
  );
}

export default Lookbook;
