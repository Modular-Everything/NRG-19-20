import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

import Container from '../Container';

// ============================================================================

const Credits = props => {
  const { node } = props;

  return (
    <StyledCredits>
      <Container>
        <StyledUl>
          {node.credits.map(credit => (
            <Credit>
              {credit.creditName}
              <span>{credit.creditRole}</span>
            </Credit>
          ))}
        </StyledUl>
      </Container>
    </StyledCredits>
  );
};

// ============================================================================

const StyledCredits = styled.div`
  ${tw`
    py-16
  `}
  background-color: var(--color-white-quaternary);
`;

const StyledUl = styled.ul`
  ${tw`
    text-sm
    font-medium
  `}
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Credit = styled.li`
  & span {
    ${tw`
      block
    `}
    color: var(--color-brand);
  }
`;

// ============================================================================

Credits.propTypes = {
  node: PropTypes.shape({
    credits: PropTypes.array.isRequired,
  }).isRequired,
};

// ============================================================================

export default Credits;
