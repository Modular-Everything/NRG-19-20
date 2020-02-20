import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Title = props => {
  const { is: title, children } = props;
  const titleCopy = children[0] ? children[0].props.value : title;

  return <StyledTitle>{titleCopy}</StyledTitle>;
};

// ============================================================================

const StyledTitle = styled.h2`
  ${tw`
    text-3xl
    font-medium
    leading-tight
    mb-4
  `};
  color: var(--color-black-primary);
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
`;

// ============================================================================

Title.propTypes = {
  is: PropTypes.string.isRequired,
  children: PropTypes.shape({
    props: PropTypes.arrayOf(PropTypes.string),
  }),
};

Title.defaultProps = {
  children: PropTypes.shape({
    props: PropTypes.shape({
      value: '',
    }),
  }),
};

// ============================================================================

export default Title;
