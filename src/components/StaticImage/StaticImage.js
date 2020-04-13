import React from 'react';
import PropTypes from 'prop-types';

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
            <img css={tw`w-full`} src={image} alt="" />
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
    caption: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }).isRequired,
};

// ============================================================================

export default StaticImage;
