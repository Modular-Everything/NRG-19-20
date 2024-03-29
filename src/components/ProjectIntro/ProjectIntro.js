import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import SbEditable from 'storyblok-react';
import ReactMarkdown from 'react-markdown';

import Fade from 'react-reveal/Fade';

import Container from '../Container';
import TextBlock from '../TextBlock';
import Title from '../Title';
import Subtitle from '../Subtitle';
import Tags from '../Tags';
import ComponentNotFound from '../ComponentNotFound';

// ============================================================================

const ProjectIntro = props => {
  const { node, firstBlok } = props;

  if (!node) return <ComponentNotFound />;

  const { copy, title, subtitle, color, tags, tagList } = node;

  const Intro = styled.div`
    ${tw`py-10 sm:py-20`}
    background-color: ${
      color === `red` ? `var(--color-brand)` : `var(--color-${color}-primary)`
    };

    ${firstBlok === 'projectIntro' && tw`-mt-4`}

    & p,
    & h2,
    & h1 {
      color: ${
        color === `white`
          ? `var(--color-black-primary)`
          : `var(--color-white-primary)`
      };
    }

    & p {
      ${tw`mb-2`}
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
            <ProjectMeta>
              <div>
                <Subtitle is={subtitle} />
                <Title is={title} heading />
              </div>
              <Tags color={color} tags={tags || tagList} />
            </ProjectMeta>

            <ProjectDesc>
              <ReactMarkdown
                source={copy}
                renderers={{ paragraph: TextBlock }}
              />
            </ProjectDesc>
          </Container>
        </Fade>
      </Intro>
    </SbEditable>
  );
};

// ============================================================================

const ProjectMeta = styled.div`
  ${tw`
    sm:pr-12 sm:text-right sm:h-full
    md:pr-12
  `}
  display: grid;
`;

const ProjectDesc = styled.div`
  ${tw`
    sm:pl-6
    md:pl-12
  `}
`;

// ============================================================================

ProjectIntro.propTypes = {
  firstBlok: PropTypes.string.isRequired,
  node: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    copy: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    tags: PropTypes.array,
    tagList: PropTypes.array,
  }),
};

ProjectIntro.defaultProps = {
  node: {
    tags: null,
    tagList: null,
  },
};

// ============================================================================

export default ProjectIntro;
