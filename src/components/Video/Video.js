import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from '@emotion/styled';

import TempImg from '../../../static/images/video-temp.png';

// ============================================================================

const Video = props => {
  const { grid } = props;
  console.log(grid);

  if (grid) {
    return (
      <StyledVideoContained>
        <img src={TempImg} alt="Video is on its way" />
      </StyledVideoContained>
    );
  }

  return (
    <StyledVideoFull>
      <img src={TempImg} alt="Video is on its way" />
    </StyledVideoFull>
  );
};

// ============================================================================

const StyledVideoContained = styled.div`
  ${tw`mb-4`}
  grid-column: span 12;

  & img {
    ${tw`rounded`}
  }
`;

const StyledVideoFull = styled.div`
  ${tw`mb-4`}
`;

// ============================================================================

Video.propTypes = {
  grid: PropTypes.bool.isRequired,
};

// ============================================================================

export default Video;
