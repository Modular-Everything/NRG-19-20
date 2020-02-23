import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import Container from '../Container';
import Caption from '../Caption';

// ============================================================================

const Image = props => {
  const { blok, isHero, isStatic, caption } = props;

  const StyledImage = styled.li`
    grid-column: span ${blok.width};
  `;

  return (
    <StyledImage>
      <img src={blok.image} alt="" />
      {/* <Img css={tw`rounded block h-24`} fluid={fluidProps} /> */}
      {/* {caption && <Caption is={caption} />} */}
    </StyledImage>
  );
};

// ============================================================================

export default Image;
