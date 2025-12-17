// app/destinations/[slug]/page.tsx - FIXED VERSION
import { 
  getAllDestinations, 
  getDestinationBySlug,
  type Destination 
} from "../../../lib/posts/destinations";
import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "react-markdown";
import Script from 'next/script';
import AdSenseBanner from '../../../components/ads/AdSenseBanner';
import AffiliateProductCard from '../../../components/AffiliateProductCard';
import { 
  getAffiliateProductsForDestination, 
  generateAffiliateLink 
} from '../../../lib/affiliate-config';
import type { Metadata } from 'next';

// CORRECTED IMPORT PATHS - Components are in the same directory
import DestinationGuide from './components/DestinationGuide';
import ParisGuide from './components/ParisGuide';
import RomeGuide from './components/RomeGuide';

// Import component data
import { getDestinationData } from '@/app/destinations/data/destination-data';

// -------- Generate Static Paths --------
export async function generateStaticParams() {
  const posts = getAllDestinations();
  return posts.map((post) => ({ slug: post.slug }));
}

// -------- Metadata --------
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {  // ← ADD THIS RETURN TYPE
  const { slug } = await params;
  const post = getDestinationBySlug(slug);

  if (!post)
    return { title: "Destination Not Found - EuroBudget" };

  return {
    title: `${post.title} - EuroBudget`,
    description: post.description,
    keywords: post.keywords?.join(', '),
    openGraph: {
      images: post.featuredImage
        ? [{ url: post.featuredImage }]
        : [],
      type: 'article',
      publishedTime: post.date || new Date().toISOString(),
    },
  };
}

// -------- Schema Markup --------
function generateSchemaMarkup(post: Destination) {
  const keywords = Array.isArray(post.keywords) 
    ? post.keywords.join(', ') 
    : typeof post.keywords === 'string' 
      ? post.keywords 
      : '';
  
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TravelGuide",
      "name": post.title,
      "description": post.description,
      "author": {
        "@type": "Organization",
        "name": "EuroBudget"
      },
      "datePublished": post.date || "2024-12-15",
      "keywords": keywords,
      "audience": {
        "@type": "PeopleAudience",
        "geographicArea": {
          "@type": "City",
          "name": post.title.replace(/ on a Budget.*/, '')
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://eurobudget.com/destinations/${post.slug}`
      }
    })
  };
}

// Component to determine which guide to use
function getDestinationGuideComponent(slug: string) {
  switch(slug) {
    case 'paris':
      return ParisGuide;
    case 'rome':
      return RomeGuide;
    default:
      return DestinationGuide; // Use generic for other cities
  }
}

// -------- Page --------
export default async function DestinationPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getDestinationBySlug(slug);

  if (!post) notFound();

  const moreDestinations = getAllDestinations()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // Get component data
  const destinationData = getDestinationData(slug);

  // Get the appropriate guide component
  const GuideComponent = getDestinationGuideComponent(slug);

  // Get destination-specific affiliate products
  const affiliateProducts = getAffiliateProductsForDestination(slug);

  return (
    <>
      {/* Schema Markup */}
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={generateSchemaMarkup(post)}
      />

      <div className="container py-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item"><Link href="/destinations">Destinations</Link></li>
            <li className="breadcrumb-item active" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        <div className="my-5">
          <AdSenseBanner slotId="1234567890" format="horizontal" />
        </div>

        {/* Last Updated & Reading Time */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <span className="text-muted small">
            📅 Last Updated: {post.lastUpdated || post.date || "December 15, 2024"}
          </span>
          <span className="badge bg-secondary">
            ⏱️ 15 min read
          </span>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-5">
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="img-fluid rounded mb-4 shadow-sm w-100"
              style={{ maxHeight: '500px', objectFit: 'cover' }}
            />
            <p className="text-center text-muted small">
              {post.description}
            </p>
          </div>
        )}

        {/* Header */}
        <div className="mb-5 text-center">
          <h1 className="display-4 fw-bold mb-3">{post.title}</h1>
          {post.dailyBudget && (
            <div className="alert alert-success d-inline-block">
              <strong>Budget Range:</strong> {post.dailyBudget} per day
            </div>
          )}
          {post.bestFor && post.bestFor.length > 0 && (
            <div className="mt-3">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {post.bestFor.map((tag, index) => (
                  <span key={index} className="badge bg-info text-dark">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* MAIN CONTENT WITH SIDEBAR */}
        <div className="row">
          {/* MAIN CONTENT COLUMN (8 columns on large, full on mobile) */}
          <div className="col-lg-8">
            {/* AdSense Ad Space 1 */}
            <div className="text-center my-5">
              <div className="ad-placeholder">
                <div>
                  <p className="text-muted mb-2">Advertisement</p>
                  <small>Ad placeholder - Ads will appear here once approved</small>
                </div>
              </div>
            </div>

            {/* INTERACTIVE COMPONENTS - Use the appropriate guide */}
            <GuideComponent 
              destination={post} 
              destinationData={destinationData} 
            />

            {/* AdSense Ad Space 2 - After Interactive Components */}
            <div className="text-center my-5">
              <div className="ad-placeholder">
                <div>
                  <p className="text-muted mb-2">Advertisement</p>
                  <small>Ad placeholder - Ads will appear here once approved</small>
                </div>
              </div>
            </div>

            {/* MARKDOWN CONTENT */}
            <div className="card border-0 shadow-sm p-4 mb-4">
              <Markdown className="content">
                {post.content}
              </Markdown>
            </div>

            {/* FAQ Section - Generic for all destinations */}
            <div className="card border-0 shadow-sm p-4 mb-4">
              <h3 className="mb-4">❓ Frequently Asked Questions</h3>
              
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      How much money do I need per day in {post.title.replace(/ on a Budget.*/, '')}?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      {post.dailyBudget || "Check the budget calculator above for an estimate."}
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Where is the cheapest area to stay?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Check the "Where to Stay" section in the guide above for budget accommodation recommendations.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      How to eat cheap in {post.title.replace(/ on a Budget.*/, '')}?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Look for local markets, street food, and budget eateries mentioned in the guide.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Affiliate Products Section */}
            {affiliateProducts.length > 0 && (
              <div className="mt-5">
                <h3 className="h4 mb-4">🎯 Recommended Products & Tours</h3>
                <p className="text-muted mb-4">
                  These carefully selected partners help you save money and enhance your trip.
                  We earn a small commission if you book through these links at no extra cost to you.
                </p>
                
                <div className="row g-4">
                {affiliateProducts.map((product, index) => (
  <div key={`${product.id}-${index}`} className="col-12">
                      <AffiliateProductCard
                        {...product}
                        affiliateLink={generateAffiliateLink(
                          product.platform,
                          product.productId,
                          { utm_source: 'eurobudget', utm_medium: 'guide' }
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AdSense Ad Space 3 - In content */}
            <div className="text-center my-5">
              <div className="ad-placeholder large">
                <div>
                  <p className="text-muted mb-2">Advertisement</p>
                  <small>Ad placeholder - Ads will appear here once approved</small>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-5 p-4 bg-light rounded">
              <h5>📝 Disclaimer</h5>
              <p className="small text-muted mb-1">
                Prices are subject to change. Always check current rates before booking. 
                This guide contains affiliate links that help support EuroBudget at no extra cost to you. 
                We only recommend services we genuinely believe in.
              </p>
              <p className="small text-muted">
                Last updated: {post.lastUpdated || new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>

          {/* SIDEBAR COLUMN (4 columns on large, full on mobile) */}
          <div className="col-lg-4 position-sticky" style={{ top: '20px', height: 'fit-content' }}>
            {/* Compact Sidebar Ad Space */}
            <div className="card border-0 shadow-sm p-3 mb-4 text-center" style={{ minHeight: '250px' }}>
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <span className="badge bg-secondary mb-2">Sponsored</span>
                  <h6 className="fw-bold">✨ Travel Deals</h6>
                  <p className="small text-muted mb-2">
                    Save up to 60% on your next trip
                  </p>
                </div>
                <div>
                  <button className="btn btn-primary btn-sm w-100 mb-2">
                    🔍 Find Deals
                  </button>
                  <p className="text-muted x-small mb-0">Advertise with us</p>
                </div>
              </div>
            </div>
            
            {/* More Destinations */}
            <div className="card border-0 shadow-sm p-3 mb-4">
              <h5 className="mb-3">✈️ More Destinations</h5>
              <div className="list-group list-group-flush">
                {moreDestinations.map((destination) => (
                  <Link
                    key={destination.slug}
                    href={`/destinations/${destination.slug}`}
                    className="list-group-item list-group-item-action border-0 px-0 py-3 d-flex align-items-center sidebar-destination-card"
                  >
                    {destination.featuredImage && (
                      <div className="card-img-container rounded me-3 flex-shrink-0">
                        <img 
                          src={destination.featuredImage} 
                          alt={destination.title}
                          className="rounded"
                          style={{ width: '60px', height: '45px', objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <div className="flex-grow-1">
                      <h6 className="mb-0 fw-medium small">{destination.title}</h6>
                      <small className="text-muted">{destination.dailyBudget || 'Budget Guide'}</small>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Keywords/Tags */}
            {post.keywords && post.keywords.length > 0 && (
              <div className="card border-0 shadow-sm p-3 mb-4">
                <h5 className="mb-3">🏷️ Popular Tags</h5>
                <div className="d-flex flex-wrap gap-1">
                  {post.keywords.slice(0, 12).map((keyword, index) => (
                    <span 
                      key={index}
                      className="badge bg-light text-dark border small mb-1"
                      style={{ fontSize: '0.7rem' }}
                    >
                      {keyword.length > 15 ? keyword.substring(0, 15) + '...' : keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Tips Card */}
            <div className="card border-0 shadow-sm p-3 mb-4 bg-light">
              <h5 className="mb-3">💡 Quick Tips</h5>
              <ul className="small mb-0 ps-3">
                <li className="mb-2">Book accommodation 3+ months in advance</li>
                <li className="mb-2">Travel in shoulder season for best prices</li>
                <li className="mb-2">Use public transportation</li>
                <li className="mb-2">Eat where locals eat</li>
                <li>Get travel insurance</li>
              </ul>
            </div>

            {/* Newsletter Signup (Compact) */}
            <div className="card border-0 shadow-sm p-3 mb-4 bg-primary text-white">
              <h5 className="mb-2">📧 Budget Travel Tips</h5>
              <p className="small mb-2">Get weekly Europe budget tips</p>
              <div className="input-group input-group-sm">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email" 
                />
                <button className="btn btn-light btn-sm" type="button">
                  Join
                </button>
              </div>
              <small className="d-block mt-2 opacity-75">No spam, unsubscribe anytime</small>
            </div>

            {/* Travel Planning Tools */}
            <div className="card border-0 shadow-sm p-3">
              <h5 className="mb-3">🛠️ Planning Tools</h5>
              <div className="list-group list-group-flush small">
                <a href="https://www.skyscanner.com" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action border-0 px-0 py-1 d-flex align-items-center">
                  <span className="me-2">✈️</span>
                  <span>Flights</span>
                </a>
                <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action border-0 px-0 py-1 d-flex align-items-center">
                  <span className="me-2">🏨</span>
                  <span>Hotels</span>
                </a>
                <a href="https://www.trainline.com" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action border-0 px-0 py-1 d-flex align-items-center">
                  <span className="me-2">🚆</span>
                  <span>Trains</span>
                </a>
                <a href="https://www.getyourguide.com" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action border-0 px-0 py-1 d-flex align-items-center">
                  <span className="me-2">🎟️</span>
                  <span>Tours</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}