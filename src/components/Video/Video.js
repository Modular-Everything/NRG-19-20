import React from 'react';
import tw from 'tailwind.macro';

import TempImg from '../../../static/images/video-temp.png';

// ============================================================================

const Video = () => {
  return (
    <div css={tw`mb-4`}>
      <img src={TempImg} alt="Video is on its way" />
    </div>
  );
};

// ============================================================================

export default Video;
