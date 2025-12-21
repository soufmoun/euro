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
      
      // SIMPLE FIX: Use regex to clean up image HTML
      const fixedHtml = parsedHtml
        // Remove inline styles from img tags
        .replace(/<img([^>]*)style="[^"]*"/gi, '<img$1')
        // Remove height/width attributes
        .replace(/<img([^>]*)height="[^"]*"/gi, '<img$1')
        .replace(/<img([^>]*)width="[^"]*"/gi, '<img$1')
        // Add our CSS class
        .replace(/<img/gi, '<img class="markdown-image"');
      
      setHtmlContent(fixedHtml);
    };

    parseMarkdown();
  }, [content]);

  return (
    <div 
      className="prose prose-lg max-w-none markdown-content"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}