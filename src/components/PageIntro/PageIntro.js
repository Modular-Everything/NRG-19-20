import React from 'react';
import tw from 'tailwind.macro';

import TempImg from '../../../static/images/page-intro-temp.png';

// ============================================================================

const PageIntro = () => {
  return (
    <div css={tw`mb-4`}>
      <img src={TempImg} alt="On its way" />
    </div>
  );
};

// ============================================================================

export default PageIntro;
