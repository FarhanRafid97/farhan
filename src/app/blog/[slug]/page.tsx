import fs from 'fs';

import BackArrowBlog from '@/components/BackArrowBlog';

import matter from 'gray-matter';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import getPostMetadata from '@/utils/getPosts';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PostPage = (props: any) => {
  const slug = props.params.slug;

  const post = getPostContent(slug);
  return (
    <div className="w-full flex justify-center  flex-col items-center  relative">
      <div className="mb-8">
        <BackArrowBlog />
      </div>

      <article className="prose    overflow-hidden  prose-invert">
        <ReactMarkdown
          className="max-w-[90vw] px-1 md:w-full"
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
