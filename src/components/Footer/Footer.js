import React from 'react';
// import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

import Container from '../Container';
import Makers from '../../../static/images/makers.svg';

// ============================================================================

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Top>
          <div>
            <p>Like what you see?</p>
            <Contact href="mailto:info@madewithnrg.com">
              info@madewithnrg.com
            </Contact>
          </div>

          <div>
            <a href="/">
              <MakersImg
                src={Makers}
                alt="NRG &bull; Creators, Makers and Builders."
              />
            </a>
          </div>
        </Top>

        <Bottom>
          <Social>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Vimeo</li>
            <li>LinkedIn</li>
          </Social>
          <p>&copy; NRG 2020</p>
        </Bottom>
      </Container>
    </StyledFooter>
  );
};

// ============================================================================

const StyledFooter = styled.footer`
  ${tw`py-6 sm:py-12`}
  color: var(--color-white-primary);
  background-color: var(--color-black-primary);
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
`;

const Top = styled.div`
  ${tw`
    flex
    justify-between
    text-sm
  `}

  & p {
    ${tw`
      hidden sm:block
    `}
  }
`;

const Bottom = styled.div`
  ${tw`
    text-sm mt-8
    sm:flex sm:justify-between
  `}

  & p {
    ${tw`
      mt-24 sm:mt-0
    `}
  }
`;

const Contact = styled.a`
  ${tw`
    mt-4 block text-sm font-medium leading-tight
    sm:text-3xl
  `}

  &:hover {
    ${tw`underline`}
  }
`;

const AnimateRotation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const MakersImg = styled.img`
  ${tw`
    hidden sm:block
  `}
  animation: ${AnimateRotation} 30s linear infinite;
`;

const Social = styled.ul`
  ${tw`
    flex
    justify-start
    text-sm
    flex-wrap
  `}

  & li {
    ${tw`mr-4 py-1 sm:py-0`}

    &:last-of-type {
      ${tw`m-0`}
    }
  }
`;

// ============================================================================

// Footer.propTypes = {};

// ============================================================================

export default Footer;
