import PostPreview from '@/components/PostPreview';
import style from '@/styles/card.module.css';
import getPostMetadata from '@/utils/getPosts';

export default async function Blog() {
  const data = getPostMetadata();

  return (
    <div className="flex  items-center justify-center bg-white">
      <div className="container px-4 md:px-20 ">
        <div className={`${style.cards} w-full  grid grid-cols-3 gap-4 p-4`}>
          {data.map((post, i) => (
            <PostPreview
              slug={post.slug}
              date={post.date}
              subtitle={post.subtitle}
              key={i}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
