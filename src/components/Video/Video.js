import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';

import tw from 'tailwind.macro';
import styled from '@emotion/styled';
import Vimeo from '@u-wave/react-vimeo';

// ============================================================================

const Player = props => {
  const { videoUrl, textural } = props;
  const ref = React.createRef();
  const [playing, setPlaying] = useState(false);

  const PlayVideo = function PlayVideo() {
    setPlaying(true);
  };

  return (
    <>
      {!textural && (
        <PlayButton
          aria-label="Play Video"
          type="button"
          onClick={() => PlayVideo()}
          style={{
            display: playing ? 'none' : 'flex',
          }}
        />
      )}
      <Vimeo
        ref={ref}
        video={videoUrl}
        paused={playing}
        background={textural}
        loop={textural}
        autoplay={textural}
        muted={textural}
        responsive={!textural}
        className="react-player"
      />
    </>
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
          <Player videoUrl={blok.videoUrl} textural={blok.textural} />
        </Fade>
      </StyledVideoContained>
    );
  }

  return (
    <StyledVideoFull
      isHero={isHero}
      isFirstBlok={isFirstBlok}
      textural={node.textural}
    >
      <Player videoUrl={node.videoUrl} textural={node.textural} />
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
  ${tw`w-full relative bg-black overflow-hidden`}
  ${props => props.isHero && props.isFirstBlok && tw`-mt-40`}
  ${props => !props.textural && `min-height: 400px`}
  ${props =>
    props.textural &&
    `
      height: 90vh;
  `}

  & .react-player {
    transform: scale(3.5);

    @media (min-width: 768px) {
      transform: scale(2);
    }

    @media (min-width: 1024px) {
      transform: scale(1.5);
    }

    ${tw`
      w-full h-full
    `}
  }

  & .react-player iframe {
    ${tw`
      h-full object-cover w-full
    `}
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
  firstBlok: PropTypes.string,
  isHero: PropTypes.bool,
  textural: PropTypes.bool,
  grid: PropTypes.bool,
  blok: PropTypes.shape({
    videoUrl: PropTypes.string,
  }),
  node: PropTypes.shape({
    videoUrl: PropTypes.string,
    component: PropTypes.string.isRequired,
  }),
};

Video.defaultProps = {
  firstBlok: undefined,
  isHero: false,
  grid: false,
  textural: false,
  blok: PropTypes.shape({
    videoUrl: 'https://vimeo.com/362097506',
  }),
  node: PropTypes.shape({
    videoUrl: 'https://vimeo.com/362097506',
  }),
};

Player.propTypes = {
  videoUrl: PropTypes.string,
  textural: PropTypes.bool,
};

Player.defaultProps = {
  videoUrl: 'https://vimeo.com/362097506',
  textural: false,
};

// ============================================================================

export default Video;
