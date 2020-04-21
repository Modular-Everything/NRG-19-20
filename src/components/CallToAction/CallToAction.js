import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';

import ArrowRed from '../../../static/images/arrowRed.svg';
import ArrowWhite from '../../../static/images/arrowWhite.svg';

// ============================================================================

const CallToAction = props => {
  const { is: cta, color } = props;

  if (color === 'red') {
    return (
      <Fade ssrFadeout>
        <StyledCTA color="white">
          {cta}
          <span>
            <img src={ArrowWhite} alt="->" />
          </span>
        </StyledCTA>
      </Fade>
    );
  }

  if (color === 'black') {
    return (
      <Fade ssrFadeout>
        <StyledCTA color="white">
          {cta}
          <span>
            <img src={ArrowWhite} alt="->" />
          </span>
        </StyledCTA>
      </Fade>
    );
  }
  return (
    <Fade ssrFadeout>
      <StyledCTA color="red">
        {cta}
        <span>
          <img src={ArrowRed} alt="->" />
        </span>
      </StyledCTA>
    </Fade>
  );
};

// ============================================================================

const StyledCTA = styled.span`
  ${tw`
    font-medium
    flex
    flex-row
    items-center
    text-sm
    lg:text-lg
  `}
  color: ${({ color }) => color};
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;

  & span {
    ${tw`ml-2`}
  }
`;

// ============================================================================

CallToAction.propTypes = {
  is: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

// ============================================================================

export default CallToAction;
