import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Title = props => {
  const { is: title, children } = props;

  if (typeof children === 'object') {
    if (children.length === 0) {
      return null;
    }
    return <StyledTitle>{children[0].props.value}</StyledTitle>;
  }

  return <StyledTitle>{title}</StyledTitle>;
};

// ============================================================================

const StyledTitle = styled.h2`
  ${tw`
    text-2xl
    md:text-3xl
    font-medium
    leading-tight
    mb-4
  `};
  color: var(--color-black-primary);
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
`;

// ============================================================================

Title.propTypes = {
  is: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
};

Title.defaultProps = {
  is: 'Title goes here',
  children: undefined,
};

// ============================================================================

export default Title;
