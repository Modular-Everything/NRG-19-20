import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring';

// ============================================================================

const CardsWrapper = ({ children, scroll }) => {
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
      {scroll ? <Swiper>{children}</Swiper> : <Wrapper>{children}</Wrapper>}
    </animated.div>
  );
};

// ============================================================================

const Wrapper = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  padding-bottom: 1rem;
`;

const Swiper = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
  padding-bottom: 1rem;

  @media (max-width: 639px) {
    display: grid;
    grid-template-columns: 0 repeat(3, calc(50% - 40px)) 1px;
    grid-gap: 1rem;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    margin: 0 -1rem;

    &::before,
    &::after {
      content: '';
    }

    & li {
      grid-column: auto;
    }
  }
`;

// ============================================================================

CardsWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  scroll: PropTypes.bool,
};

CardsWrapper.defaultProps = {
  scroll: false,
};

// ============================================================================

export default CardsWrapper;
