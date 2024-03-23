import Container from '../components/Layout/Container'
import MoreStories from '../components/Home/MoreStories'
import HeroPost from '../components/Home/HeroPost'
import Intro from '../components/Home/Intro'
import Layout from '../components/Layout/Layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>iambhvsh | Blog</title>
          <meta name="description" content="Hi &nbsp;👋🏻&nbsp; I&apos;m Bhavesh Patil. This is my Next.js Blog, where I share insights and discussions on various topics including technology, politics, case studies, and more." />
          <meta name="keywords" content="design, development, web, iambhvsh, bhavesh, patil, javascript, indian" />
          <meta name="author" content="Bhavesh Patil" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="canonical" href="https://iambhvsh.vercel.app" />
          <meta property="og:title" content="iambhvsh | Blog" />
          <meta property="og:description" content="Hi &nbsp;👋🏻&nbsp; I&apos;m Bhavesh Patil. This is my Next.js Blog, where I share insights and discussions on various topics including technology, politics, case studies, and more." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://iambhvsh.vercel.app" />
          <meta property="og:image" content="/assets/blog/meta/meta-image.png" />
          <meta property="og:site_name" content="iambhvsh" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="iambhvsh | Blog" />
          <meta name="twitter:description" content="Hi &nbsp;👋🏻&nbsp; I&apos;m Bhavesh Patil. This is my Next.js Blog, where I share insights and discussions on various topics including technology, politics, case studies, and more." />
          <meta name="twitter:image" content="/assets/blog/meta/meta-image.png" />
          <link rel="shortcut icon" href="/assets/blog/meta/favicon.ico" type="image/x-icon" />
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
    }
