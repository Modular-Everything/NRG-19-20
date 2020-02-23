import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const TextBlock = props => {
  const { children } = props;
  const textCopy = children ? children[0].props.value : '';

  return <StyledText>{textCopy}</StyledText>;
};

// ============================================================================

const StyledText = styled.div`
  ${tw`
    text-sm
    mb-6
    font-medium
    leading-snug
  `}
  color: var(--color-black-primary);
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
`;

// ============================================================================

TextBlock.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
// ============================================================================

export default TextBlock;
