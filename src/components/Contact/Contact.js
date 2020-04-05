import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import Header from '../Header';
import Footer from '../Footer';
import MapImg from '../../../static/images/map.png';

// ============================================================================

const Contact = () => {
  return (
    <Layout>
      <Header
        name="Contact"
        hasHero={false}
        isInverted={false}
        hasFade={false}
        noGutter
      />
      <img src={MapImg} alt="" />
      <Footer />
    </Layout>
  );
};

// ============================================================================

Contact.propTypes = {
  blok: PropTypes.shape({
    content: PropTypes.array.isRequired,
  }).isRequired,
};

// ============================================================================

export default Contact;
