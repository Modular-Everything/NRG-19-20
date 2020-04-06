import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

import Line from '../Line';

// ============================================================================

const Burger = props => {
  const { active, inverted } = props;

  return (
    <Symbol active={active}>
      <Line extended inverted={inverted} />
      <Line extended inverted={inverted} />
    </Symbol>
  );
};
export default Burger;

// ============================================================================

const Symbol = styled.div`
  position: relative;
  ${props => props.active && `top: 3px;`}

  span:nth-of-type(1) {
    top: -3px;
    ${props =>
      props.active &&
      `
      transform: rotate(45deg) scale(0.6);
    `}
  }
  span:nth-of-type(2) {
    bottom: -3px;
    ${props =>
      props.active &&
      `
      transform: rotate(-45deg) scale(0.6);
      bottom: 4px;
    `}
  }
`;

// ============================================================================

Burger.propTypes = {
  active: PropTypes.bool,
  inverted: PropTypes.bool,
};

Burger.defaultProps = {
  active: false,
  inverted: false,
};
