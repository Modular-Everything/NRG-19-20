import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Fade from 'react-reveal/Fade';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import SbEditable from 'storyblok-react';

import Container from '../Container';
import CallToAction from '../CallToAction';
import TextBlock from '../TextBlock';
import Title from '../Title';
import ComponentNotFound from '../ComponentNotFound';

// ============================================================================

const PageIntro = props => {
  const { node, firstBlok } = props;

  if (!node) return <ComponentNotFound />;

  const { copy, title, subtitle, color, strapline, cta, ctaLink } = node;

  const Intro = styled.div`
    ${tw`py-10 sm:py-14 md:py-20`}
    font-family: 'Simplon BP', -apple-system, 'Helvetica Neue', sans-serif;
    background-color: ${color === `red`
      ? `var(--color-brand)`
      : `var(--color-${color}-primary)`};

    ${firstBlok === 'pageIntro' && tw`-mt-4`}

    & p,
    & h2,
    & h1 {
      color: ${color === `white`
        ? `var(--color-black-primary)`
        : `var(--color-white-primary)`};
    }
    & h2 {
      ${tw`mb-2`}
    }
  `;

  return (
    <SbEditable content={node}>
      <Intro>
        <Fade ssrFadeout>
          <Container display="grid" columns="1fr 1fr">
            <PageMeta>
              <div>
                <TextBlock is={subtitle} />
                <Title is={title} />
                <TextBlock is={strapline} />
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
        </Fade>
      </Intro>
    </SbEditable>
  );
};

// ============================================================================

const PageMeta = styled.div`
  ${tw`
    sm:h-full sm:flex sm:flex-col sm:items-end sm:text-right sm:pr-6
    md:pr-12
  `}

  & p {
    ${tw`mb-4 sm:mb-2`}

    &:last-of-type {
      ${tw`mt-4 mb-4 sm:mt-1 sm:mb-0`}
    }
  }

  & div {
    ${tw`
      sm:flex sm:flex-col sm:items-end sm:max-w-md
    `}
  }
`;

const PageDesc = styled.div`
  ${tw`
    sm:pl-6
    md:pl-12
  `}
  align-self: flex-start !important;

  & div {
    ${tw`max-w-md`}
  }
`;

// ============================================================================

PageIntro.propTypes = {
  node: PropTypes.shape({
    columns: PropTypes.array,
    copy: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    strapline: PropTypes.string,
    cta: PropTypes.string,
    ctaLink: PropTypes.object,
  }),
  firstBlok: PropTypes.string,
};

PageIntro.defaultProps = {
  node: PropTypes.shape({
    title: '',
    subtitle: '',
    strapline: '',
    cta: null,
    ctaLink: '/',
  }),
  firstBlok: null,
};

// ============================================================================

export default PageIntro;
