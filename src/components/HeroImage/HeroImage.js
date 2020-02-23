import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const HeroImage = props => {
  const { is: image } = props;

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
  is: PropTypes.string.isRequired,
};

// ============================================================================

export default HeroImage;
