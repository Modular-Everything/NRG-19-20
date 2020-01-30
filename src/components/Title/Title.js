import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const TitleForCards = styled.div`
  ${tw`
    text-3xl
    font-bold
    leading-relaxed
  `};
`;

const Title = props => {
  const { is: title } = props;
  return <TitleForCards>{title}</TitleForCards>;
};

Title.propTypes = {
  is: PropTypes.string.isRequired,
};

export default Title;
