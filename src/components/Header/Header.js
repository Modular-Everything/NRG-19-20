/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Fade from 'react-reveal/Fade';

import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import Container from '../Container';
import Plus from '../Plus';
import Burger from '../Burger';
import LogoLight from '../../../static/images/logo-light.svg';
import LogoDark from '../../../static/images/logo-dark.svg';
import { comment } from 'postcss';

// ============================================================================

const Header = props => {
  const { hasHero, isInverted, hasFade, name, noGutter, description, schema } = props;

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
        <html lang="en" />
        <title>{name || SiteTitle}</title>
        {description && <meta name="Description" content={description} />}

        {schema && <script style="display: none;" type="application/ld+json">
        {
          "@context": "https://schema.org/", 
          "@type": "Service", 
          "name": "{schema}",
        }
        
        </script>}
      </Helmet>

      <HeaderBG
        dark={mode.contactOpen || mode.menuOpen}
        hasHero={hasHero}
        hasFade={hasFade}
        isInverted={isInverted}
        noGutter={noGutter}
      >
        <Container display="flex">
          <div className="plus">
            {!mode.menuOpen && (
              <button
                aria-label="Open Contact Menu"
                type="button"
                onClick={() => setMode({ contactOpen: !mode.contactOpen })}
                css={css`
                  display: flex;
                  justify-content: center;
                  height: 24px;
                  width: 24px;
                  ${mode.menuOpen && `opacity: 0`}

                  @media (max-width: 639px) {
                    margin-top: 0.5rem;
                  }
                `}
              >
                {!mode.contactOpen ? (
                  <Plus active={false} inverted={!hasHero} />
                ) : (
                  <Plus active inverted={false} />
                )}
              </button>
            )}
          </div>

          {!mode.contactOpen && !mode.menuOpen && (
            <LogoContainer>
              <Fade ssrFadeout>
                <Link to="/">
                  <img
                    src={isInverted ? LogoLight : LogoDark}
                    alt={SiteTitle}
                  />
                </Link>
              </Fade>
            </LogoContainer>
          )}

          {mode.contactOpen && !mode.menuOpen && (
            <Contact>
              <ul>
                <Fade cascade ssrFadeout>
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
                </Fade>
              </ul>
            </Contact>
          )}

          {!mode.contactOpen && mode.menuOpen && (
            <Navigation>
              <ul>
                <Fade cascade ssrFadeout>
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
                </Fade>
              </ul>
            </Navigation>
          )}

          <div className="burger">
            {!mode.contactOpen && (
              <button
                aria-label="Open Navigation Menu"
                type="button"
                onClick={() => setMode({ menuOpen: !mode.menuOpen })}
                css={css`
                  display: flex;
                  justify-content: center;
                  height: 24px;
                  width: 32px;
                  ${mode.contactOpen && `opacity: 0`}

                  @media (max-width: 639px) {
                    margin-top: 0.5rem;
                  }
                `}
              >
                {!mode.menuOpen ? (
                  <Burger active={false} inverted={!hasHero} />
                ) : (
                  <Burger active inverted={false} />
                )}
              </button>
            )}
          </div>
        </Container>
      </HeaderBG>
    </>
  );
};

export default Header;

// ============================================================================

const HeaderBG = styled.header`
  ${tw`
    relative h-auto flex z-50 font-sans w-full py-8
    sm:content-center sm:h-32
  `}

  ${props => !props.hasHero && `box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);`}

  ${props => !props.noGutter && `margin-bottom: 1rem;`}

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

  & .plus, & .burger {
    ${tw`
      mt-0
      sm:mt-4
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
      flex flex-col text-3xl mt-0
      sm:flex-row sm:text-2xl sm:mt-3
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
      flex flex-col text-2xl -mt-3
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
  description: PropTypes.string,
};

Header.defaultProps = {
  hasHero: false,
  isInverted: false,
  hasFade: false,
  noGutter: false,
  description: 'Creators, makers and builders.',
};
