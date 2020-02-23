import React from 'react';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

import Container from '../Container';
import TextBlock from '../TextBlock';
import Title from '../Title';
import Subtitle from '../Subtitle';
import Tags from '../Tags';

// ============================================================================

const ProjectIntro = () => {
  return (
    <Intro>
      <Container display="grid" columns="1fr 1fr">
        <ProjectMeta>
          <div>
            <Subtitle is="NBA 2K19" />
            <Title is="20 year celebration" />
          </div>
          <Tags>
            <li>Experimental</li>
            <li>Event Production</li>
            <li>Spaces</li>
          </Tags>
        </ProjectMeta>

        <ProjectDesc>
          <TextBlock
            is="When you’re asked to launch the most significant sports title there
            is... on it’s 20th anniversary... you have to create something beyond the
            conventions of game launches. It wasn’t enough to simply launch the
            NBA 2K19 installment – we created a 20-year retrospective exhibition
            and rich gameplay experience."
          />
          <TextBlock
            is="Players were invited to relive the nostalgia of earlier years and
            experience the heritage of the game they love."
          />
        </ProjectDesc>
      </Container>
    </Intro>
  );
};

// ============================================================================

const Intro = styled.div`
  ${tw`py-20`}
  background-color: var(--color-brand);
  & p,
  & h3,
  & h2 {
    color: var(--color-white-primary);
  }
  & h3 {
    ${tw`mb-2`}
  }
`;

const ProjectMeta = styled.div`
  ${tw`pr-12 text-right h-full`}
  display: grid;
`;

const ProjectDesc = styled.div`
  ${tw`pl-12`}
`;

// ============================================================================

// ProjectIntro.propTypes = {
//   is: PropTypes.string.isRequired,
// };

// ============================================================================

export default ProjectIntro;
