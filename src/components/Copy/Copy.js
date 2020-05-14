import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import SbEditable from 'storyblok-react';
import tw from 'tailwind.macro';

import Title from '../Title';
import TextBlock from '../TextBlock';

// ============================================================================

const Copy = props => {
  const { blok } = props;

  const StyledCopy = styled.li`
    grid-column: span ${blok.width};
    height: fit-content;
    font-size: ${blok.fontScale}%;

    & h1 {
      ${tw`mb-3 mt-0`};
    }

    @media (max-width: 768px) {
      grid-column: span 12;
    }
  `;

  return (
    <SbEditable content={blok}>
      <StyledCopy>
        <ReactMarkdown
          source={blok.markdown}
          renderers={{ heading: Title, paragraph: TextBlock }}
        />
      </StyledCopy>
    </SbEditable>
  );
};

// ============================================================================

Copy.propTypes = {
  blok: PropTypes.shape({
    markdown: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    fontScale: PropTypes.string,
  }).isRequired,
};

// ============================================================================

export default Copy;
