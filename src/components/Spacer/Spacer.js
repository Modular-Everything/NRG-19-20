import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Spacer = props => {
  const { node } = props;
  return <Divider borders={node.guide} sizing={node.spacing} />;
};

// ============================================================================

const Divider = styled.div`
  ${tw`
    h-px w-full
  `}
  ${({ sizing }) => `padding: ${sizing}rem 0;`}
  ${({ borders }) =>
    borders &&
    `border-bottom: 1px solid var(--color-brand); border-top: 1px solid var(--color-brand);`}
`;

// ============================================================================

Spacer.propTypes = {
  node: PropTypes.shape({
    spacing: PropTypes.string.isRequired,
    guide: PropTypes.bool,
  }),
};

Spacer.defaultProps = {
  node: {
    guide: false,
  },
};

// ============================================================================

export default Spacer;
