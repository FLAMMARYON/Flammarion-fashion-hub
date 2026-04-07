import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Gallery from './Gallery';

const Section = styled.section`
  padding: 120px 60px;
  background: #FFFDF4;
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 30px;
  }
`;

const FloralCorner = styled.div`
  position: absolute;
  font-size: 4rem;
  color: #D4AF37;
  opacity: 0.08;

  &.top-left {
    top: 40px;
    left: 40px;
  }

  &.bottom-right {
    bottom: 40px;
    right: 40px;
    transform: rotate(180deg);
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const SectionSubtitle = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #D4AF37;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  &:before, &:after {
    content: '✿';
    font-size: 0.6rem;
  }
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

const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CollectionCard = styled(motion.div)`
  position: relative;
  height: 380px;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(1) {
    grid-row: span 2;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 320px;

    &:nth-child(1) {
      grid-row: span 1;
    }
  }
`;

const CardImage = styled.div`
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

  ${CollectionCard}:hover & {
    transform: scale(1.05);
  }
`;

const CardVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;

  ${CollectionCard}:hover & {
    transform: scale(1.05);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(128, 0, 32, 0.85) 0%, rgba(128, 0, 32, 0.2) 40%, transparent 70%);
  transition: background 0.5s ease;

  ${CollectionCard}:hover & {
    background: linear-gradient(to top, rgba(128, 0, 32, 0.95) 0%, rgba(128, 0, 32, 0.4) 60%, rgba(128, 0, 32, 0.2) 100%);
  }
`;

const CardFloral = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.5rem;
  color: #D4AF37;
  opacity: 0.4;
  transition: all 0.4s ease;

  ${CollectionCard}:hover & {
    opacity: 0.8;
    transform: rotate(15deg) scale(1.2);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  color: #FFFDF4;
`;

const CardSeason = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #D4AF37;
  display: block;
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 3px;
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  font-style: italic;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;

  ${CollectionCard}:hover & {
    opacity: 0.9;
    transform: translateY(0);
  }
`;

const ViewButton = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #D4AF37;
  margin-top: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid transparent;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease 0.1s;

  ${CollectionCard}:hover & {
    opacity: 1;
    transform: translateY(0);
    border-bottom-color: #D4AF37;
  }
`;

const springShowImages = [
  '/flammarion2.1.jpeg',
  '/flammarion2.2.jpeg',
  '/flammarion2.3.jpeg',
  '/flammarion2.4.jpeg',
  '/flammarion2.5.jpeg',
  '/flammarion2.6.jpeg',
  '/flammarion2.7.jpeg',
  '/flammarion2.8.jpeg'
];

const editorialImages = [
  '/flammarion45.jpeg',
  '/flammarion31.jpeg',
  '/flammarion48.jpeg',
  '/flammarion62.jpeg',
  '/flammarion41.jpeg',
  '/flammarion34.jpeg',
  '/flammarion50.jpeg',
  '/flammarion43.jpeg',
  '/flammarioin35.jpeg',
  '/flammarion47.jpeg',
  '/flammarion32.jpeg',
  '/flammarion46.jpeg',
  '/flammarion40.jpeg',
  '/flammarion36.jpeg',
  '/flammarion49.jpeg',
  '/flammarion42.jpeg',
  '/flammarion33.jpeg',
  '/flammarion44.jpeg'
];

const lookbookImages = [
  '/flammarion7.jpeg',
  '/flammarion27.jpeg',
  '/flammarion9.jpeg',
  '/flammarion24.jpeg',
  '/flammarion10.jpeg',
  '/flammarion29.jpeg',
  '/flammarion5.jpeg',
  '/flammarion23.jpeg',
  '/flammarion8.jpeg',
  '/flammarion26.jpeg',
  '/flammarion6.jpeg',
  '/flammarion30.jpeg',
  '/flammarion28.jpeg'
];

const creativeImages = [
  '/flammarion27.jpeg',
  '/flammarion5.jpeg',
  '/flammarion54.jpeg',
  '/flammarion9.jpeg',
  '/flammarion28.jpeg',
  '/flammarion3.jpeg',
  '/flammarion56.jpeg',
  '/flammarion7.jpeg',
  '/flammarion26.jpeg',
  '/flammarion53.jpeg',
  '/flammarion10.jpeg',
  '/flammarion29.jpeg',
  '/flammarion4.jpeg',
  '/flammarion57.jpeg',
  '/flammarion6.jpeg',
  '/flammarion55.jpeg',
  '/flammarion8.jpeg',
  '/flammarion58.jpeg'
];

const personalImages = [
  '/flammarion17.jpeg',
  '/flammarion21.mp4',
  '/flammarion63.mp4',
  '/flammarion59.jpeg',
  '/flammarion51.mp4',
  '/flammarion14.jpeg',
  '/flammarion22.mp4',
  '/flammarion64.mp4',
  '/flammarion25.jpeg',
  '/flammarion60.mp4',
  '/flammarion19.jpeg',
  '/flammarion39.mp4',
  '/flammarion65.mp4',
  '/flammarion12.jpeg',
  '/flammarion67.mp4',
  '/flammarion16.jpeg',
  '/flammarion61.mp4',
  '/flammarion66.mp4',
  '/flammarion20.jpeg',
  '/flammarion13.jpeg',
  '/flammarion18.jpeg',
  '/flammarion15.jpeg'
];

const collections = [
  {
    season: "Spring '26",
    title: "Clubs Fair Fashion Show",
    description: "Runway styling for the Spring 2026 Clubs Fair Fashion Show.",
    bg: "url('/flammarion2.4.jpeg')",
    flower: "&#10047;",
    hasGallery: true,
    galleryImages: springShowImages
  },
  {
    season: "Editorial",
    title: "Editorial Styling",
    description: "Fashion storytelling for magazines and publications.",
    bg: "url('/flammarion38.jpeg')",
    flower: "&#10048;",
    hasGallery: true,
    galleryImages: editorialImages
  },
  {
    season: "Lookbook",
    title: "Lookbook Styling",
    description: "Creating cohesive visual narratives for brands.",
    bg: "url('/flammarion1.jpeg')",
    flower: "&#10046;",
    hasGallery: true,
    galleryImages: lookbookImages
  },
  {
    season: "Creative",
    title: "Creative Direction",
    description: "Concept development and visual direction for shoots.",
    bg: "url('/flammarion2.jpeg')",
    flower: "&#10049;",
    hasGallery: true,
    galleryImages: creativeImages
  },
  {
    season: "Personal",
    title: "Personal Styling",
    description: "Helping individuals discover their unique style.",
    bg: "/flammarion37.mp4",
    isVideo: true,
    flower: "&#10047;",
    hasGallery: true,
    galleryImages: personalImages
  }
];

function Collections() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeGallery, setActiveGallery] = useState({ title: '', images: [] });

  const openGallery = (collection) => {
    if (collection.hasGallery) {
      setActiveGallery({
        title: `${collection.season} - ${collection.title}`,
        images: collection.galleryImages
      });
      setGalleryOpen(true);
    }
  };

  return (
    <Section id="collections">
      <FloralCorner className="top-left">&#10047;</FloralCorner>
      <FloralCorner className="bottom-right">&#10047;</FloralCorner>

      <SectionHeader>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Portfolio
        </SectionSubtitle>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My Work
        </SectionTitle>
      </SectionHeader>

      <CollectionGrid>
        {collections.map((collection, index) => (
          <CollectionCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => openGallery(collection)}
          >
            {collection.isVideo ? (
              <CardVideo src={collection.bg} muted loop autoPlay playsInline />
            ) : (
              <CardImage bg={collection.bg} />
            )}
            <CardOverlay />
            <CardFloral dangerouslySetInnerHTML={{ __html: collection.flower }} />
            <CardContent>
              <CardSeason>{collection.season}</CardSeason>
              <CardTitle>{collection.title}</CardTitle>
              <CardDescription>{collection.description}</CardDescription>
              {collection.hasGallery && (
                <ViewButton>View Collection &#8594;</ViewButton>
              )}
            </CardContent>
          </CollectionCard>
        ))}
      </CollectionGrid>

      <Gallery
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        title={activeGallery.title}
        images={activeGallery.images}
      />
    </Section>
  );
}

export default Collections;
