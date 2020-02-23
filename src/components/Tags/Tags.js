import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Tags = ({ children }) => {
  return <StyledTags>{children}</StyledTags>;
};

// ============================================================================

const StyledTags = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 1rem;
  justify-content: flex-end;
  align-self: flex-end;

  & li {
    ${tw`
      py-1
      px-2
      rounded-sm
      text-center
      text-sm
    `}
    font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
    background: var(--color-white-primary);
    color: var(--color-brand);
  }
`;

// ============================================================================

Tags.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// ============================================================================

export default Tags;
