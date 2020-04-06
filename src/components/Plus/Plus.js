import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import Line from '../Line';

// ============================================================================

const Plus = props => {
  const { active, inverted } = props;

  return (
    <Symbol active={active}>
      <Line inverted={inverted} />
      <Line inverted={inverted} />
    </Symbol>
  );
};
export default Plus;

// ============================================================================

const Symbol = styled.div`
  ${props => props.active && `transform: rotate(45deg);`}

  span:first-of-type {
    transform: rotate(90deg);
  }

  span:nth-of-type(2) {
    bottom: 1px;
  }
`;

// ============================================================================

Plus.propTypes = {
  active: PropTypes.bool,
  inverted: PropTypes.bool,
};

Plus.defaultProps = {
  active: false,
  inverted: false,
};
