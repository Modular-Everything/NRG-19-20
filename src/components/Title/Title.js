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
    text-lg font-medium leading-normal mb-4
    sm:text-xl
    md:text-2xl
    lg:text-3xl lg:leading-tight
  `};
  color: ${props =>
    props.red ? `var(--color-brand)` : `var(--color-black-primary)`};
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
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
