import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

// ====================================

const CardVideo = props => {
  const { is: video } = props;
  return (
    <Wrapper>
      <video height="100%" width="100%" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </Wrapper>
  );
};

export default CardVideo;

// ====================================

const Wrapper = styled.div`
  ${tw`rounded-lg overflow-hidden relative`}
  padding-top: calc(897 / 1346 * 100%);

  & video {
    ${tw`absolute inset-0 object-cover h-full`}
  }
`;

// ====================================

CardVideo.propTypes = {
  is: PropTypes.string.isRequired,
};
