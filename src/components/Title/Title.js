import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Title = props => {
  const { is: title, children, red, heading } = props;

  if (typeof children === 'object') {
    if (children.length === 0) {
      return null;
    }
    return (
      <StyledTitle red={red}>
        {heading === 'h2' ? (
          <Fade ssrFadeout>
            <h2>{children[0].props.value}</h2>
          </Fade>
        ) : (
          <Fade ssrFadeout>
            <p>{children[0].props.value}</p>
          </Fade>
        )}
      </StyledTitle>
    );
  }

  return (
    <StyledTitle red={red}>
      {heading === 'h2' ? (
        <Fade ssrFadeout>
          <h2>{title}</h2>
        </Fade>
      ) : (
        <Fade ssrFadeout>
          <p>{title}</p>
        </Fade>
      )}
    </StyledTitle>
  );
};

// ============================================================================

const StyledTitle = styled.p`
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
  heading: PropTypes.string,
};

Title.defaultProps = {
  is: 'Title goes here',
  red: false,
  children: undefined,
  heading: undefined,
};

// ============================================================================

export default Title;
