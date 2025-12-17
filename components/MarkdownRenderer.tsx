// Current issue: Importing FadeIn dynamically but not using it
const FadeIn = dynamic(() => import('../components/FadeIn'), {
  loading: () => <div className="opacity-0" />,
});

// Remove the dynamic import since you're not using FadeIn
// Or actually use it:
export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <FadeIn>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </FadeIn>
  );
}