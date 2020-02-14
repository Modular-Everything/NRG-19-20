import React, { useState, useEffect } from 'react';
import SbEditable from 'storyblok-react';

import config from '../../gatsby-config';
import StoryblokComponents from '../components/StoryblokComponents';

// ============================================================================

const sbConfigs = config.plugins.filter(item => {
  return item.resolve === `gatsby-source-storyblok`;
});
const sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {};

// ============================================================================

const LoadStoryblokBridge = function injectBridge(cb) {
  const script = document.createElement(`script`);
  script.type = `text/javascript`;
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`;
  script.onload = cb;
  document.getElementsByTagName(`head`)[0].appendChild(script);
};

// ============================================================================

const getParam = function param(val) {
  let result = '';
  let tmp = [];

  window.location.search
    .substr(1)
    .split('&')
    .forEach(function decode(item) {
      tmp = item.split('=');
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1]);
      }
    });

  return result;
};

// ============================================================================

const StoryblokEntry = () => {
  const [story, setStory] = useState();

  const loadStory = function load() {
    window.storyblok.get(
      {
        slug: window.storyblok.getParam(`path`),
        version: `draft`,
        resolve_relations: sbConfig.options.resolveRelations || [],
      },
      data => {
        setStory(data.story);
      }
    );
  };

  const initStoryblokEvents = function initEvents() {
    loadStory();

    const sb = window.storyblok;

    sb.on(['change', 'published'], () => {
      loadStory();
    });

    sb.on(['input'], payload => {
      const pl = payload;
      if (story && payload.story.id === story.id) {
        pl.story.content = sb.addComments(
          payload.story.content,
          payload.story.id
        );
        setStory(payload.story);
      }
    });

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode();
      }
    });
  };

  useEffect(() => {
    LoadStoryblokBridge(() => {
      initStoryblokEvents();
    });
  }, []);

  if (!story) {
    return <div />;
  }

  const { content } = story;

  console.log(content.component);

  return (
    <>
      <SbEditable content={content}>
        <div>
          {React.createElement(StoryblokComponents(content.component), {
            key: content._uid,
            blok: content,
          })}
        </div>
      </SbEditable>
    </>
  );
};

// ============================================================================

export default StoryblokEntry;
