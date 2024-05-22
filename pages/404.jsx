import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Container from '../components/Layout/Container';

function Custom404() {
  return (
    <Navbar>
      <Container>
        <div className="flex flex-col justify-center items-center h-screen">
          <h2 className="text-4xl">
            The page you’re looking for can’t be found.
          </h2>
            <Link href="/" className="no-underline text-blue-500">Return Home ⟩</Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Custom404;
