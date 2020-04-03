import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
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
    ${props => props.isInverted && 'background: var(--color-white-primary)'}
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
    ${props => props.isInverted && 'background: var(--color-white-primary)'}
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
const ContactButton = props => {
  const { isOpen, isInverted } = props;
  return (
    <Plus isOpen={isOpen} isInverted={isInverted}>
      <Line />
      <Line />
    </Plus>
  );
};

const Navigation = () => (
  <>
    <div>
      <img src={Bolt} alt="" />
    </div>
  </>
);
const NavigationButton = props => {
  const { isOpen, isInverted } = props;
  return (
    <Burger isOpen={isOpen} isInverted={isInverted}>
      <Line />
      <Line />
    </Burger>
  );
};

// ============================================================================

const Header = props => {
  const { hasHero, isInverted, hasFade } = props;
  const [nav, toggleNav] = useState(false);
  const [contact, toggleContact] = useState(false);
  const isOpen = !!(nav || contact);

  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
      allFile(filter: { name: { regex: "/logo/" }, ext: { eq: ".svg" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);
  const SiteTitle = data.site.siteMetadata.title;
  const logo = data.allFile.edges.map(img => img.node.publicURL);

  return (
    <>
      <Helmet>
        <title>{SiteTitle}</title>
      </Helmet>

      <StyledHeader color={isOpen ? 1 : 0} hasHero={hasHero} fade={hasFade}>
        <Container display="flex">
          {!nav && (
            <div>
              <button type="submit" onClick={() => toggleContact(!contact)}>
                <ContactButton isOpen={contact} isInverted={isInverted} />
              </button>
            </div>
          )}

          {contact && <Contact />}

          {!contact && !nav ? (
            <div>
              <Link to="/">
                <img src={logo[isInverted ? 1 : 0]} alt={SiteTitle} />
              </Link>
            </div>
          ) : (
            ''
          )}

          {nav && <Navigation />}

          {!contact && (
            <div>
              <button type="submit" onClick={() => toggleNav(!nav)}>
                <NavigationButton isOpen={nav} isInverted={isInverted} />
              </button>
            </div>
          )}
        </Container>
      </StyledHeader>
    </>
  );
};

// ============================================================================

const StyledHeader = styled.header`
  ${tw`
    flex
    flex-col
    justify-center
    relative
    w-full
    z-50
    h-24
    md:h-32
  `}
  ${({ fade }) =>
    fade &&
    `
      background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0));
    `}
  ${({ hasHero }) =>
    hasHero
      ? ''
      : 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); margin-bottom: 1rem;'}
  ${({ color }) =>
    color
      ? 'background-color: var(--color-black-primary); color: var(--color-white-primary)'
      : 'background-color: transparent'}
`;

// ============================================================================

Header.propTypes = {
  hasHero: PropTypes.bool,
  isInverted: PropTypes.bool,
  hasFade: PropTypes.bool,
};

Header.defaultProps = {
  hasHero: false,
  isInverted: false,
  hasFade: false,
};

ContactButton.propTypes = {
  isOpen: PropTypes.bool,
  isInverted: PropTypes.bool,
};

ContactButton.defaultProps = {
  isOpen: false,
  isInverted: false,
};

NavigationButton.propTypes = {
  isOpen: PropTypes.bool,
  isInverted: PropTypes.bool,
};

NavigationButton.defaultProps = {
  isOpen: false,
  isInverted: false,
};

// ============================================================================

export default Header;
