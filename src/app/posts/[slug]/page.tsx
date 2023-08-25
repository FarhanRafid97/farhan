import fs from 'fs';

import getPostMetadata from '@/utils/getPosts';
import matter from 'gray-matter';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const getPostContent = (slug: string) => {
  const folder = 'src/content/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="w-full flex justify-center flex-col items-center ">
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose">
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  showLineNumbers={true}
                  PreTag="div"
                  {...props}
                  style={atomOneDark}
                >
                  {String(children)}
                </SyntaxHighlighter>
              ) : (
                <code {...props}>{children}</code>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default PostPage;
