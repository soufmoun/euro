// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';

// This would come from a lib/blog.ts in real app
const blogPosts = [
  {
    slug: "first-time-europe-budget",
    title: "First Time in Europe? Your Complete Budget Travel Guide",
    content: `
      <h2>Introduction</h2>
      <p>Planning your first trip to Europe can be overwhelming, but with the right strategy, you can experience the continent without breaking the bank.</p>
      
      <h2>Before You Go</h2>
      <h3>1. Choose the Right Season</h3>
      <p>Shoulder seasons (April-May and September-October) offer the best balance of good weather and lower prices.</p>
      
      <h3>2. Get Your Documents Ready</h3>
      <p>Check visa requirements 3-4 months in advance. Ensure your passport is valid for at least 6 months beyond your travel dates.</p>
      
      <h2>Budget Breakdown</h2>
      <p>Here's what you can expect to spend daily in different regions:</p>
      <ul>
        <li><strong>Western Europe:</strong> €70-100/day</li>
        <li><strong>Central Europe:</strong> €50-80/day</li>
        <li><strong>Eastern Europe:</strong> €30-60/day</li>
        <li><strong>Southern Europe:</strong> €60-90/day</li>
      </ul>
    `,
    readTime: "12 min read",
    date: "2024-01-15",
    category: "Planning",
    image: "/images/blog/europe-first-time.jpg",
    author: "Sarah Miller",
    authorRole: "Senior Travel Editor"
  },
  // Add more posts...
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/blog" className="text-decoration-none">Blog</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
          
          {/* Article Header */}
          <article>
            <span className="badge bg-primary mb-3">{post.category}</span>
            <h1 className="display-5 fw-bold mb-4">{post.title}</h1>
            
            <div className="d-flex align-items-center mb-5">
              <div className="flex-shrink-0">
                <div 
                  className="rounded-circle"
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundImage: 'url(/images/authors/sarah.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="fw-bold mb-1">{post.author}</h6>
                <p className="text-muted small mb-0">{post.authorRole} • {post.date} • {post.readTime}</p>
              </div>
              <div className="flex-shrink-0">
                <button className="btn btn-outline-primary btn-sm">
                  <i className="fas fa-share-alt me-2"></i>Share
                </button>
              </div>
            </div>
            
            {/* Featured Image */}
            <div 
              className="rounded mb-5"
              style={{
                height: '400px',
                backgroundImage: `url(${post.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Article Content */}
            <div 
              className="article-content fs-5"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-5 pt-4 border-top">
              <h6 className="fw-bold mb-3">Tags</h6>
              <div className="d-flex flex-wrap gap-2">
                {["Europe", "Budget Travel", "First Time", "Planning", "Tips"].map((tag) => (
                  <a key={tag} href="#" className="badge bg-light text-dark border p-2 text-decoration-none">
                    #{tag}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="card border-0 shadow-sm mt-5">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-3 text-center">
                    <div 
                      className="rounded-circle mx-auto"
                      style={{
                        width: '100px',
                        height: '100px',
                        backgroundImage: 'url(/images/authors/sarah.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>
                  <div className="col-md-9">
                    <h5 className="fw-bold">About {post.author}</h5>
                    <p className="text-muted">
                      {post.authorRole} at EuroBudget. Sarah has traveled to 25+ European countries 
                      and specializes in creating budget-friendly itineraries that don't compromise on experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="d-flex justify-content-between mt-5 pt-4 border-top">
              <Link href="/blog" className="btn btn-outline-primary">
                ← Back to Blog
              </Link>
              <button className="btn btn-primary">
                Next Article →
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}