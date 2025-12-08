// app/destinations/[slug]/page.tsx
import { getPostData, getSortedPostsData } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: {
    slug: string;
  };
}

// CRITICAL FIX: Add validation before using params
export async function generateStaticParams() {
  try {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// FIX: Add try-catch to metadata generation
export async function generateMetadata({ params }: PageProps) {
  try {
    // ADD VALIDATION: Check if slug exists
    if (!params?.slug) {
      return {
        title: 'Destination Not Found - EuroBudget',
      };
    }
    
    const post = getPostData(params.slug);
    return {
      title: `${post.title} - EuroBudget`,
      description: post.description,
    };
  } catch (error) {
    return {
      title: 'Destination Not Found - EuroBudget',
    };
  }
}

// FIX: Add validation in main component
export default function DestinationPage({ params }: PageProps) {
  // CRITICAL: Validate params exists
  if (!params || !params.slug) {
    console.error('ERROR: params or params.slug is undefined:', params);
    notFound();
  }
  
  let post;
  
  try {
    post = getPostData(params.slug);
  } catch (error) {
    console.error(`Error loading post with slug "${params.slug}":`, error);
    notFound();
  }

  return (
    <div className="container py-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/destinations">Destinations</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {post.title}
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold mb-3">{post.title}</h1>
          <p className="lead text-muted">{post.description}</p>
        </div>
        <div className="col-lg-4 text-lg-end">
          <div className="card border-0 bg-light">
            <div className="card-body">
              <h5 className="card-title">Quick Facts</h5>
              <p className="mb-2">
                <strong>Daily Budget:</strong> {post.dailyBudget}
              </p>
              {post.bestFor && post.bestFor.length > 0 && (
                <p className="mb-2">
                  <strong>Best For:</strong> {post.bestFor.join(', ')}
                </p>
              )}
              {post.date && (
                <p className="mb-0 text-muted small">
                  <strong>Updated:</strong> {new Date(post.date).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="row">
        <div className="col-lg-8">
          <div className="card border-0">
            <div className="card-body">
              {/* Simple markdown rendering */}
              {post.content ? (
                <div className="content">
                  {post.content.split('\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={index} className="h3 mt-4 mb-3">{paragraph.replace('## ', '')}</h2>;
                    } else if (paragraph.startsWith('### ')) {
                      return <h3 key={index} className="h4 mt-3 mb-2">{paragraph.replace('### ', '')}</h3>;
                    } else if (paragraph.trim() === '') {
                      return <br key={index} />;
                    } else {
                      return <p key={index} className="mb-3">{paragraph}</p>;
                    }
                  })}
                </div>
              ) : (
                <div className="text-center py-5">
                  <h3 className="text-muted">Content Coming Soon!</h3>
                  <p className="text-muted">
                    We're working on the detailed guide for {post.title}. 
                    Check back soon for complete budget breakdowns!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          <div className="card border-0 mb-4">
            <div className="card-body">
              <h5 className="card-title">Budget Breakdown</h5>
              {/* Add your budget breakdown content */}
            </div>
          </div>

          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">More Destinations</h5>
              <div className="list-group list-group-flush">
                {getSortedPostsData()
                  .filter(p => p.slug !== post.slug)
                  .slice(0, 3)
                  .map(destination => (
                    <Link 
                      key={destination.slug}
                      href={`/destinations/${destination.slug}`}
                      className="list-group-item list-group-item-action border-0 px-0"
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1">{destination.title}</h6>
                      </div>
                      <p className="mb-1 small text-muted">{destination.dailyBudget}</p>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}