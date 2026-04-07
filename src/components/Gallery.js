import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  font-weight: 400;
  color: #FFFDF4;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: 1px solid #D4AF37;
  color: #D4AF37;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 2px;
  padding: 12px 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #D4AF37;
    color: #1a1a1a;
  }
`;

const GalleryGrid = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 50px;
  align-content: start;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    padding: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 30px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ImageCard = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  cursor: pointer;
  background: #1a1a1a;
  border: 1px solid rgba(212, 175, 55, 0.2);

  &:hover img {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  backface-visibility: hidden;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ImageCard}:hover & {
    opacity: 1;
  }
`;

const ImageNumber = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  color: #D4AF37;
`;

// Lightbox for viewing single image
const Lightbox = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.98);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: high-quality;
`;

const LightboxVideo = styled.video`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const LightboxClose = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  color: #D4AF37;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: 1px solid #D4AF37;
  color: #D4AF37;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #D4AF37;
    color: #1a1a1a;
  }

  &.prev {
    left: 20px;
  }

  &.next {
    right: 20px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

function Gallery({ isOpen, onClose, title, images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!isOpen) return null;

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>CLOSE</CloseButton>
        </Header>

        <GalleryGrid>
          {images.map((image, index) => (
            <ImageCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
            >
              {image.endsWith('.mp4') ? (
                <Video src={image} muted loop autoPlay playsInline />
              ) : (
                <Image src={image} alt={`${title} - ${index + 1}`} />
              )}
              <ImageOverlay>
                <ImageNumber>{String(index + 1).padStart(2, '0')}</ImageNumber>
              </ImageOverlay>
            </ImageCard>
          ))}
        </GalleryGrid>

        {lightboxIndex !== null && (
          <Lightbox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LightboxClose onClick={closeLightbox}>&times;</LightboxClose>
            <NavButton className="prev" onClick={prevImage}>&larr;</NavButton>
            {images[lightboxIndex].endsWith('.mp4') ? (
              <LightboxVideo src={images[lightboxIndex]} controls autoPlay loop muted />
            ) : (
              <LightboxImage src={images[lightboxIndex]} alt="" />
            )}
            <NavButton className="next" onClick={nextImage}>&rarr;</NavButton>
          </Lightbox>
        )}
      </Overlay>
    </AnimatePresence>
  );
}

export default Gallery;
