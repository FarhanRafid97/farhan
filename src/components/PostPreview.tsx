'use-client';

import { PostMetadata } from '@/types/Posts';
import Link from 'next/link';
import { forwardRef } from 'react';

const PostPreview = forwardRef<HTMLDivElement, PostMetadata>(({ ...props }, ref) => {
  return (
    <div ref={ref} className=" card">
      <p className="text-sm text-slate-400">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
});

PostPreview.displayName = 'PostPreview';

export default PostPreview;
