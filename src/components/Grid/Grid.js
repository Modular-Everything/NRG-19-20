import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

import StoryblokComponents from '../StoryblokComponents';
import Container from '../Container';
import Title from '../Title';

// ============================================================================

const Grid = props => {
  const { node } = props;

  const components = node.columns.map(blok =>
    React.createElement(StoryblokComponents(blok.component), {
      // eslint-disable-next-line no-underscore-dangle
      key: blok._uid,
      grid: true,
      blok,
    })
  );

  return (
    <Container>
      <Wrapper>
        {node.rowTitle && (
          <li className="title">
            <Title is={node.rowTitle} />
          </li>
        )}
        {components}
      </Wrapper>
    </Container>
  );
};

// ============================================================================

const Wrapper = styled.ul`
  ${tw`my-10 lg:my-20`}
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);

  @media (min-width: 768px) {
    grid-gap: 2rem;
  }

  & .title {
    grid-column: span 12;

    & h2 {
      @media (max-width: 768px) {
        margin-bottom: 0;
      }
    }
  }
`;

// ============================================================================

Grid.propTypes = {
  node: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    rowTitle: PropTypes.string,
  }).isRequired,
};

// ============================================================================

export default Grid;
