import ComponentNotFound from '../ComponentNotFound';
import Page from '../Page';
import Grid from '../Grid';
import Card from '../Card';
import Copy from '../Copy';
import ProjectIntro from '../ProjectIntro';
import PageIntro from '../PageIntro';
import StaticImage from '../StaticImage';
import Video from '../Video';
import Credits from '../Credits';

// ============================================================================

const ComponentList = {
  page: Page,
  grid: Grid,
  card: Card,
  copy: Copy,
  projectIntro: ProjectIntro,
  pageIntro: PageIntro,
  image: StaticImage,
  video: Video,
  credits: Credits,
};

// ============================================================================

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

// ============================================================================

export default Components;
