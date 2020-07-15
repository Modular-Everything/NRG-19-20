import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-storyblok-image';
import Fade from 'react-reveal/Fade';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import SbEditable from 'storyblok-react';

import Caption from '../Caption';

// ============================================================================

const StaticImage = props => {
  const { blok } = props;
  const { image, caption, width } = blok;

  const StyledImage = styled.li`
    grid-column: span 12;
    height: fit-content;

    @media (min-width: 768px) {
      grid-column: span ${width};
    }

    & img,
    & video {
      ${tw`rounded-lg`};
    }
  `;

  const imageNoHttp = image.replace(/(^\w+:|^)/, '');
  const fluidProps = getFluidGatsbyImage(imageNoHttp, { maxWidth: 1080 });

  const ext = RegExp(/(.mp4)/);

  return (
    <SbEditable content={blok}>
      {ext.test(image) ? (
        <StyledImage>
          <Fade ssrFadeout>
            <video height="100%" width="100%" autoPlay loop muted playsInline>
              <source src={image} type="video/mp4" />
            </video>
            {caption && <Caption is={caption} />}
          </Fade>
        </StyledImage>
      ) : (
        <StyledImage>
          <Fade ssrFadeout>
            {blok.externalUrl ? (
              <a href={blok.externalUrl.cached_url}>
                <Img fluid={fluidProps} alt="Connect to Blok" />
              </a>
            ) : (
              <Img fluid={fluidProps} alt="Connect to Blok" />
            )}
            {caption && <Caption is={caption} />}
          </Fade>
        </StyledImage>
      )}
    </SbEditable>
  );
};

// ============================================================================

StaticImage.propTypes = {
  blok: PropTypes.shape({
    image: PropTypes.string.isRequired,
    externalUrl: PropTypes.objectOf({
      cached_url: PropTypes.string,
    }),
    caption: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }),
};

StaticImage.defaultProps = {
  blok: {
    externalUrl: null,
  },
};

// ============================================================================

export default StaticImage;
