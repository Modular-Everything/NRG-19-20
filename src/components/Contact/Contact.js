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

// ============================================================================

Contact.propTypes = {
  blok: PropTypes.shape({
    content: PropTypes.array.isRequired,
  }).isRequired,
};
