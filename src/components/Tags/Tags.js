import React from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Tags = props => {
  const { color, tags } = props;
  let OLD_METHOD;
  console.log(tags.length);

  if (tags.find(({ component }) => component === 'tag') || tags.length === 0) {
    OLD_METHOD = true;
  }

  const StyledTags = styled.ul`
    ${tw`
      flex
      flex-wrap
      sm:justify-end
      sm:self-end
    `}

    & li {
      ${tw`
        py-1
        px-2
        rounded-sm
        text-center
        text-sm
        ml-3
        mb-6
        sm:mb-3
      `}

      &:first-of-type {
        ${tw`ml-0`}
      }

      &:last-of-type {
        ${tw`ml-3`}
      }

      font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
      background: ${color === 'white'
        ? `transparent`
        : `var(--color-white-primary)`};
      color: ${color === 'red'
        ? `var(--color-brand)`
        : `var(--color-black-primary)`};
      border: ${color === 'white'
        ? `1px solid var(--color-black-primary)`
        : `none`};
    }
  `;

  return (
    <StyledTags>
      <Fade ssrFadeout>
        {!OLD_METHOD
          ? tags.map(tag => <li>{tag}</li>)
          : tags.map(tag => <li>{tag.tagName}</li>)}
      </Fade>
    </StyledTags>
  );
};

// ============================================================================

Tags.propTypes = {
  color: PropTypes.string.isRequired,
  tags: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

// ============================================================================

export default Tags;
