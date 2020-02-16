import React from 'react';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Card from '../components/Card';
import Image from '../components/Image';

// ============================================================================

export default () => (
  <Layout hasHero isInverted>
    <Image isHero />
    <Image isStatic caption="Image caption" />
    <Image isStatic />
    <Container>
      <Grid>
        <Card link="/1" width={12} truncate={5} />
      </Grid>
      <Grid scroll>
        <Card link="/1" width={4} truncate={1} />
        <Card link="/1" width={4} truncate={3} />
        <Card link="/1" width={4} />
      </Grid>
      <Grid>
        <Card link="/1" width={6} />
        <Card link="/1" width={6} />
        <Card link="/1" width={4} />
        <Card link="/1" width={8} />
      </Grid>
    </Container>
  </Layout>
);
