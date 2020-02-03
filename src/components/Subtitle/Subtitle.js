import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Subtitle = props => {
  const { is: subtitle } = props;
  return <StyledSubtitle>{subtitle}</StyledSubtitle>;
};

// ============================================================================

const StyledSubtitle = styled.h3`
  ${tw`
    uppercase
    text-sm
    tracking-wider
  `}
  font-family: 'Grotesque MT Std', -apple-system, 'Helvetica Neue', sans-serif;
`;

// ============================================================================

Subtitle.propTypes = {
  is: PropTypes.string.isRequired,
};

// ============================================================================

export default Subtitle;
