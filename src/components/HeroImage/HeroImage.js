import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const HeroImage = props => {
  const { node, isHero } = props;
  const { image } = node;

  const StyledImage = styled.div`
    ${tw`mb-4 h-screen sm:h-auto`};
    ${isHero && tw`-mt-32 `}
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
  isHero: PropTypes.bool,
};

HeroImage.defaultProps = {
  isHero: false,
};

// ============================================================================

export default HeroImage;
