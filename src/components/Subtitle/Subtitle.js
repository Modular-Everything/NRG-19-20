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
    text-xs
    sm:text-sm
    uppercase
    tracking-wider
  `}
  color: var(--color-white-tertiary);
  font-family: 'Grotesque MT Std', -apple-system, 'Helvetica Neue', sans-serif;
`;

// ============================================================================

Subtitle.propTypes = {
  is: PropTypes.string.isRequired,
};

// ============================================================================

export default Subtitle;
