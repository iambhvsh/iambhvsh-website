import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Container from '../components/Layout/Container';

function Custom404() {
  return (
    <Layout>
    <Container>
      <h2 className="text-6xl">
        The page you’re looking for can’t be found.
      </h2>
    </Container>
  </Layout>
  );
}

export default Custom404;
