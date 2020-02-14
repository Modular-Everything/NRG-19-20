import React from 'react';
import SbEditable from 'storyblok-react';
import Components from '../components/StoryblokComponents';
import config from '../../gatsby-config';

const sbConfigs = config.plugins.filter(item => {
  return item.resolve === 'gatsby-source-storyblok';
});
const sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {};

const loadStoryblokBridge = function bridge(cb) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`;
  script.onload = cb;
  document.getElementsByTagName('head')[0].appendChild(script);
};

const getParam = function param(val) {
  let result = '';
  let tmp = [];

  window.location.search
    .substr(1)
    .split('&')
    .forEach(function paramItem(item) {
      tmp = item.split('=');
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1]);
      }
    });

  return result;
};

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { story: null };
  }

  componentDidMount() {
    loadStoryblokBridge(() => {
      this.initStoryblokEvents();
    });
  }

  loadStory() {
    window.storyblok.get(
      {
        slug: window.storyblok.getParam('path'),
        version: 'draft',
        resolve_relations: sbConfig.options.resolveRelations || [],
      },
      data => {
        this.setState({ story: data.story });
      }
    );
  }

  initStoryblokEvents() {
    this.loadStory();

    const sb = window.storyblok;

    sb.on(['change', 'published'], () => {
      this.loadStory();
    });

    sb.on('input', payload => {
      const { story } = this.state;
      const pl = payload;
      if (story && pl.story.id === story.id) {
        pl.story.content = sb.addComments(pl.story.content, pl.story.id);
        this.setState({ story: pl.story });
      }
    });

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode();
      }
    });
  }

  render() {
    const { story } = this.state;
    if (story == null) {
      return <div />;
    }

    const content = story.content;

    return (
      <SbEditable content={content}>
        <div>
          {React.createElement(Components(content.component), {
            key: content._uid,
            blok: content,
          })}
        </div>
      </SbEditable>
    );
  }
}

export default StoryblokEntry;
