// components/SectionHeader.tsx
interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
  }
  
  export default function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
    return (
      <div className={`mb-5 ${centered ? 'text-center' : ''}`}>
        <h2 className="fw-bold mb-3">{title}</h2>
        {subtitle && <p className="text-muted lead">{subtitle}</p>}
      </div>
    );
  }