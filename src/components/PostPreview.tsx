'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PostPreview = ({ ...props }) => {
  const pathName = usePathname().split('/')[1];

  return (
    <Link href={`/blog/${props.slug}?backUrl=${pathName === '' ? '/' : pathName}`}>
      <div className="border border-[#404040] w-full dark:border-neutral-700 bg-[#262626] hover:bg-[#262626]/30  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 ">
        <div className="flex flex-col">
          <p className="font-bold text-white dark:text-neutral-100">{props.title}</p>
          <p className="text-white/60 text-sm  dark:text-neutral-400">{props.subtitle}</p>
          <p className="text-text-gray">{props.date}</p>
        </div>
        <div className="text-neutral-700 rounded bg-white/20 p-2 dark:text-neutral-300">
          <ArrowUpRight color="white" size={16} />
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
