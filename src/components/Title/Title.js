import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const StyledTitle = styled.h2`
  ${tw`
    text-3xl
    font-medium
    leading-tight
    mb-4
  `};
  color: var(--color-black-primary);
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
`;

// ============================================================================

const Title = props => {
  const { is: title } = props;
  return <StyledTitle>{title}</StyledTitle>;
};

// ============================================================================

Title.propTypes = {
  is: PropTypes.string.isRequired,
};

// ============================================================================

export default Title;
