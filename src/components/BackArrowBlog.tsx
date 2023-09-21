'use client';
import { ChevronLeft } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const BackArrowBlog = () => {
  const param = useSearchParams().get('backUrl');

  return (
    <div className=" absolute left-0 top-0 ">
      <Link href={`/${param ?? ''}`}>
        <ChevronLeft className="text-white cursor-pointer" />
      </Link>
    </div>
  );
};

export default BackArrowBlog;
