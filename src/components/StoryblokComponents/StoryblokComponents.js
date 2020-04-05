import ComponentNotFound from '../ComponentNotFound';
import Page from '../Page';
import Services from '../Services';
import Contact from '../Contact';
import Grid from '../Grid';
import Card from '../Card';
import Copy from '../Copy';
import ProjectIntro from '../ProjectIntro';
import PageIntro from '../PageIntro';
import StaticImage from '../StaticImage';
import HeroImage from '../HeroImage';
import Video from '../Video';
import Credits from '../Credits';

// ============================================================================

const ComponentList = {
  page: Page,
  services: Services,
  contact: Contact,
  grid: Grid,
  card: Card,
  copy: Copy,
  projectIntro: ProjectIntro,
  pageIntro: PageIntro,
  image: StaticImage,
  heroImage: HeroImage,
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
