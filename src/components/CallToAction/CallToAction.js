import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const CallToAction = props => {
  const { is: cta } = props;
  return <StyledCTA>{cta}</StyledCTA>;
};

const StyledCTA = styled.span`
  ${tw`
    font-medium
    text-sm
  `}
  color: var(--color-brand);
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
`;

CallToAction.propTypes = {
  is: PropTypes.string.isRequired,
};

export default CallToAction;
