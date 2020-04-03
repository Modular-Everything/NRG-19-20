import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import SbEditable from 'storyblok-react';

// ============================================================================

const HeroImage = props => {
  const { node, isHero, firstBlok } = props;
  const { image } = node;

  const isFirstBlok = firstBlok === node.component;

  const StyledImage = styled.div`
    ${tw`mb-4 h-screen sm:h-auto`};
    ${isHero && isFirstBlok && tw`-mt-32`}

    img {
      ${tw`w-full`}
    }
  `;

  return (
    <StyledImage>
      <SbEditable content={node}>
        <img src={image} alt="" />
      </SbEditable>
    </StyledImage>
  );
};

// ============================================================================

HeroImage.propTypes = {
  firstBlok: PropTypes.string.isRequired,
  node: PropTypes.shape({
    image: PropTypes.string.isRequired,
    component: PropTypes.string.isRequired,
  }).isRequired,
  isHero: PropTypes.bool,
};

HeroImage.defaultProps = {
  isHero: false,
};

// ============================================================================

export default HeroImage;
