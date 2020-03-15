import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const CardImage = props => {
  const { is: image } = props;

  const StyledImage = styled.img`
    ${tw`rounded-t rounded-b-lg w-full`};
  `;

  return (
    <>
      <StyledImage src={image} alt="" />
    </>
  );
};

// ============================================================================

CardImage.propTypes = {
  is: PropTypes.string.isRequired,
};

// ============================================================================

export default CardImage;
