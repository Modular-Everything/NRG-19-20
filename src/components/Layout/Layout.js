import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

// ============================================================================

const PageContainer = styled.main`
  ${tw`
    flex items-center justify-center h-screen w-full bg-gray-100
  `}
`;

// ============================================================================

const Layout = ({ children }) => <PageContainer>{children}</PageContainer>;

// ============================================================================

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// ============================================================================

export default Layout;
