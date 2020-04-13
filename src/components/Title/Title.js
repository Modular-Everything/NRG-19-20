import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Title = props => {
  const { is: title, children, red } = props;

  if (typeof children === 'object') {
    if (children.length === 0) {
      return null;
    }
    return <StyledTitle red={red}>{children[0].props.value}</StyledTitle>;
  }

  return <StyledTitle red={red}>{title}</StyledTitle>;
};

// ============================================================================

const StyledTitle = styled.h2`
  ${tw`
    font-medium leading-normal my-2
    lg:leading-tight
  `};
  color: ${props =>
    props.red ? `var(--color-brand)` : `var(--color-black-primary)`};
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
  font-size: 1.5em;

  @media (min-width: 1024px) {
    font-size: 1.875em;
  }
`;

// ============================================================================

Title.propTypes = {
  is: PropTypes.string,
  red: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.object),
};

Title.defaultProps = {
  is: 'Title goes here',
  red: false,
  children: undefined,
};

// ============================================================================

export default Title;
