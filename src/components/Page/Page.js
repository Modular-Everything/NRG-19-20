import React from 'react';
import PropTypes from 'prop-types';

import StoryblokComponents from '../StoryblokComponents';
import Layout from '../Layout';
import Header from '../Header';
import Footer from '../Footer';

// ============================================================================

const Page = props => {
  const { name, blok } = props;

  return (
    <Layout>
      <Header
        name={blok.meta.title ? blok.meta.title : name}
        description={blok.meta.description && blok.meta.description}
        hasHero={blok.isHero}
        isInverted={blok.isInverted}
        hasFade={blok.hasFade}
      />
      {blok.content &&
        blok.content.map(node =>
          React.createElement(StoryblokComponents(node.component), {
            // eslint-disable-next-line no-underscore-dangle
            key: node._uid,
            node,
            isHero: blok.isHero,
            firstBlok: blok.content[0].component,
          })
        )}
      <Footer />
    </Layout>
  );
};

// ============================================================================

Page.propTypes = {
  name: PropTypes.string.isRequired,
  blok: PropTypes.shape({
    content: PropTypes.array.isRequired,
    isHero: PropTypes.bool.isRequired,
    isInverted: PropTypes.bool.isRequired,
    hasFade: PropTypes.bool.isRequired,
    meta: PropTypes.objectOf({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  }).isRequired,
};

// ============================================================================

export default Page;
