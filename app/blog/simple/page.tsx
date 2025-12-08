// app/blog/simple/page.tsx
import Link from 'next/link';

const simpleBlogPosts = [
  {
    slug: "first-time-europe-budget",
    title: "First Time in Europe? Your Complete Budget Travel Guide",
    excerpt: "Everything you need to know for your first European adventure without breaking the bank.",
    category: "Planning",
    date: "Jan 15, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop"
  },
  {
    slug: "europe-transportation-guide",
    title: "How to Travel Between European Countries on a Budget",
    excerpt: "Compare trains, buses, flights, and rideshares to find the cheapest way to travel.",
    category: "Transportation",
    date: "Jan 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w-800&auto=format&fit=crop"
  },
  {
    slug: "europe-packing-list",
    title: "The Ultimate Europe Packing List",
    excerpt: "Pack like a pro with our tested packing list for all seasons and situations.",
    category: "Packing",
    date: "Jan 10, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w-800&auto=format&fit=crop"
  }
];

export default function SimpleBlogPage() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">Travel Blog</h1>
        <p className="lead text-muted">
          Expert tips, guides, and insights for budget travel in Europe
        </p>
      </div>
      
      <div className="row g-4">
        {simpleBlogPosts.map((post) => (
          <div key={post.slug} className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              {/* Image */}
              <img 
                src={post.image} 
                alt={post.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              
              <div className="card-body d-flex flex-column">
                {/* Category */}
                <span className="badge bg-primary mb-2">{post.category}</span>
                
                {/* Title */}
                <h5 className="card-title fw-bold mb-3">{post.title}</h5>
                
                {/* Excerpt */}
                <p className="card-text text-muted flex-grow-1">{post.excerpt}</p>
                
                {/* Metadata */}
                <div className="d-flex justify-content-between text-muted small mb-3">
                  <span>📖 {post.readTime}</span>
                  <span>📅 {post.date}</span>
                </div>
                
                {/* Button */}
                <Link 
                  href={`/blog/${post.slug}`}
                  className="btn btn-primary w-100"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-5">
        <Link href="/" className="btn btn-outline-primary">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}