const path = require('path');

exports.onCreateWebpackConfig = ({ getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig();
  config.node = {
    fs: 'empty',
  };
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/storyblok-entry.js');
    resolve(
      graphql(
        `
          {
            allStoryblokEntry {
              edges {
                node {
                  id
                  name
                  created_at
                  uuid
                  slug
                  full_slug
                  content
                  is_startpage
                  parent_id
                  group_id
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const entries = result.data.allStoryblokEntry.edges;
        entries.forEach(entry => {
          const pagePath =
            entry.node.full_slug === 'home' ? '' : `${entry.node.full_slug}/`;

          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              story: entry.node,
            },
          });
        });
      })
    );
  });
};
