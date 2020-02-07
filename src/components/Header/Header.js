import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

import Container from '../Container';

// ============================================================================

const Contact = () => <Container>Contact is open</Container>;

// ============================================================================

const Navigation = () => <Container>Navigation is open</Container>;

// ============================================================================

const Header = ({ siteName }) => {
  const [nav, toggleNav] = useState(false);
  const [contact, toggleContact] = useState(false);

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
    <StyledHeader>
      <Container display="flex">
        <button type="submit" onClick={() => toggleContact(!contact)}>
          {contact ? 'Close' : 'Contact'}
        </button>
        {contact && <Contact />}
        <img src={logo[0]} alt={siteName} />
        {nav && <Navigation />}
        <button type="submit" onClick={() => toggleNav(!nav)}>
          {nav ? 'Close' : 'Menu'}
        </button>
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
`;

// ============================================================================

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
};

// ============================================================================

export default Header;
