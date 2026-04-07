import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 25px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition: all 0.4s ease;
  background: ${props => props.$scrolled || props.$menuOpen ? 'rgba(255, 253, 244, 0.98)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled || props.$menuOpen ? 'blur(20px)' : 'none'};
  box-shadow: ${props => props.$scrolled ? '0 4px 30px rgba(128, 0, 32, 0.08)' : 'none'};

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

const LogoImg = styled.img`
  height: 55px;
  cursor: pointer;
  transition: opacity 0.4s ease, visibility 0.4s ease;
  opacity: ${props => props.$visible ? 1 : 0};
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};

  &:hover {
    opacity: ${props => props.$visible ? 0.8 : 0};
  }

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;
  letter-spacing: 3px;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 5px 0;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
    transition: width 0.4s ease;
  }

  &:hover {
    color: #800020;
  }

  &:hover:before {
    width: 100%;
  }
`;

const FloralAccent = styled.span`
  color: #D4AF37;
  font-size: 0.5rem;
  margin: 0 5px;
  opacity: 0.6;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIcon = styled.div`
  width: 28px;
  height: 1.5px;
  background: ${props => props.$isOpen ? 'transparent' : '#800020'};
  position: relative;
  transition: all 0.3s ease;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 28px;
    height: 1.5px;
    background: #800020;
    transition: all 0.3s ease;
  }

  &:before {
    top: ${props => props.$isOpen ? '0' : '-9px'};
    transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &:after {
    top: ${props => props.$isOpen ? '0' : '9px'};
    transform: ${props => props.$isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: #FFFDF4;
    padding: 40px 30px;
    gap: 25px;
    align-items: center;
    border-top: 1px solid rgba(212, 175, 55, 0.3);
    box-shadow: 0 10px 30px rgba(128, 0, 32, 0.15);
    z-index: 999;
  }
`;

const MobileNavLink = styled(motion.a)`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 10px 0;

  &:hover {
    color: #800020;
  }
`;

const MobileFloralDivider = styled.div`
  color: #D4AF37;
  font-size: 0.8rem;
  opacity: 0.5;
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <Nav
        $scrolled={scrolled}
        $menuOpen={menuOpen}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <LogoImg
          src="/logo.png"
          alt="Flammarion"
          $visible={scrolled}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMenuOpen(false);
          }}
        />
        <NavLinks>
          <NavLink onClick={() => scrollTo('collections')}>Portfolio</NavLink>
          <FloralAccent>&#10047;</FloralAccent>
          <NavLink onClick={() => scrollTo('lookbook')}>Lookbook</NavLink>
          <FloralAccent>&#10047;</FloralAccent>
          <NavLink onClick={() => scrollTo('about')}>About</NavLink>
          <FloralAccent>&#10047;</FloralAccent>
          <NavLink onClick={() => scrollTo('contact')}>Contact</NavLink>
        </NavLinks>
        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon $isOpen={menuOpen} />
        </MenuButton>
      </Nav>

      {menuOpen && (
        <MobileMenu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <MobileNavLink onClick={() => scrollTo('collections')}>Portfolio</MobileNavLink>
          <MobileFloralDivider>&#10047;</MobileFloralDivider>
          <MobileNavLink onClick={() => scrollTo('lookbook')}>Lookbook</MobileNavLink>
          <MobileFloralDivider>&#10047;</MobileFloralDivider>
          <MobileNavLink onClick={() => scrollTo('about')}>About</MobileNavLink>
          <MobileFloralDivider>&#10047;</MobileFloralDivider>
          <MobileNavLink onClick={() => scrollTo('contact')}>Contact</MobileNavLink>
        </MobileMenu>
      )}
    </>
  );
}

export default Navbar;
