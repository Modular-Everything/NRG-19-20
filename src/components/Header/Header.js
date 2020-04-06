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

          {!mode.contactOpen && !mode.menuOpen && (
            <div>
              <img src={isInverted ? LogoLight : LogoDark} alt={SiteTitle} />
            </div>
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
                    <a href="mailto:solutions@madewithnrg.com">
                      solutions
                      <span>@madewithnrg.com</span>
                    </a>
                  </div>
                </li>
                <li>
                  <small>Everything else</small>
                  <div>
                    <a href="mailto:solutions@madewithnrg.com">
                      solutions
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
        </Container>
      </HeaderBG>
    </>
  );
};

export default Header;

// ============================================================================

const HeaderBG = styled.header`
  transition: 250ms ease all;

  ${tw`
    relative h-32 flex content-center z-50 font-sans
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
  `}
`;

const Navigation = styled.div`
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;

  ${tw`
    flex justify-end w-full mr-12
  `}

  & a {
    &:hover {
      color: var(--color-brand);
    }
  }

  & ul {
    ${tw`
      flex flex-row text-2xl
    `}

    & li {
      ${tw`mr-8`}

      &:last-of-type {
        ${tw`mr-0`}
      }
    }
  }
`;

const Contact = styled.div`
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;

  & small {
    ${tw`text-xs`}
  }

  & a {
    ${tw`leading-none`}
    color: var(--color-brand);

    & span {
      ${tw`block`}
    }
  }

  & ul {
    ${tw`
      flex flex-row text-2xl -mt-2
    `}

    & li {
      ${tw`mr-12 leading-tight`}

      &:last-of-type {
        ${tw`mr-0`}
      }
    }
  }
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
