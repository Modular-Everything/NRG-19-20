import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

import Header from '../Header';

// ============================================================================

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Meta {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const SiteTitle = data.site.siteMetadata.title;

  return (
    <>
      <Helmet>
        <title>{SiteTitle}</title>
      </Helmet>
      <Header siteName={SiteTitle} />
      <StyledMain>{children}</StyledMain>
    </>
  );
};

// ============================================================================

const StyledMain = styled.main`
  ${tw`pt-4`}
`;

// ============================================================================

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

// ============================================================================

export default Layout;
