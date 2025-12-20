'use client';

import { marked } from 'marked';
import { useEffect, useState } from 'react';

interface Props {
  content: string;
}

export default function MarkdownRenderer({ content }: Props) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const parseMarkdown = async () => {
      marked.setOptions({
        gfm: true,
        breaks: true,
      });
      
      const parsedHtml = await marked(content);
      setHtmlContent(parsedHtml);
    };

    parseMarkdown();
  }, [content]);

  return (
    <div 
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}