import React from 'react';
import PropTypes from 'prop-types';
import StoryblokComponents from '../StoryblokComponents';

import Layout from '../Layout';

// ============================================================================

const Page = props => {
  const { blok } = props;

  return (
    <Layout>
      {blok.content &&
        blok.content.map(node =>
          React.createElement(StoryblokComponents(node.component), {
            // eslint-disable-next-line no-underscore-dangle
            key: node._uid,
            node,
          })
        )}
    </Layout>
  );
};

// ============================================================================

Page.propTypes = {
  blok: PropTypes.shape({
    content: PropTypes.array.isRequired,
  }).isRequired,
};

// ============================================================================

export default Page;
