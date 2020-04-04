import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const CardImage = props => {
  const { is: image, altRatio } = props;

  const ImageWrap = styled.div`
    ${tw`relative`}
    ${altRatio
      ? `padding-top: calc(632 / 1346 * 100%);`
      : `padding-top: calc(897 / 1346 * 100%);`}
  `;

  const StyledImage = styled.img`
    ${tw`absolute object-cover rounded-lg w-full h-full top-0`};
  `;

  return (
    <ImageWrap>
      <StyledImage src={image} alt="" />
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
