import Head from 'next/head'
import { BLOG_NAME } from '../lib/constants'
import Layout from '../components/Layout/Layout'
import Container from '../components/Layout/Container'
import ContactPage from '../components/Utils/ContactForm/ContactPage'
import PageHeading from '../components/PageHeading'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta name="title" content="Contact" />
        <meta name="description" content="Hi, 👋🏻 I'm Bhavesh Patil. Contact me here." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iambhvsh.vercel.app/contact" />
        <meta property="og:site_name" content="@iambhvsh" />
        <meta property="og:title" content="Contact" />
        <meta property="og:description" content="Hi, 👋🏻 I'm Bhavesh Patil. Contact me here." />
        <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthdy-Yx3whpgJWtyz2vjRVFZOgmQrlC7AZQ&usqp=CAU" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://iambhvsh.vercel.app/contact" />
        <meta property="twitter:title" content="Contact" />
        <meta property="twitter:description" content="Hi, 👋🏻 I'm Bhavesh Patil. Contact me here." />
        <meta property="twitter:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthdy-Yx3whpgJWtyz2vjRVFZOgmQrlC7AZQ&usqp=CAU" />

        <link rel="shortcut icon" href="/assets/blog/meta/favicon.ico" type="image/x-icon" />
        <link rel="canonical" href="https://iambhvsh.vercel.app/contact" />
        {/* Meta Tags Generated with https://metatags.io */}
      </Head>
      <Container>
        <PageHeading>Let&apos;s connect.</PageHeading>
        <ContactPage />
      </Container>
    </Layout>
  )
}
