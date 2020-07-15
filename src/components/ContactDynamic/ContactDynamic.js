import React from 'react';
import PropTypes from 'prop-types';

import StoryblokComponents from '../StoryblokComponents';
import Layout from '../Layout';
import Header from '../Header';
import Footer from '../Footer';
import Video from '../Video';

// ============================================================================

const Contact = props => {
  const { blok } = props;

  console.log(blok);

  return (
    <Layout>
      <Header
        name={blok.meta ? blok.meta.title : `NRG — Contact`}
        description={blok.meta && blok.meta.description}
        isInverted
        noGutter
        hasHero
        hasFade
      />

      <Video textural isHero videoUrl={blok.video} />

      <section>
        {blok.content &&
          blok.content.map(node =>
            React.createElement(StoryblokComponents(node.component), {
              // eslint-disable-next-line no-underscore-dangle
              key: node._uid,
              node,
            })
          )}
      </section>

      <Footer />
    </Layout>
  );
};

export default Contact;

// ============================================================================

Contact.propTypes = {
  blok: PropTypes.shape({
    content: PropTypes.array.isRequired,
    video: PropTypes.string.isRequired,
    mapUrl: PropTypes.object,
    meta: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }),
};

Contact.defaultProps = {
  blok: {
    mapUrl: null,
  },
};
