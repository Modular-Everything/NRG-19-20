import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
// import Img from 'gatsby-image';
import SbEditable from 'storyblok-react';

import Caption from '../Caption';

// ============================================================================

const StaticImage = props => {
  const { blok } = props;
  const { image, caption, width } = blok;

  const StyledImage = styled.li`
    grid-column: span 12;
    height: fit-content;

    @media (min-width: 640px) {
      grid-column: span ${width};
    }

    & img {
      ${tw`rounded-lg`};
    }
  `;

  return (
    <SbEditable content={blok}>
      <StyledImage>
        <img css={tw`w-full`} src={image} alt="" />
        {caption && <Caption is={caption} />}
      </StyledImage>
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
