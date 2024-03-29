import Head from 'next/head';
import Link from 'next/link';

function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-white">
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="text-center">
        <div className="text-center">
          <h2 className="text-3xl">404</h2> {/* Decrease font size for better readability */}
          <p className="text-md mb-8 ml-sm mr-sm">The page you're looking for doesn't seem to exist.</p> {/* Decrease font size for better readability */}
        </div>
        <div className="mt-8">
          <Link href="/" className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-white transition-colors duration-300">
            Go back to the home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Custom404;
