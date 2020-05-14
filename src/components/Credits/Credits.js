import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';

import Container from '../Container';

// ============================================================================

const Credits = props => {
  const { node } = props;

  console.log(node);

  return (
    <StyledCredits>
      <Fade ssrFadeout>
        <Container>
          <StyledUl>
            {node.credits.map(credit => (
              <Credit>
                {credit.link && credit.link.cached_url !== '' ? (
                  <a
                    href={
                      credit.link.linktype === 'url'
                        ? credit.link.cached_url
                        : `mailto:${credit.link.email}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {credit.creditName}
                  </a>
                ) : (
                  credit.creditName
                )}
                <span>{credit.creditRole}</span>
              </Credit>
            ))}
          </StyledUl>
        </Container>
      </Fade>
    </StyledCredits>
  );
};

// ============================================================================

const StyledCredits = styled.div`
  ${tw`
    py-16
  `}
  background-color: var(--color-white-quaternary);
`;

const StyledUl = styled.ul`
  ${tw`
    text-sm
    font-medium
  `}
  font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Credit = styled.li`
  & span {
    ${tw`
      block
    `}
    color: var(--color-brand);
  }

  & a {
    ${tw`underline`}
  }
`;

// ============================================================================

Credits.propTypes = {
  node: PropTypes.shape({
    credits: PropTypes.array.isRequired,
  }).isRequired,
};

// ============================================================================

export default Credits;
