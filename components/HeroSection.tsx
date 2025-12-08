// components/HeroSection.tsx
import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  primaryLink: string;
  secondaryLink: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta,
  primaryLink,
  secondaryLink
}: HeroSectionProps) {
  return (
    <section className="hero-gradient text-white section-padding">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4">{title}</h1>
            <p className="lead mb-4 fs-5">{subtitle}</p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Link href={primaryLink} className="btn btn-light btn-lg px-4 py-2 fw-semibold">
                {primaryCta}
              </Link>
              <Link href={secondaryLink} className="btn btn-outline-light btn-lg px-4 py-2">
                {secondaryCta}
              </Link>
            </div>
            
            {/* Social Proof */}
            <div className="mt-4">
              <small className="text-light opacity-75">
                🏆 Trusted by 50,000+ budget travelers monthly
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}