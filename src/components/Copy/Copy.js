import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

import Title from '../Title';
import TextBlock from '../TextBlock';

// ============================================================================

const Copy = props => {
  const { blok } = props;

  const StyledCopy = styled.div`
    ${tw`
      mt-16
      mb-12
    `}
    grid-column: span ${blok.width};
    height: fit-content;

    @media (max-width: 639px) {
      grid-column: span 12;
    }
  `;

  return (
    <StyledCopy>
      <ReactMarkdown
        source={blok.markdown}
        renderers={{ heading: Title, paragraph: TextBlock }}
      />
    </StyledCopy>
  );
};

// ============================================================================

Copy.propTypes = {
  blok: PropTypes.shape({
    markdown: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }).isRequired,
};

// ============================================================================

export default Copy;
