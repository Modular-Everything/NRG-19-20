import React from 'react';

import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Spacer from '../components/Spacer';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

// ============================================================================

const Error = () => {
  return (
    <Layout>
      <Header name="Page can't be found | 404" />
      <Spacer />
      <Container>
        <Subtitle is="404" />
        <Title is="Sorry, we can't find this page." />
      </Container>
      <Spacer sizing="4" guide={false} />
      <Footer />
    </Layout>
  );
};

// ============================================================================

export default Error;
