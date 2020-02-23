import React from 'react';
import tw from 'tailwind.macro';

import Container from '../Container';
import TempImg from '../../../static/images/video-temp.png';

// ============================================================================

const Video = () => {
  return (
    <div css={tw`mb-4`}>
      <Container>
        <img src={TempImg} alt="Video is on its way" />
      </Container>
    </div>
  );
};

// ============================================================================

export default Video;
