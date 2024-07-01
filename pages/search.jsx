import { useRouter } from 'next/router';
import { getAllPosts } from '../lib/api';
import Layout from '../components/Layout/Layout';
import Container from '../components/Layout/Container';
import PostPreview from '../components/Home/PostPreview';

export default function Search({ allPosts }) {
  const router = useRouter();
  const { q } = router.query;

  const filteredPosts = q
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(q.toLowerCase())
      )
    : [];

  return (
    <Layout>
      <Container>
        <h1 className="text-3xl font-bold mt-8 mb-4">Search Results for "{q}"</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
