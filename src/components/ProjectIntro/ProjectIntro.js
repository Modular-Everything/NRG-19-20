import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import SbEditable from 'storyblok-react';

import Container from '../Container';
import TextBlock from '../TextBlock';
import Title from '../Title';
import Subtitle from '../Subtitle';
import Tags from '../Tags';

// ============================================================================

const ProjectIntro = props => {
  const { node } = props;
  const { copy, title, subtitle, color } = node;

  const Intro = styled.div`
    ${tw`py-20 mb-4`}
    background-color: var(${
      color === 'red' ? '--color-brand' : '--color-black-primary'
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
          <ProjectMeta>
            <div>
              <Subtitle is={subtitle} />
              <Title is={title} />
            </div>
            <Tags color={color}>
              <li>Experimental</li>
              <li>Event Production</li>
              <li>Spaces</li>
            </Tags>
          </ProjectMeta>

          <ProjectDesc>
            <TextBlock is={copy} />
          </ProjectDesc>
        </Container>
      </Intro>
    </SbEditable>
  );
};

// ============================================================================

const ProjectMeta = styled.div`
  ${tw`pr-12 text-right h-full`}
  display: grid;
`;

const ProjectDesc = styled.div`
  ${tw`pl-12 self-start`}
`;

// ============================================================================

ProjectIntro.propTypes = {
  node: PropTypes.shape({
    columns: PropTypes.array.isRequired,
    copy: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

// ============================================================================

export default ProjectIntro;
