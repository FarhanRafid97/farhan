import React from 'react';
import style from '@/styles/card.module.css';
import Link from 'next/link';

interface CardInterface {
  title?: string;
  desc?: string;
  icon?: string;
  slug?: string;
}
const Card = React.forwardRef<HTMLDivElement, CardInterface>(({ title, slug }, ref) => {
  return (
    <div
      className={`${style.card}  relative h-80 w-full cursor-pointer rounded-xl bg-white/10`}
      ref={ref}
    >
      <Link href={`/posts/${slug}`}>
        <div className="absolute inset-1  z-20 rounded-[inherit] bg-[#171717] p-2">
          <div className="flex h-full flex-col justify-end p-10">
            ?<div className="mt-3 text-lg text-white/90">{title}</div>
            <p className="mt-4 text-white/60">
              {' '}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, impedit.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
