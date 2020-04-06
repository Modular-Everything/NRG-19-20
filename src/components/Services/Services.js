import React from 'react';
import PropTypes from 'prop-types';

import StoryblokComponents from '../StoryblokComponents';
import Layout from '../Layout';
import Header from '../Header';
import Footer from '../Footer';

// ============================================================================

const Services = props => {
  const { blok } = props;

  return (
    <Layout>
      <Header name="Services" noGutter />
      {blok.content &&
        blok.content.map(node =>
          React.createElement(StoryblokComponents(node.component), {
            // eslint-disable-next-line no-underscore-dangle
            key: node._uid,
            node,
          })
        )}
      <Footer />
    </Layout>
  );
};

// ============================================================================

Services.propTypes = {
  blok: PropTypes.shape({
    content: PropTypes.array.isRequired,
  }).isRequired,
};

// ============================================================================

export default Services;
