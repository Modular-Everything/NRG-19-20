import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

// ============================================================================

const Container = ({ children }) => {
  const breakpoints = [640, 768, 936];
  const PageContainer = styled.section`
    ${tw`
      mx-auto
      px-4
    `}
    ${breakpoints.map(
      minWidth =>
        `@media(min-width: ${minWidth}px) { max-width: ${minWidth}px }`
    )}
  `;

  return <PageContainer>{children}</PageContainer>;
};

// ============================================================================

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// ============================================================================

export default Container;
