import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-storyblok-image';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const CardImage = props => {
  const { is: image, altRatio } = props;
  if (!image) return false;

  const fluidProps = getFluidGatsbyImage(image, { maxWidth: 900 });

  const ImageWrap = styled.div`
    & .gatsby-image-wrapper div {
      ${altRatio
        ? `padding-bottom: calc(632 / 1346 * 100%) !important;`
        : `padding-bottom: calc(897 / 1346 * 100%) !important;`}
    }
  `;

  const StyledImage = styled.div`
    & img {
      ${tw`rounded-lg w-full h-full top-0`};
    }
  `;

  return (
    <ImageWrap>
      <StyledImage>
        <Img fluid={fluidProps} />
      </StyledImage>
    </ImageWrap>
  );
};

// ============================================================================

CardImage.propTypes = {
  is: PropTypes.string.isRequired,
  altRatio: PropTypes.bool,
};

CardImage.defaultProps = {
  altRatio: false,
};

// ============================================================================

export default CardImage;
