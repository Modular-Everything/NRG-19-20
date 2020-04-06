/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import Container from '../Container';
import Plus from '../Plus';
import Burger from '../Burger';
import LogoLight from '../../../static/images/logo-light.svg';
import LogoDark from '../../../static/images/logo-dark.svg';

// ============================================================================

const Header = props => {
  const { hasHero, isInverted, hasFade, name, noGutter } = props;

  const data = useStaticQuery(graphql`
    query MetaData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const SiteTitle = data.site.siteMetadata.title;

  const [mode, setMode] = useState({
    contactOpen: false,
    menuOpen: false,
  });

  return (
    <>
      <Helmet>
        <title>
          {SiteTitle}
          {name !== `Home` ? ` — ${name}` : ``}
        </title>
      </Helmet>

      <HeaderBG
        dark={mode.contactOpen || mode.menuOpen}
        hasHero={hasHero}
        hasFade={hasFade}
        isInverted={isInverted}
        noGutter={noGutter}
      >
        <Container display="flex">
          {!mode.menuOpen && (
            <div>
              <button
                type="button"
                onClick={() => setMode({ contactOpen: !mode.contactOpen })}
                css={css`
                  display: flex;
                  justify-content: center;
                  height: 24px;
                  width: 24px;
                  ${mode.menuOpen && `opacity: 0`}
                `}
              >
                {!mode.contactOpen ? <Plus active={false} /> : <Plus active />}
              </button>
            </div>
          )}

          {!mode.contactOpen && !mode.menuOpen && (
            <LogoContainer>
              <img src={isInverted ? LogoLight : LogoDark} alt={SiteTitle} />
            </LogoContainer>
          )}

          {mode.contactOpen && !mode.menuOpen && (
            <Contact>
              <ul>
                <li>
                  <small>Work with you</small>
                  <div>
                    <a href="mailto:solutions@madewithnrg.com">
                      solutions
                      <span>@madewithnrg.com</span>
                    </a>
                  </div>
                </li>
                <li>
                  <small>Work with us</small>
                  <div>
                    <a href="mailto:talent@madewithnrg.com">
                      talent
                      <span>@madewithnrg.com</span>
                    </a>
                  </div>
                </li>
                <li>
                  <small>Everything else</small>
                  <div>
                    <a href="mailto:questions@madewithnrg.com">
                      questions
                      <span>@madewithnrg.com</span>
                    </a>
                  </div>
                </li>
              </ul>
            </Contact>
          )}

          {!mode.contactOpen && mode.menuOpen && (
            <Navigation>
              <ul>
                <li>
                  <Link
                    to="/about"
                    activeStyle={{ color: 'red' }}
                    partiallyActive
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    activeStyle={{ color: 'red' }}
                    partiallyActive
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/work"
                    activeStyle={{ color: 'red' }}
                    partiallyActive
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    activeStyle={{ color: 'red' }}
                    partiallyActive
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Navigation>
          )}

          {!mode.contactOpen && (
            <div>
              <button
                type="button"
                onClick={() => setMode({ menuOpen: !mode.menuOpen })}
                css={css`
                  display: flex;
                  justify-content: center;
                  height: 24px;
                  width: 32px;
                  ${mode.contactOpen && `opacity: 0`}
                `}
              >
                {!mode.menuOpen ? <Burger active={false} /> : <Burger active />}
              </button>
            </div>
          )}
        </Container>
      </HeaderBG>
    </>
  );
};

export default Header;

// ============================================================================

const HeaderBG = styled.header`
  ${tw`
    relative h-32 flex z-50 font-sans w-full
    sm:content-center
  `}

  ${props =>
    !props.hasHero &&
    `box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06); ${!props.noGutter &&
      `margin-bottom: 1rem`};'}`}

  ${props => props.isInverted && `color: var(--color-white-primary);`}
  
  ${props =>
    props.hasFade &&
    `background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0));`}

  ${props =>
    props.dark &&
    `
      background-color: var(--color-black-primary);
      color: var(--color-white-primary);

      @media (max-width: 639px) {
        width: 100%;
        top: 0;
        bottom: 0;
        height: 100vh;
        position: fixed;
      }
  `}

  & div > div {
    ${tw`
      self-start mt-8
      sm:mt-0 sm:self-center
    `}
  }
`;

const Navigation = styled.div`
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;

  ${tw`
    flex w-full
    sm:justify-end sm:mr-12
  `}

  & a {
    &:hover {
      color: var(--color-brand);
    }
  }

  & ul {
    ${tw`
      flex flex-col text-3xl
      sm:flex-row sm:text-2xl
    `}

    & li {
      ${tw`mr-8 mb-4 sm:mb-0`}

      &:last-of-type {
        ${tw`mr-0`}
      }
    }
  }
`;

const Contact = styled.div`
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;

  ${tw`
    ml-24 left-0 absolute
    sm:relative sm:ml-0
  `}

  & small {
    ${tw`text-xs`}
  }

  & a {
    ${tw`leading-none`}
    color: var(--color-brand);

    &:hover {
      color: var(--color-white);
    }

    & span {
      ${tw`block`}
    }
  }

  & ul {
    ${tw`
      flex flex-col text-2xl -mt-2
      sm:flex-row
    `}

    & li {
      ${tw`
        leading-tight mb-4
        sm:mb-0 sm:mr-12
      `}

      &:last-of-type {
        ${tw`sm:mr-0`}
      }
    }
  }
`;

const LogoContainer = styled.div`
  ${tw`
    w-24
    sm:w-auto
  `}
`;

// ============================================================================

Header.propTypes = {
  hasHero: PropTypes.bool,
  isInverted: PropTypes.bool,
  hasFade: PropTypes.bool,
  name: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

Header.defaultProps = {
  hasHero: false,
  isInverted: false,
  hasFade: false,
  noGutter: false,
};
