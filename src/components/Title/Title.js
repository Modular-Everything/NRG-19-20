import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const StyledTitle = styled.h3`
  ${tw`
    text-3xl
    font-bold
    leading-relaxed
  `};
`;

const Title = props => {
  const { is: title } = props;
  return <StyledTitle>{title}</StyledTitle>;
};

Title.propTypes = {
  is: PropTypes.string.isRequired,
};

export default Title;
