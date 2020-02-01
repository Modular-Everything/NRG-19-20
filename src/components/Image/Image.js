import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
// import Img from 'gatsby-image';

// ============================================================================

const Image = props => {
  const { src: image } = props;
  return <img src={image} alt="Sample" />;
};

// ============================================================================

const StyledImage = styled.h3`
  ${tw`
    uppercase
  `}
`;

// ============================================================================

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

// ============================================================================

export default Image;
