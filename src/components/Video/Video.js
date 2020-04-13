import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player';

// ============================================================================

const Player = props => {
  const { videoUrl } = props;
  const ref = React.createRef();
  const [playing, setPlaying] = useState(false);

  const PlayVideo = function PlayVideo() {
    setPlaying(true);
  };

  return (
    <div>
      <PlayButton
        type="button"
        onClick={() => PlayVideo()}
        style={{
          display: playing ? 'none' : 'flex',
        }}
      />
      <ReactPlayer
        ref={ref}
        url={videoUrl}
        playing={playing}
        controls
        className="react-player"
        config={{
          file: { attributes: { id: 'audio-element' } },
          vimeo: {
            preload: true,
            playerOptions: {
              responsive: true,
            },
          },
        }}
        width="100%"
        height="auto"
      />
    </div>
  );
};

// ============================================================================

const Video = props => {
  const { isHero, grid, blok, node, firstBlok } = props;
  const isFirstBlok = firstBlok === node.component;

  if (grid) {
    return (
      <StyledVideoContained>
        <Fade ssrFadeout>
          <Player videoUrl={blok.videoUrl} />
        </Fade>
      </StyledVideoContained>
    );
  }

  return (
    <StyledVideoFull isHero={isHero} isFirstBlok={isFirstBlok}>
      <Fade ssrFadeout>
        <Player videoUrl={node.videoUrl} />
      </Fade>
    </StyledVideoFull>
  );
};

// ============================================================================

const StyledVideoContained = styled.div`
  ${tw`relative bg-black rounded-lg`}
  min-height: 200px;
  grid-column: span 12;

  & div,
  & iframe {
    ${tw`rounded-lg`}
  }
`;

const StyledVideoFull = styled.div`
  ${tw`w-full relative bg-black`}
  ${props =>
    props.isHero && props.isFirstBlok && tw`-mt-40`}
  min-height: 400px;

  @media (max-width: 639px) {
    height: 50vh;

    .react-player {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding-top: 15%;
    }
  }
`;

const PlayButton = styled.span`
  ${tw`
    absolute cursor-pointer text-red-600 bg-white inset-x-0 mx-auto rounded-full shadow-xl flex justify-center items-center w-24 h-24 invisible
    sm:block sm:visible
    lg:w-32 lg:h-32
  `}
  padding: 50% 50% 0 0;
  bottom: 1rem;
  display: flex;
  z-index: 999;

  & p {
    ${tw`ml-2 leading-4`}
  }

  padding: 0;
  top: calc(50% - 3rem);

  &::before {
    border-color: transparent transparent transparent var(--color-brand);
    content: '';
    box-sizing: border-box;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 16px 0 16px 24px;
    margin-left: 6px;

    @media (min-width: 768px) {
      border-width: 23px 0 23px 32px;
      transition-property: opacity;
      transition-duration: 250ms;
    }
  }
`;

// ============================================================================

Video.propTypes = {
  firstBlok: PropTypes.string.isRequired,
  isHero: PropTypes.bool,
  grid: PropTypes.bool.isRequired,
  blok: PropTypes.shape({
    videoUrl: PropTypes.string,
  }),
  node: PropTypes.shape({
    videoUrl: PropTypes.string,
    component: PropTypes.string.isRequired,
  }),
};

Video.defaultProps = {
  isHero: false,
  blok: PropTypes.shape({
    videoUrl: 'https://vimeo.com/362097506',
  }),
  node: PropTypes.shape({
    videoUrl: 'https://vimeo.com/362097506',
  }),
};

Player.propTypes = {
  videoUrl: PropTypes.string,
};

Player.defaultProps = {
  videoUrl: 'https://vimeo.com/362097506',
};

// ============================================================================

export default Video;
