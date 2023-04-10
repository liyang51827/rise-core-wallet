import React, { useState } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Button = styled.div`
  position: fixed;
  padding: 12px 20px;
  background-color: #291d33;
  right: 80px;
  bottom: 80px;
  font-size: 24px;
  z-index: 1111;
  cursor: pointer;
  color: #f9a222;
  @media screen and (max-width: 992px) {
    bottom: 60px;
    right: 40px;
  }
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button
      style={{ display: visible ? 'inline' : 'none' }}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
  );
};

export default ScrollButton;
