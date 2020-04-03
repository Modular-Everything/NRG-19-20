import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Tags = props => {
  const { color, children } = props;

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
      background: ${color === 'white'
        ? `transparent`
        : `var(--color-white-primary)`};
      color: ${color === 'red'
        ? `var(--color-brand)`
        : `var(--color-black-primary)`};
      border: ${color === 'white'
        ? `1px solid var(--color-black-primary)`
        : `none`};
    }
  `;

  return <StyledTags>{children}</StyledTags>;
};

// ============================================================================

Tags.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// ============================================================================

export default Tags;
