import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-storyblok-image';
import Fade from 'react-reveal/Fade';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import SbEditable from 'storyblok-react';

// ============================================================================

const HeroImage = props => {
  const { node, isHero, firstBlok } = props;
  const { image } = node;
  if (!image) return false;

  const imageNoHttp = image.replace(/(^\w+:|^)/, '');
  const fluidProps = getFluidGatsbyImage(imageNoHttp, { maxWidth: 1920 });

  const isFirstBlok = firstBlok === node.component;

  const StyledImage = styled.div`
    ${tw`h-screen sm:h-auto`};
    ${isHero && isFirstBlok && tw`-mt-40`}

    & .gatsby-image-wrapper div {
      ${tw`w-full h-screen object-cover`}
    }
  `;

  return (
    <StyledImage>
      <SbEditable content={node}>
        <Fade ssrFadeout>
          <Img fluid={fluidProps} alt="Connect to Blok" />
        </Fade>
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
