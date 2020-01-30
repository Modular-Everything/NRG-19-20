import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const StyledSubtitle = styled.h4`
  ${tw`
    uppercase
  `}
`;

const Subtitle = props => {
  const { is: subtitle } = props;
  return <StyledSubtitle>{subtitle}</StyledSubtitle>;
};

Subtitle.propTypes = {
  is: PropTypes.string.isRequired,
};

export default Subtitle;
