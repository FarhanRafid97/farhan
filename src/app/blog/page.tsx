import PostPreview from '@/components/PostPreview';
import style from '@/styles/card.module.css';
import getPostMetadata from '@/utils/getPosts';

export default async function Blog() {
  const data = getPostMetadata();

  return (
    <div className="flex  items-center justify-center">
      <div className={`${style.cards} w-full flex flex-col gap-4`}>
        {data.map((post, i) => (
          <PostPreview
            slug={post.slug}
            date={post.date}
            subtitle={post.subtitle}
            tags={post.tags}
            key={i}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
}
