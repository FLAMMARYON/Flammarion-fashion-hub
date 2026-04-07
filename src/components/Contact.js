import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 120px 60px;
  background: #FFFDF4;

  @media (max-width: 768px) {
    padding: 80px 30px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Subtitle = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #D4AF37;
  margin-bottom: 15px;
`;

const Title = styled(motion.h2)`
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

const FormContainer = styled(motion.div)`
  background: #F5F0EB;
  padding: 60px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 1px solid #D4AF37;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  &.full-width {
    grid-column: span 2;

    @media (max-width: 768px) {
      grid-column: span 1;
    }
  }
`;

const Label = styled.label`
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #666;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  color: #1a1a1a;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: #800020;
  }

  &::placeholder {
    color: #999;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  color: #1a1a1a;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: #800020;
  }

  &::placeholder {
    color: #999;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 15px 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: #800020;
  }
`;

const SubmitButton = styled(motion.button)`
  grid-column: span 2;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #FFFDF4;
  background: #800020;
  padding: 20px 50px;
  border: 1px solid #800020;
  cursor: pointer;
  transition: all 0.4s ease;
  margin-top: 20px;
  justify-self: start;

  &:hover {
    background: transparent;
    color: #800020;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
    width: 100%;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-align: center;
  }
`;

const InfoItem = styled.div``;

const InfoLabel = styled.span`
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #D4AF37;
  margin-bottom: 8px;
`;

const InfoValue = styled.span`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  color: #666;
`;

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const interest = formData.get('interest');
    const message = formData.get('message');

    const subject = `Styling Inquiry: ${interest}`;
    const body = `Hi Flammarion,

${message}

---
From: ${firstName} ${lastName}
Email: ${email}
Interest: ${interest}`;

    window.location.href = `mailto:eritlux9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contact">
      <Container>
        <SectionHeader>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </Subtitle>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact Us
          </Title>
        </SectionHeader>

        <FormContainer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>First Name</Label>
              <Input type="text" name="firstName" placeholder="Your first name" required />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input type="text" name="lastName" placeholder="Your last name" required />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" name="email" placeholder="your@email.com" required />
            </FormGroup>
            <FormGroup>
              <Label>Interest</Label>
              <Select name="interest" required>
                <option value="">Select your interest</option>
                <option value="Editorial Styling">Editorial Styling</option>
                <option value="Lookbook Styling">Lookbook Styling</option>
                <option value="Personal Styling">Personal Styling</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </Select>
            </FormGroup>
            <FormGroup className="full-width">
              <Label>Message</Label>
              <TextArea name="message" placeholder="Tell us about your inquiry..." required />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </SubmitButton>
          </Form>
        </FormContainer>

        <ContactInfo
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <InfoItem>
            <InfoLabel>Email</InfoLabel>
            <InfoValue><a href="mailto:eritlux9@gmail.com" style={{color: '#666', textDecoration: 'none'}}>eritlux9@gmail.com</a></InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Pinterest</InfoLabel>
            <InfoValue><a href="https://pin.it/7lj7I2ux8" target="_blank" rel="noopener noreferrer" style={{color: '#666', textDecoration: 'none'}}>@flammarion</a></InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Location</InfoLabel>
            <InfoValue>Kigali</InfoValue>
          </InfoItem>
        </ContactInfo>
      </Container>
    </Section>
  );
}

export default Contact;
