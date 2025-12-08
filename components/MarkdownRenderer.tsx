// components/MarkdownRenderer.tsx
'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image';
import dynamic from 'next/dynamic';

const FadeIn = dynamic(() => import('../components/FadeIn'), {
  loading: () => <div className="opacity-0" />,
});

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <article className="prose">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  )
}
