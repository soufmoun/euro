// app/debug-destinations/page.tsx
import { fetchPosts } from '@/lib/client/posts';

export default async function DebugDestinationsPage() {
  // On server-side, you can use the server version
  const { getSortedPostsData } = await import('@/lib/server/posts');
  const posts = getSortedPostsData();
  
  // Or use the API
  // const posts = await fetchPosts(); // For client components
  
  return (
    <div>
      <h1>Debug Destinations</h1>
      <p>Total posts: {posts.length}</p>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}