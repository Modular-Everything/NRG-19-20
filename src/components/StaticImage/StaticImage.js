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
    grid-column: span ${width};
    height: fit-content;
    & img {
      ${tw`rounded`};
    }
  `;

  return (
    <SbEditable content={blok}>
      <StyledImage>
        <img src={image} alt="" />
        {/* <Img css={tw`rounded block h-24`} fluid={fluidProps} /> */}
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
