import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

import Arrow from '../../../static/images/arrow.svg';

// ============================================================================

const CallToAction = props => {
  const { is: cta } = props;
  return (
    <StyledCTA>
      {cta}
      <span>
        <img src={Arrow} alt="->" />
      </span>
    </StyledCTA>
  );
};

// ============================================================================

const StyledCTA = styled.div`
  ${tw`
    font-medium
    text-sm
    flex
    flex-row
    items-center
  `}
  color: var(--color-brand);
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;

  & span {
    ${tw`ml-2`}
  }
`;

// ============================================================================

CallToAction.propTypes = {
  is: PropTypes.string.isRequired,
};

// ============================================================================

export default CallToAction;
