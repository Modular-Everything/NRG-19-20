import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const HeroImage = props => {
  const { node } = props;
  const { image } = node;

  const StyledImage = styled.div`
    ${tw`-mt-32 mb-4 h-screen sm:h-auto`};
  `;

  return (
    <StyledImage>
      <img src={image} alt="" />
    </StyledImage>
  );
};

// ============================================================================

HeroImage.propTypes = {
  node: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

// ============================================================================

export default HeroImage;
