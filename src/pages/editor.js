import React, { useState, useEffect, useCallback } from 'react';
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

const StoryblokEntry = () => {
  const [story, setStory] = useState();

  const loadStory = useCallback(() => {
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
  });

  const disableLinks = useCallback(() => {
    const anchors = document.getElementsByTagName('a');
    for (let i = 0; i < anchors.length; i += 1) {
      // anchors[i].onclick = function clickEvent() {
      //   return false;
      // };
      anchors[i].removeAttribute('href');
    }
  });

  const initStoryblokEvents = useCallback(() => {
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
  });

  useEffect(() => {
    LoadStoryblokBridge(() => {
      initStoryblokEvents();
    });
  }, []);

  if (!story) {
    return <div />;
  }

  const { content } = story;
  disableLinks();

  return (
    <>
      {React.createElement(StoryblokComponents(content.component), {
        // eslint-disable-next-line no-underscore-dangle
        key: content._uid,
        blok: content,
      })}
    </>
  );
};

// ============================================================================

export default StoryblokEntry;
