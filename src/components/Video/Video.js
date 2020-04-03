import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    <>
      <ReactPlayer
        ref={ref}
        url={videoUrl}
        playing={playing}
        controls
        config={{
          file: { attributes: { id: 'audio-element' } },
          vimeo: {
            preload: true,
            playerOptions: {
              responsive: true,
            },
          },
          youtube: {
            preload: true,
            embedOptions: {
              responsive: true,
            },
          },
        }}
        width="100%"
        height="auto"
      />
      <PlayButton
        type="button"
        onClick={() => PlayVideo()}
        style={{
          opacity: playing ? 0 : 1,
        }}
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
        <Player videoUrl={blok.videoUrl} />
      </StyledVideoContained>
    );
  }

  return (
    <StyledVideoFull isHero={isHero} isFirstBlok={isFirstBlok}>
      <Player videoUrl={node.videoUrl} />
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
    props.isHero && props.isFirstBlok && tw`-mt-32 `}
  min-height: 200px;
`;

const PlayButton = styled.span`
  ${tw`
    absolute
    inset-x-0
    shadow-xl
    bg-white
    mx-auto
    rounded-full
    shadow-xl
    flex
    justify-center
    items-center
    text-red-600
    cursor-pointer
  `}
  top: calc(50% - 58px);
  width: 116px;
  height: 116px;
  font-size: 72px;

  &::before {
    content: '';
    box-sizing: border-box;
    display: block;
    width: 32px;
    height: 46px;
    border-style: solid;
    border-width: 23px 0 23px 32px;
    border-color: transparent transparent transparent var(--color-brand);
    margin-left: 6px;
    transition-property: opacity;
    transition-duration: 250ms;
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
