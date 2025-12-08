// app/blog/page.tsx - FIXED VERSION
import Link from 'next/link';

const blogPosts = [
  {
    slug: "first-time-europe-budget",
    title: "First Time in Europe? Your Complete Budget Travel Guide",
    excerpt: "Everything you need to know for your first European adventure without breaking the bank. From planning to packing to saving money.",
    readTime: "12 min read",
    date: "Jan 15, 2024",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop"
  },
  {
    slug: "europe-transportation-guide",
    title: "How to Travel Between European Countries on a Budget",
    excerpt: "Compare trains, buses, flights, and rideshares to find the cheapest way to travel around Europe.",
    readTime: "8 min read",
    date: "Jan 12, 2024",
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&auto=format&fit=crop"
  },
  {
    slug: "europe-packing-list",
    title: "The Ultimate Europe Packing List: What to Bring (and What to Skip)",
    excerpt: "Pack like a pro with our tested packing list that covers all seasons and situations.",
    readTime: "10 min read",
    date: "Jan 10, 2024",
    category: "Packing",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop"
  },
  {
    slug: "europe-accommodation-guide",
    title: "Where to Stay in Europe: Hostels vs Hotels vs Apartments",
    excerpt: "Complete guide to choosing accommodation in Europe. When to splurge, when to save.",
    readTime: "15 min read",
    date: "Jan 8, 2024",
    category: "Accommodation",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop"
  },
  {
    slug: "seasonal-europe-travel",
    title: "Best Time to Visit Europe: Seasonal Guide & Costs",
    excerpt: "When to visit Europe for the best weather, fewer crowds, and lowest prices.",
    readTime: "14 min read",
    date: "Jan 5, 2024",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1519677100203-7c61d0b01354?w=800&auto=format&fit=crop"
  },
  {
    slug: "europe-food-budget",
    title: "Eating in Europe on a Budget: From Street Food to Markets",
    excerpt: "How to enjoy amazing European food without spending a fortune.",
    readTime: "11 min read",
    date: "Jan 3, 2024",
    category: "Food",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop"
  }
];

const categories = ["All", "Planning", "Transportation", "Accommodation", "Food", "Packing", "Money"];

export default function BlogPage() {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">Travel Blog</h1>
        <p className="lead text-muted">
          Expert tips, guides, and insights for budget travel in Europe
        </p>
      </div>
      
      <div className="row">
        {/* Main Content - Left Column */}
        <div className="col-lg-8">
          {/* Blog Grid */}
          <div className="row g-4">
            {blogPosts.map((post) => (
              <div key={post.slug} className="col-md-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  {/* Image */}
                  <div 
                    className="card-img-top"
                    style={{
                      height: '220px',
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  
                  <div className="card-body d-flex flex-column p-4">
                    {/* Category & Title */}
                    <div className="mb-3">
                      <span className="badge bg-primary mb-2">{post.category}</span>
                      <h5 className="card-title fw-bold mb-2">{post.title}</h5>
                    </div>
                    
                    {/* Excerpt */}
                    <p className="card-text text-muted flex-grow-1 mb-4">{post.excerpt}</p>
                    
                    {/* Metadata & Button */}
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted small">
                          📖 {post.readTime}
                        </span>
                        <span className="text-muted small">
                          📅 {post.date}
                        </span>
                      </div>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="btn btn-primary w-100 fw-semibold"
                      >
                        Read Article
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <nav className="mt-5">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <span className="page-link">Previous</span>
              </li>
              <li className="page-item active">
                <span className="page-link">1</span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Sidebar - Right Column */}
        <div className="col-lg-4">
          <div className="position-sticky" style={{ top: '20px' }}>
            
            {/* Search Box */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Search Blog</h5>
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control border-end-0" 
                    placeholder="Search articles..." 
                  />
                  <button className="btn btn-primary border-start-0" type="button">
                    🔍
                  </button>
                </div>
              </div>
            </div>
            
            {/* Categories */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Categories</h5>
                <div className="d-flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`btn btn-sm ${category === 'All' ? 'btn-primary' : 'btn-outline-primary'}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="card border-0 shadow-sm bg-primary text-white mb-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Get Weekly Tips</h5>
                <p className="small opacity-75 mb-3">
                  Join 50,000+ travelers getting our weekly Europe budget tips.
                </p>
                <div className="mb-3">
                  <input 
                    type="email" 
                    className="form-control form-control-sm" 
                    placeholder="Your email"
                  />
                </div>
                <button className="btn btn-light btn-sm w-100 fw-semibold">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Popular Posts */}
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold mb-3">Popular Posts</h5>
                <div className="list-group list-group-flush">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="list-group-item list-group-item-action border-0 px-0 py-3"
                    >
                      <div className="d-flex align-items-start">
                        {/* Thumbnail */}
                        <div 
                          className="flex-shrink-0 rounded me-3"
                          style={{
                            width: '60px',
                            height: '60px',
                            backgroundImage: `url(${post.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        {/* Content */}
                        <div className="flex-grow-1">
                          <h6 className="fw-bold mb-1 small">{post.title}</h6>
                          <small className="text-muted d-block">
                            📅 {post.date} • 📖 {post.readTime}
                          </small>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}