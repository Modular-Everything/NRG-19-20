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
  ${tw`my-8 sm:my-20`}
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);

  & .title {
    grid-column: span 12;
  }
`;

// const Swiper = styled.ul`
//   ${tw`my-4`}
//   display: grid;
//   grid-gap: 1rem;
//   grid-template-columns: repeat(12, 1fr);

//   @media (max-width: 639px) {
//     display: grid;
//     grid-template-columns: 0 repeat(3, calc(50% - 40px)) 1px;
//     grid-gap: 1rem;
//     overflow: scroll;
//     -webkit-overflow-scrolling: touch;
//     margin: 0 -1rem;

//     &::before,
//     &::after {
//       content: '';
//     }

//     & li {
//       grid-column: auto;
//     }
//   }
// `;

// ============================================================================

Grid.propTypes = {
  node: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    rowTitle: PropTypes.string,
  }).isRequired,
};

// ============================================================================

export default Grid;
