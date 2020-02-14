import React from 'react';
import StoryblokComponents from './StoryblokComponents';

const Page = props => {
  console.log(props.blok.body);
  return (
    <div>
      page
      {props.blok.body &&
        props.blok.body.map(blok =>
          React.createElement(StoryblokComponents(blok.component), {
            key: blok._uid,
            blok,
          })
        )}
    </div>
  );
};

export default Page;
