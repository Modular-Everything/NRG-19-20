import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import Shiitake from 'shiitake';

// ============================================================================

const TextBlock = props => {
  const { text, truncate } = props;
  return (
    <Text>
      {truncate !== null ? <Shiitake lines={truncate}>{text}</Shiitake> : text}
    </Text>
  );
};

// ============================================================================

const Text = styled.p`
  ${tw`
    text-sm
    mb-6
    font-medium
    leading-snug
  `}
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
`;

// ============================================================================

TextBlock.propTypes = {
  text: PropTypes.string,
  truncate: PropTypes.number.isRequired,
};

TextBlock.defaultProps = {
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

// ============================================================================

export default TextBlock;
