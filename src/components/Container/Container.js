import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Container = props => {
  const { children, display, columns } = props;
  const breakpoints = [640, 768, 1024, 1280];
  const PageContainer = styled.div`
    ${tw`
      mx-auto
      px-8
      justify-between
      align-middle
      w-full
    `}
    display: ${display};

    @media (min-width: 639px) {
      ${columns !== 'grid' && `grid-template-columns: ${columns};`}
    }

    ${breakpoints.map(
      minWidth =>
        `@media(min-width: ${minWidth}px) { max-width: ${minWidth}px }`
    )}

    /* & > div {
      ${tw`self-center`}
    } */
  `;

  return <PageContainer>{children}</PageContainer>;
};

// ============================================================================

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  display: PropTypes.string,
  columns: PropTypes.string,
};

Container.defaultProps = {
  display: 'block',
  columns: null,
};

// ============================================================================

export default Container;
