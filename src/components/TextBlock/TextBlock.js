import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const TextBlock = props => {
  const { is: text, children } = props;

  if (typeof children === 'object') {
    if (children.length === 0) {
      return null;
    }
    return (
      <Fade ssrFadeout>
        <StyledText>{children[0].props.value}</StyledText>
      </Fade>
    );
  }

  return (
    <Fade ssrFadeout>
      <StyledText>{text}</StyledText>
    </Fade>
  );
};

// ============================================================================

const StyledText = styled.p`
  ${tw`
    mb-4 font-medium leading-normal
  `}
  color: var(--color-black-primary);
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
  font-size: 0.875em;

  @media (min-width: 1024px) {
    font-size: 1.125em;
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
