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
      <StyledCTA color="white">
        <Fade ssrFadeout>
          {cta}
          <span>
            <Fade left ssrFadeout>
              <img src={ArrowWhite} alt="->" />
            </Fade>
          </span>
        </Fade>
      </StyledCTA>
    );
  }

  if (color === 'black') {
    return (
      <StyledCTA color="white">
        <Fade ssrFadeout>
          {cta}
          <span>
            <Fade left ssrFadeout>
              <img src={ArrowWhite} alt="->" />
            </Fade>
          </span>
        </Fade>
      </StyledCTA>
    );
  }
  return (
    <StyledCTA color="red">
      <Fade ssrFadeout>
        {cta}
        <span>
          <Fade left ssrFadeout>
            <img src={ArrowRed} alt="->" />
          </Fade>
        </span>
      </Fade>
    </StyledCTA>
  );
};

// ============================================================================

const StyledCTA = styled.div`
  ${tw`
    font-medium
    flex
    flex-row
    items-center
    text-sm
    lg:text-base
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
