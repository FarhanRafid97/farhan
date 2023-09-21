import PostPreview from '@/components/PostPreview';
import { PostMetadata } from '@/types/Posts';
import { useEffect, useState } from 'react';

const TopThreePosts = () => {
  const [data, setData] = useState<PostMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    // https://farhan-ten.vercel.app/api/top-3-posts
    const getdata = async () => {
      const dataReq = await fetch('http://localhost:3000/api/top-3-posts');
      const jsonData = await dataReq.json();
      console.log(jsonData);
      if (!ignore) {
        setData(jsonData.response);
      }
      setLoading(false);
    };
    getdata();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div className="flex flex-col  ">
      <h1 className="text-[32px] mb-4 text-text-normal text-start">Latest Posts</h1>
      <div className={` w-full flex  flex-col gap-4`}>
        {loading ? (
          <>
            <div className="border border-[#404040] w-full dark:border-neutral-700 bg-[#262626] hover:bg-[#262626]/30  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 animate-pulse min-h-[90px]" />
            <div className="border border-[#404040] w-full dark:border-neutral-700 bg-[#262626] hover:bg-[#262626]/30  dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 animate-pulse min-h-[90px]" />
          </>
        ) : (
          data
            ?.map((post, i) => (
              <PostPreview
                slug={post.slug}
                date={post.date}
                subtitle={post.subtitle}
                tags={post.tags}
                key={i}
                title={post.title}
              />
            ))
            .reverse()
        )}
      </div>
    </div>
  );
};

export default TopThreePosts;
