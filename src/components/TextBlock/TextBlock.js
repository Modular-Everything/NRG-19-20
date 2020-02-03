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
  `}
`;

// ============================================================================

TextBlock.propTypes = {
  text: PropTypes.string,
  truncate: PropTypes.number.isRequired,
};

TextBlock.defaultProps = {
  text:
    'Sed condimentum dui sed velit aliquet, efficitur sodales ipsum pharetra.Suspendisse potenti.Aenean luctus interdum gravida.Quisque ultricies purus sapien, blandit bibendum quam finibus at.Sed convallis accumsan urna, in lobortis risus elementum eu.Fusce ligula nulla, pharetra vitae cursus et, rutrum ut ligula.',
};

// ============================================================================

export default TextBlock;
