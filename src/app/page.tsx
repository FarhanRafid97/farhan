'use client';

import SocialMedia from '@/components/SocialMedia';
import TopThreePosts from '@/components/modules/posts/TopThreePosts';
import Image from 'next/image';
export default function App() {
  return (
    <div className="flex flex-col w-full gap-12 mb-[100px]">
      <ProfileSumarry />
      <TopThreePosts />
      <SocialMedia />
      {/* <LifeTimeline /> */}
    </div>
  );
}

const ProfileSumarry = () => {
  return (
    <div className="flex flex-col w-full gap-12 ">
      <div className="flex gap-4 mt-8 md:mt-12 flex-col md:flex-row">
        <div className="w-[180px] h-[150px] md:min-w-[130px] bg-white   rounded-[50%] overflow-hidden md:h-[140px]">
          <Image
            src="/assets/prof1.jpg"
            width={190}
            height={180}
            className="rounded-lg  "
            priority
            alt="profile pict"
          />
        </div>

        <div className="flex flex-col ">
          <h1 className="text-white/80 font-bold text-2xl">{`Hey, i'm Farhan 👋`}</h1>
          <p className="text-text-normal text-sm ">
            Hello, {`I'm`} a full-stack engineer. I currently work for{' '}
            <Highlight content="/assets/bri.png" /> , where I serve as both a frontend and backend.
            On the frontend, {`i'm`} use TypeScript and <Highlight content="Next.js" /> , while on
            the backend, {`i'm`} using <Highlight content="Golang" /> and gRPC. I also actively
            contribute to automation testing using Katalon studio
          </p>
        </div>
      </div>
    </div>
  );
};

const Highlight = ({ content }: { content: string }) => {
  if (content.includes('/')) {
    return (
      <span className="border border-neutral-200 dark:border-neutral-700 bg-[#262626] dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline">
        <Image
          src={content}
          width={25}
          height={25}
          className="w-auto h-auto"
          alt="content highligh"
        />
      </span>
    );
  }
  return (
    <span className="border border-neutral-200   bg-[#262626] dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-white  no-underline">
      {content}
    </span>
  );
};
