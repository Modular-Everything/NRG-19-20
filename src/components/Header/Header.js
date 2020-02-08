import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

import Container from '../Container';
import Bolt from '../../../static/images/bolt.svg';

// ============================================================================

const Line = styled.span`
  ${tw`h-px w-full block absolute`}
  background-color: var(--color-black-primary);
`;

const Plus = styled.div`
  ${tw`relative`}
  width: 16px;
  height: 16px;
  ${props => props.isOpen && 'transform: rotate(225deg);'}

  & span {
    top: 8px;
    ${props => props.isOpen && 'background: var(--color-white-primary)'}
  }

  & span:first-of-type {
    transform: rotate(90deg);
  }
`;

const Burger = styled.div`
  ${tw`relative`}
  width: 32px;
  height: 32px;

  & span {
    top: 14px;
    ${props => props.isOpen && 'background: var(--color-white-primary)'}
    ${props => props.isOpen && 'background: var(--color-white-primary)'}
  }

  & span:last-of-type {
    top: 22px;
  }
`;

// ============================================================================

const Contact = () => (
  <>
    <div>
      <h3>Work with you</h3>
      <a href="mailto:solutions@madewithnrg.com">
        solutions
        <br />
        @madewithnrg.com
      </a>
    </div>
    <div>
      <h3>Work with us</h3>
      <a href="mailto:talent@madewithnrg.com">
        talent
        <br />
        @madewithnrg.com
      </a>
    </div>
    <div>
      <h3>Everything else</h3>
      <a href="mailto:questions@madewithnrg.com">
        questions
        <br />
        @madewithnrg.com
      </a>
    </div>
  </>
);
const ContactButton = ({ isOpen }) => (
  <Plus isOpen={isOpen}>
    <Line />
    <Line />
  </Plus>
);

const Navigation = () => (
  <>
    <div>
      <img src={Bolt} alt="" />
    </div>
  </>
);
const NavigationButton = ({ isOpen }) => (
  <Burger isOpen={isOpen}>
    <Line />
    <Line />
  </Burger>
);

// ============================================================================

const Header = ({ siteName }) => {
  const [nav, toggleNav] = useState(false);
  const [contact, toggleContact] = useState(false);
  const isOpen = !!(nav || contact);

  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { name: { regex: "/logo/" }, ext: { eq: ".svg" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);
  const logo = data.allFile.edges.map(img => img.node.publicURL);

  return (
    <StyledHeader color={isOpen}>
      <Container display="flex">
        {!nav && (
          <div>
            <button type="submit" onClick={() => toggleContact(!contact)}>
              <ContactButton isOpen={contact} />
            </button>
          </div>
        )}

        {contact && <Contact />}

        {!contact && !nav ? (
          <div>
            <img src={logo[0]} alt={siteName} />
          </div>
        ) : (
          ''
        )}

        {nav && <Navigation />}

        {!contact && (
          <div>
            <button type="submit" onClick={() => toggleNav(!nav)}>
              <NavigationButton isOpen={nav} />
            </button>
          </div>
        )}
      </Container>
    </StyledHeader>
  );
};

// ============================================================================

const StyledHeader = styled.header`
  ${tw`
    flex
    flex-col
    justify-center
    bg-white
    shadow-md
    w-full
    z-50
    h-24
    md:h-32
  `}
  transition: 350ms ease background-color;
  ${props =>
    props.color
      ? 'background-color: var(--color-black-primary); color: var(--color-white-primary)'
      : 'background-color: transparent'}
`;

// ============================================================================

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
};

ContactButton.propTypes = {
  isOpen: PropTypes.bool,
};

ContactButton.defaultProps = {
  isOpen: false,
};

NavigationButton.propTypes = {
  isOpen: PropTypes.bool,
};

NavigationButton.defaultProps = {
  isOpen: false,
};

// ============================================================================

export default Header;
