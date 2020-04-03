import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import SbEditable from 'storyblok-react';
import ReactMarkdown from 'react-markdown';

import Container from '../Container';
import CallToAction from '../CallToAction';
import TextBlock from '../TextBlock';
import Title from '../Title';
import ComponentNotFound from '../ComponentNotFound';

// ============================================================================

const PageIntro = props => {
  const { node } = props;

  if (!node) return <ComponentNotFound />;

  const { copy, title, subtitle, color, strapline, cta, ctaLink } = node;

  const Intro = styled.div`
    ${tw`py-12 sm:py-20`}
    font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
    background-color: ${color === `red`
      ? `var(--color-brand)`
      : `var(--color-${color}-primary)`};
    & p,
    & h3,
    & h2 {
      color: ${color === `white`
        ? `var(--color-black-primary)`
        : `var(--color-white-primary)`};
    }
    & h3 {
      ${tw`mb-2`}
    }
  `;

  return (
    <SbEditable content={node}>
      <Intro>
        <Container display="grid" columns="1fr 1fr">
          <PageMeta>
            <div>
              <Subtitle>{subtitle}</Subtitle>
              <Title is={title} />
              <Strapline>{strapline}</Strapline>
            </div>
          </PageMeta>

          <PageDesc>
            <div>
              <ReactMarkdown
                source={copy}
                renderers={{ paragraph: TextBlock }}
              />
              {cta && (
                <Link to={`/${ctaLink && ctaLink.cached_url}`}>
                  <CallToAction is={cta} color={color} />
                </Link>
              )}
            </div>
          </PageDesc>
        </Container>
      </Intro>
    </SbEditable>
  );
};

// ============================================================================

const PageMeta = styled.div`
  ${tw`
    sm:h-full
    sm:flex
    sm:flex-col
    sm:items-end
    sm:text-right
    sm:pr-12
  `}

  & div {
    ${tw`
      sm:flex
      sm:flex-col
      sm:items-end
      sm:max-w-md
    `}
  }
`;

const Subtitle = styled.h3`
  ${tw`text-sm`}
`;

const Strapline = styled.p`
  ${tw`text-sm max-w-lg`}
`;

const PageDesc = styled.div`
  ${tw`sm:pl-12`}
  align-self: flex-start !important;

  & div {
    ${tw`max-w-md`}
  }
`;

// ============================================================================

PageIntro.propTypes = {
  node: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    copy: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    strapline: PropTypes.string,
    cta: PropTypes.string,
    ctaLink: PropTypes.string,
  }),
};

PageIntro.defaultProps = {
  node: PropTypes.shape({
    title: '',
    subtitle: '',
    strapline: '',
    cta: null,
    ctaLink: '/',
  }),
};

// ============================================================================

export default PageIntro;
