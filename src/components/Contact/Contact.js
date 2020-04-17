import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import Layout from '../Layout';
import Container from '../Container';
import Header from '../Header';
import Footer from '../Footer';
import Arrow from '../../../static/images/arrowWhite.svg';
import Subtitle from '../Subtitle';
import Title from '../Title';

// ============================================================================

const Contact = props => {
  const { blok } = props;
  const {
    map,
    mapMobile,
    number,
    address,
    mapLink,
    socialMedia,
    workWithUs,
    workWithYou,
    everythingElse,
  } = blok;

  return (
    <Layout>
      <Header name="Contact" noGutter />
      <Map>
        <a href={mapLink.cached_url} target="_blank" rel="noopener noreferrer">
          <Overlay>
            <Container>
              <p>
                Open in Maps
                <span>
                  <img src={Arrow} alt="->" />
                </span>
              </p>
            </Container>
          </Overlay>
          <picture>
            <source media="(max-width: 767px)" srcSet={mapMobile} />
            <source media="(min-width: 768px)" srcSet={map} />
            <img src={map} alt="NRG Map" />
          </picture>
        </a>
      </Map>

      <Container>
        <Cards className="gridded">
          <Card className="find">
            <Subtitle is="Visit Us" />
            <Title is="Stop by for a coffee" />
            <Address css={{ whiteSpace: 'pre-wrap' }}>{address}</Address>
          </Card>

          <Card className="call">
            <Subtitle is="Call Us" />
            <Title red is={number} />
          </Card>

          <Card className="social">
            <ul>
              {socialMedia.map(node => (
                <a
                  href={node.url.cached_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <img src={node.icon} alt="Social" />
                  </li>
                </a>
              ))}
            </ul>
          </Card>
        </Cards>

        <Cards>
          <Card className="email">
            <Subtitle is="Email Us" />
            <ul>
              <li>
                <small>Work with you</small>
                <div>
                  <a href={`mailto:${workWithYou}@madewithnrg.com`}>
                    {workWithYou}
                    <span>@madewithnrg.com</span>
                  </a>
                </div>
              </li>
              <li>
                <small>Work with us</small>
                <div>
                  <a href={`mailto:${workWithUs}@madewithnrg.com`}>
                    {workWithUs}
                    <span>@madewithnrg.com</span>
                  </a>
                </div>
              </li>
              <li>
                <small>Everything else</small>
                <div>
                  <a href={`mailto:${everythingElse}@madewithnrg.com`}>
                    {everythingElse}
                    <span>@madewithnrg.com</span>
                  </a>
                </div>
              </li>
            </ul>
          </Card>
        </Cards>
      </Container>

      <Footer />
    </Layout>
  );
};

export default Contact;

// ============================================================================

const Map = styled.div`
  ${tw`relative mb-12`}

  & img {
    width: 100%;
  }
`;

const Overlay = styled.div`
  ${tw`
    h-32 absolute w-full bottom-0
  `}

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8)
  );

  & p {
    font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
    ${tw`flex items-center text-white absolute bottom-0 mb-8 text-sm md:text-base`}

    & img {
      ${tw`w-3 ml-2`}
    }
  }
`;

const Cards = styled.section`
  ${tw`mb-8 md:mb-16`}
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;

  &.gridded {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    grid-row-gap: 2rem;

    @media (min-width: 640px) {
      grid-column-gap: 2rem;
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 768px) {
      grid-row-gap: 2rem;
      grid-column-gap: 4rem;
    }
  }
`;

const Card = styled.div`
  ${tw`
      bg-white rounded-lg p-6
    `}
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.1);

  & h2 {
    ${tw`mb-0`}
  }

  & h3 {
    ${tw`mb-4`}
  }

  &.find {
    grid-row: span 2;
  }

  &.call {
    grid-row: span 1;
  }

  &.social {
    grid-row: span 1;

    & ul {
      ${tw`
        flex flex-row justify-around
      `}
    }

    & li {
      ${tw`
        mr-8
      `}
      height: 24px;
      width: 24px;

      @media (min-width: 768px) {
        height: 28px;
        width: 28px;
      }

      &:last-of-type {
        ${tw`mr-0`}
      }

      & img {
        object-fit: cover;
        height: 100%;
      }
    }
  }

  &.email {
    ${tw`
    mx-auto w-full py-10
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
      flex flex-col justify-between flex-wrap text-2xl
      md:flex-row md:text-xl
      lg:text-3xl
      xl:text-4xl
    `}

      & li {
        ${tw`
        leading-tight mb-4
        sm:mr-8
        md:mr-2 md:mb-0
        lg:mr-12
      `}

        &:last-of-type {
          ${tw`sm:mr-0 mb-0`}
        }
      }
    }
  }
`;

const Address = styled.address`
  ${tw`
    not-italic text-sm pt-3 mt-4
    sm:mt-10
  `}
`;

// ============================================================================

Contact.propTypes = {
  blok: PropTypes.shape({
    map: PropTypes.string.isRequired,
    mapMobile: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    mapLink: PropTypes.objectOf({
      cached_url: PropTypes.string.isRequired,
    }).isRequired,
    socialMedia: PropTypes.arrayOf({
      icon: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
    workWithUs: PropTypes.string.isRequired,
    workWithYou: PropTypes.string.isRequired,
    everythingElse: PropTypes.string.isRequired,
  }).isRequired,
};
