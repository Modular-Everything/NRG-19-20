import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Caption = ({ is: caption }) => {
  return <StyledCaption>{caption}</StyledCaption>;
};

// ============================================================================

const StyledCaption = styled.p`
  ${tw`
    mt-2
    mb-8
    text-sm
  `}
  color: var(--color-white-secondary);
`;

// ============================================================================

Caption.propTypes = {
  is: PropTypes.string.isRequired,
};

// ============================================================================

export default Caption;
