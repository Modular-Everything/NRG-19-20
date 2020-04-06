import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

// ============================================================================

const Line = props => {
  const { extended } = props;
  return <Dash extended={extended} />;
};
export default Line;

// ============================================================================

const Dash = styled.span`
  ${tw`bg-white block h-px relative`}

  ${props => (props.extended ? `width: 29px` : `width: 16px`)};
`;

// ============================================================================

Line.propTypes = {
  extended: PropTypes.bool,
};

Line.defaultProps = {
  extended: false,
};
