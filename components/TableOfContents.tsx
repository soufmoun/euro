// TableOfContents.tsx
export default function TableOfContents({ content }: { content: string }) {
    const headings = content.match(/^## (.*$)/gm) || [];
    
    return (
      <div className="card border-0 bg-light">
        <div className="card-body">
          <h6 className="fw-bold mb-3">📚 In this guide:</h6>
          <ul className="list-unstyled">
            {headings.map((heading, index) => (
              <li key={index} className="mb-2">
                <a href={`#${heading.replace('## ', '').toLowerCase().replace(/\s+/g, '-')}`}>
                  {heading.replace('## ', '')}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }