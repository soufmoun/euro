import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export default function TipPage({params}:{params:{slug:string}}){
  const filePath = path.join(process.cwd(),'content','tips', `${params.slug}.md`)
  const file = fs.readFileSync(filePath,'utf-8')
  const {data, content} = matter(file)
  return (
    <section>
      <h1>{data.title}</h1>
      <p className="text-muted">{data.description}</p>
      <div className="mt-3"><MarkdownRenderer content={content} /></div>
    </section>
  )
}