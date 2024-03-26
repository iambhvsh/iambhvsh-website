// about.jsx
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import Container from '../components/Layout/Container';
import Layout from '../components/Layout/Layout';
import PageHeading from '../components/PageHeading';

export default function About() {
  return (
    <Layout>
      <Head>
        {/* Primary Meta Tags */}
        <title>iambhvsh | About</title>
        <meta name="title" content="iambhvsh | About" />
        <meta name="description" content="Hi, 👋🏻 I&apos;m Bhavesh Patil. I&apos;m a Frontend Web Developer..." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iambhvsh.vercel.app/about" />
        <meta property="og:title" content="iambhvsh | About" />
        <meta property="og:description" content="Hi, 👋🏻 I&apos;m Bhavesh Patil. I&apos;m a Frontend Web Developer..." />
        <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhyyD7tTOyIzR1on6AL2doqWMXXdTN9CB8w&usqp=CAU" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://iambhvsh.vercel.app/about" />
        <meta property="twitter:title" content="iambhvsh | About" />
        <meta property="twitter:description" content="Hi, 👋🏻 I&apos;m Bhavesh Patil. I&apos;m a Frontend Web Developer..." />
        <meta property="twitter:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhyyD7tTOyIzR1on6AL2doqWMXXdTN9CB8w&usqp=CAU" />

        <link rel="shortcut icon" href="/assets/blog/meta/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://iambhvsh.vercel.app/about" />
      </Head>
      <Container>
        <PageHeading>Hey there! I&apos;m Bhavesh Patil 🕊️</PageHeading>
        <div className="container mx-auto py-3 px-4">
          <p className="text-lg text-white mb-6">A 17-year-old coding enthusiast. Since 2022, I&apos;ve been immersed in the world of coding, exploring various technologies and frameworks.</p>
          <p className="text-lg text-white mb-6">I completed my SSC from MIT Vishwashanti Gurukul School, Chatrapati Sambhajinagar and HSC from DES, High School & Jr. College, Malkapur.</p>
          <h2 className="text-2xl text-white">Tools & Frameworks 🛠️</h2>
          <div className="flex">
            <Link href="https://getbootstrap.com">
              <a>
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="40"
                  height="40"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </a>
            </Link>

            <Link href="https://www.w3schools.com/css/">
              <a>
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </a>
            </Link>

<Link href="https://firebase.google.com/">
  <a>
    <Image
      src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
      alt="firebase"
      width="40"
      height="40"
      style={{
        maxWidth: "100%",
        height: "auto"
      }}
    />
  </a>
</Link>

<Link href="https://www.w3.org/html/">
  <a>
    <Image
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
      alt="html5"
      width="40"
      height="40"
      style={{
        maxWidth: "100%",
        height: "auto"
      }}
    />
  </a>
</Link>

<Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
  <a>
    <Image
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
      alt="javascript"
      width="40"
      height="40"
      style={{
        maxWidth: "100%",
        height: "auto"
      }}
    />
  </a>
</Link>

<Link href="https://www.linux.org/">
  <a>
    <Image
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
      alt="linux"
      width="40"
      height="40"
      style={{
        maxWidth: "100%",
        height: "auto"
      }}
    />
  </a>
</Link>

<Link href="https://nextjs.org/">
  <a>
    <Image
      src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
      alt="nextjs"
      width="40"
      height="40"
      style={{
        maxWidth: "100%",
        height: "auto"
      }}
    />
  </a>
</Link>

<Link href="https://reactjs.org/">
  <a>
    <Image
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
      alt="react"
      width="40"
      height="40"
      style={{
        maxWidth: "100%",
        height: "auto"
      }}
    />
  </a>
</Link>

<Link href="https://tailwindcss.com/">
  <a>
    <Image
      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
      alt="tailwind"
      width="40"
      height="40"
      style={{
        maxWidth: "100%",
        height: "auto"
      }}
    />
  </a>
</Link>

<Link href="https://www.typescriptlang.org/">
  <a>
    <Image
      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
      alt="typescript"
      width="40"
      height="40"
      style={{
        maxWidth: "100%",
        height: "auto"
      }}
    />
  </a>
</Link>
            </div>
          <div className="mb-8">
            <p className="text-xl font-semibold mb-2">Check out my projects:</p>
            <ul className="list-disc pl-4">
              <li className="mb-2"><Link href="https://pixelpulsestore.vercel.app"><a className="text-blue-500 hover:underline">PixelPulse Store - App Store</a></Link> - Discover and explore the PixelPulse Store 📱</li>
              <li className="mb-2"><Link href="https://file-downloaderr.vercel.app"><a className="text-blue-500 hover:underline">File Downloader</a></Link> - Access the File Downloader tool 💾</li>
              <li className="mb-2"><Link href="https://stackx.vercel.app"><a className="text-blue-500 hover:underline">StackX - Search Engine</a></Link> - Dive into StackX, your personal search engine 🔍</li>
              <li className="mb-2"><Link href="https://iambhvshchat.vercel.app"><a className="text-blue-500 hover:underline">Chat App</a></Link> - Connect and communicate via the Chat App 💬</li>
              <li className="mb-2"><Link href="https://iambhvsht.vercel.app"><a className="text-blue-500 hover:underline">iambhvsht</a></Link> - Explore the iambhvsht project 🚀</li>
            </ul>
          </div>
          <p className="text-lg text-white">Follow me on <Link href="https://instagram.com/iambhvsh"><a className="text-blue-500 hover:underline">Instagram</a></Link> & <Link href="https://github.com/iambhvsh"><a className="text-blue-500 hover:underline">Github</a></Link></p>
        </div>
      </Container>
    </Layout>
  );
                  }
                
