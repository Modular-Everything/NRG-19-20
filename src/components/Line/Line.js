import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

// ============================================================================

const Line = props => {
  const { extended, inverted } = props;
  return <Dash extended={extended} inverted={inverted} />;
};
export default Line;

// ============================================================================

const Dash = styled.span`
  ${tw`block h-px relative`}

  ${props => (props.extended ? `width: 29px` : `width: 16px`)};
  ${props =>
    props.inverted
      ? `background-color: var(--color-black-primary)`
      : `background-color: var(--color-white-primary)`};
`;

// ============================================================================

Line.propTypes = {
  extended: PropTypes.bool,
  inverted: PropTypes.bool,
};

Line.defaultProps = {
  extended: false,
  inverted: false,
};
