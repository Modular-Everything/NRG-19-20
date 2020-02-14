import React from 'react';
import SbEditable from 'storyblok-react';
import StoryblokComponents from '../components/StoryblokComponents';
import config from '../../gatsby-config';

const sbConfigs = config.plugins.filter(item => {
  return item.resolve === 'gatsby-source-storyblok';
});
const sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {};

const loadStoryblokBridge = function(cb) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`;
  script.onload = cb;
  document.getElementsByTagName('head')[0].appendChild(script);
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

    sb.on(['change', 'published'], payload => {
      this.loadStory();
    });

    sb.on('input', payload => {
      if (this.state.story && payload.story.id === this.state.story.id) {
        payload.story.content = sb.addComments(
          payload.story.content,
          payload.story.id
        );
        this.setState({ story: payload.story });
      }
    });

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode();
      }
    });
  }

  render() {
    if (this.state.story == null) {
      return <div />;
    }

    const { content } = this.state.story;

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
