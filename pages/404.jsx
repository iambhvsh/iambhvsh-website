import Head from 'next/head';
import Link from 'next/link';
import PageHeading from '../components/PageHeading';

function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black">
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="text-center">
        <PageHeading title="Page Not Found" />
        <div className="text-center">
          <h1 className="text-9xl font-bold mb-2">404</h1>
          <p className="text-2xl mb-8">Page not found</p>
          <p className="text-gray-500">We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t exist.</p>
        </div>
        <div className="mt-8">
          <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Go back to the homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Custom404;
