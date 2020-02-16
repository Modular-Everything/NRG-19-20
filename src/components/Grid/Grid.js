import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import StoryblokComponents from '../StoryblokComponents';
import Container from '../Container';

// ============================================================================

const Grid = props => {
  const { node } = props;
  const { isScroll } = node;
  const components = node.columns.map(blok =>
    React.createElement(StoryblokComponents(blok.component), {
      // eslint-disable-next-line no-underscore-dangle
      key: blok._uid,
      blok,
    })
  );

  return (
    <Container>
      {isScroll ? (
        <Swiper>{components}</Swiper>
      ) : (
        <Wrapper>{components}</Wrapper>
      )}
    </Container>
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

Grid.propTypes = {
  node: PropTypes.shape.isRequired,
  isScroll: PropTypes.bool,
};

Grid.defaultProps = {
  isScroll: false,
};

// ============================================================================

export default Grid;
