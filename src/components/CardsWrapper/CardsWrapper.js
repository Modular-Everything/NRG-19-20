import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

// ============================================================================

const CardsWrapper = ({ children }) => {
  const fadeIn = useSpring({
    to: {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
    },
    from: {
      opacity: 0,
      transform: 'translate3d(0, 1.5rem, 0)',
    },
  });

  return (
    <animated.div style={fadeIn}>
      <Wrapper>{children}</Wrapper>
    </animated.div>
  );
};

// ============================================================================

const Wrapper = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 1rem;
`;

// ============================================================================

CardsWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// ============================================================================

export default CardsWrapper;
