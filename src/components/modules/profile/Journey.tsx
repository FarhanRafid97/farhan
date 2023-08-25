import Image from 'next/image';
import React from 'react';

const Journey = () => {
  return (
    <section className="section-container bg-primary">
      <div className="flex w-full h-full gap-[100px] justify-between px-[20px] md:px-[100px] py-8 ">
        <div className="flex h-full mt-12 flex-col gap-4 w-full lg:w-[540px]">
          <h1 className="text-[56px] font-bold text-secondary">My Journey</h1>
          <div className="w-full flex flex-col gap-4 text-secondary/80 text-[14px] ">
            <p className="font-bold">
              Not long ago, I jumped into coding with a 6-month bootcamp on fullstack development
              using Node.js and React. Those months were a whirlwind of learning HTML, CSS, and
              JavaScript, and I loved every challenge.
            </p>
            <p className="font-bold">
              But let me tell you the highlight: the final project. It was a chance to show off all
              that I had learned. With the guidance of mentors and my bootcamp buddies, I crafted a
              web application that I was truly proud of. When I hit that submit button, it was like
              sending my dreams into the digital universe.
            </p>
            <p className="font-bold">
              After bootcamp, I landed a cool job as a Fullstack Developer. I worked on exciting
              projects using Next.js, TypeScript, and even delved into GoLang and gRPC
              microservices. It felt like a coding adventure.
            </p>
            <p className="font-bold">
              {`As the bootcamp chapter came to a close,I landed an incredible job as a Fullstack Developer. My role
              involved working on projects using Next.js and TypeScript. But that's
              not where the story ends – I also dived into the exciting universe of GoLang and gRPC
              microservices. It felt like leveling up in a video game!`}
            </p>
            <p className="font-bold">
              {`  As I sat there, coding away on my computer, I couldn't help but feel proud of how far
              I'd come. From a bootcamp student to a full-fledged Fullstack Developer, I was living
              my coding dream. And the best part? The adventure was just beginning – there were more
              languages to learn, more projects to create, and a whole world of coding magic waiting
              to be explored.`}
            </p>
          </div>
        </div>

        <div className="hidden lg:flex h-full w-fit  items-center">
          <div className="w-[400px]  h-[340px]">
            <Image
              src="/assets/journey.png"
              width={0}
              height={0}
              className="w-[450px]  h-[340px] relative"
              sizes="100vw"
              alt="good ya"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
