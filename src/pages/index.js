import React from 'react';

import Layout from '../components/Layout';
import Container from '../components/Container';
import CardsWrapper from '../components/CardsWrapper';
import Card from '../components/Card';
import Image from '../components/Image';

// ============================================================================

export default () => (
  <Layout hasHero>
    <Image isHero />
    <Container>
      <CardsWrapper>
        <Card link="/1" width={12} truncate={5} />
      </CardsWrapper>
      <CardsWrapper scroll>
        <Card link="/1" width={4} truncate={1} />
        <Card link="/1" width={4} truncate={3} />
        <Card link="/1" width={4} />
      </CardsWrapper>
      <CardsWrapper>
        <Card link="/1" width={6} />
        <Card link="/1" width={6} />
        <Card link="/1" width={4} />
        <Card link="/1" width={8} />
      </CardsWrapper>
    </Container>
  </Layout>
);
