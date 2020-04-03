import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import SbEditable from 'storyblok-react';
import ReactMarkdown from 'react-markdown';

import Container from '../Container';
import TextBlock from '../TextBlock';
import Title from '../Title';
import ComponentNotFound from '../ComponentNotFound';

// ============================================================================

const PageIntro = props => {
  const { node } = props;

  if (!node) return <ComponentNotFound />;

  const { copy, title, subtitle, color, strapline } = node;

  const Intro = styled.div`
    ${tw`py-20`}
    background-color: var(${
      color === `red` ? `--color-brand` : `--color-{color}-primary`
    });
    & p,
    & h3,
    & h2 {
      color: var(--color-white-primary);
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
            </div>
          </PageDesc>
        </Container>
      </Intro>
    </SbEditable>
  );
};

// ============================================================================

const PageMeta = styled.div`
  ${tw`flex flex-col items-end pr-12 text-right h-full`}

  & div {
    ${tw`flex flex-col items-end max-w-md`}
  }
`;

const Subtitle = styled.h3`
  ${tw`text-sm`}
`;

const Strapline = styled.p`
  ${tw`text-sm max-w-lg`}
`;

const PageDesc = styled.div`
  ${tw`pl-12`}
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
  }),
};

PageIntro.defaultProps = {
  node: PropTypes.shape({
    title: '',
    subtitle: '',
    strapline: '',
  }),
};

// ============================================================================

export default PageIntro;
