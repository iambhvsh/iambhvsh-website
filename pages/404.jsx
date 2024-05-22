import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Container from '../components/Layout/Container';

function Custom404() {
  return (
    <Navbar>
    <Container>
      <h2 className="text-4xl h-screen text-center">
        The page you’re looking for can’t be found.
      </h2>
    </Container>
  </Navbar>
  );
}

export default Custom404;
