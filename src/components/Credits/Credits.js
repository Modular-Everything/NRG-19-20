import React from 'react';
import tw from 'tailwind.macro';

import TempImg from '../../../static/images/credits-temp.png';

// ============================================================================

const Credits = () => {
  return (
    <div css={tw`mb-4`}>
      <img src={TempImg} alt="On its way" />
    </div>
  );
};

// ============================================================================

export default Credits;
