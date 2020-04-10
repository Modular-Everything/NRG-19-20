import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import SbEditable from 'storyblok-react';
import ReactMarkdown from 'react-markdown';

import Container from '../Container';
import TextBlock from '../TextBlock';
import Title from '../Title';
import Subtitle from '../Subtitle';
import Tags from '../Tags';
import ComponentNotFound from '../ComponentNotFound';

// ============================================================================

const ProjectIntro = props => {
  const { node } = props;

  if (!node) return <ComponentNotFound />;

  const { copy, title, subtitle, color } = node;

  const Intro = styled.div`
    ${tw`py-10 sm:py-20`}
    background-color: ${
      color === `red` ? `var(--color-brand)` : `var(--color-${color}-primary)`
    };

    ${props.firstBlok === 'projectIntro' && tw`-mt-4`}

    & p,
    & h3,
    & h2 {
      color: ${
        color === `white`
          ? `var(--color-black-primary)`
          : `var(--color-white-primary)`
      };
    }
    & h3 {
      ${tw`mb-2`}
    }
  `;

  return (
    <SbEditable content={node}>
      <Intro>
        <Container display="grid" columns="1fr 1fr">
          <ProjectMeta>
            <div>
              <Subtitle is={subtitle} />
              <Title is={title} />
            </div>
            <Tags color={color}>
              {node.tagList.map(tag => (
                <li>{tag.tagName}</li>
              ))}
            </Tags>
          </ProjectMeta>

          <ProjectDesc>
            <ReactMarkdown source={copy} renderers={{ paragraph: TextBlock }} />
          </ProjectDesc>
        </Container>
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

  & p:last-of-type {
    ${tw`mb-0`}
  }
`;

// ============================================================================

ProjectIntro.propTypes = {
  node: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    copy: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    tagList: PropTypes.array.isRequired,
  }).isRequired,
};

// ============================================================================

export default ProjectIntro;
