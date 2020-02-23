import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const TextBlock = props => {
  const { is: text, children } = props;
  const textCopy = children !== undefined ? children[0].props.value : text;

  return <StyledText>{textCopy}</StyledText>;
};

// ============================================================================

const StyledText = styled.p`
  ${tw`
    text-sm
    mb-6
    font-medium
    leading-snug
  `}
  color: var(--color-black-primary);
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;

  &:last-of-type {
    ${tw`mb-0`}
  }
`;

// ============================================================================

TextBlock.propTypes = {
  is: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
};

TextBlock.defaultProps = {
  is: 'Lorem ipsum...',
  children: undefined,
};

// ============================================================================

export default TextBlock;
