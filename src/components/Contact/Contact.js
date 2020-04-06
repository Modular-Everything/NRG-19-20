import React from 'react';
import PropTypes from 'prop-types';
import { StaticGoogleMap, Marker } from 'react-static-google-map';

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

const Contact = () => {
  return (
    <Layout>
      <Header name="Contact" noGutter />
      <Map>
        <a
          href="https://goo.gl/maps/nodGFLUruHzDCsKV7"
          target="_blank"
          rel="noopener noreferrer"
        >
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
          <StaticGoogleMap
            size="640x280"
            className="img-fluid"
            apiKey="AIzaSyCWJEXadbLXqPLYd7eXVhXkfoKFmwzu4bs"
            zoom="13"
            scale="4"
            center="33.99771,-118.4222736"
          >
            <Marker location="33.99771,-118.4222736" scale="4" />
          </StaticGoogleMap>
        </a>
      </Map>

      <Container>
        <Cards>
          <Card>
            <Subtitle is="Visit Us" />
            <Title is="Stop by for a coffee" />
            <Address>
              NRG Marketing
              <br />
              11912 W. Washington Blvd
              <br />
              Los Angeles, CA 90066
            </Address>
          </Card>

          <Card>
            <Subtitle is="Call Us" />
            <Title red is="(310) 255-7995" />
          </Card>

          <Card>
            <p>SOCIAL_MEDIA_ICONS</p>
          </Card>

          <Card>
            <Subtitle is="Email Us" />
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
    ${tw`flex items-center text-white absolute bottom-0 mb-8 text-sm`}

    & img {
      ${tw`w-3 ml-2`}
    }
  }
`;

const Cards = styled.section`
  ${tw`mb-12`}
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 4rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

const Card = styled.div`
  ${tw`
      bg-white rounded-lg px-6 py-12
    `}
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.1);

  & h3 {
    ${tw`mb-4`}
  }

  &:nth-of-type(1) {
    grid-column: span 6;
    grid-row: span 3;
  }
  &:nth-of-type(2) {
    grid-column: span 6;
    grid-row: span 2;
  }
  &:nth-of-type(3) {
    ${tw`p-6`}
    grid-column: span 6;
    grid-row: span 1;
  }
  &:nth-of-type(4) {
    grid-column: span 12;
    grid-row: span 4;
    margin-top: 2rem;

    ${tw`
    mx-auto absolute w-full
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
      flex flex-col md:flex-row md:text-2xl lg:text-3xl xl:text-4xl justify-between flex-wrap
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
  }
`;

const Address = styled.address`
  ${tw`
    not-italic text-sm pt-3
  `}
`;

// ============================================================================

Contact.propTypes = {
  blok: PropTypes.shape({
    content: PropTypes.array.isRequired,
  }).isRequired,
};
