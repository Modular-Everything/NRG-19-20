import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const CardImage = props => {
  const { is: image } = props;

  const ImageWrap = styled.div`
    ${tw`relative`}
    padding-top: 66.666667%;
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
};

// ============================================================================

export default CardImage;
