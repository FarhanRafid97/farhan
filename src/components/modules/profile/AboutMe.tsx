import React from 'react';
import { FirstAsset, SeccondAsset } from './assets';

const AboutMe = () => {
  return (
    <section className="section-container">
      <div className="w-full h-screen flex flex-col p-4">
        <div className="flex-1  h-full">
          <div className="w-[40px] flex-1">
            <SeccondAsset />
          </div>
          <div className="flex-2 w-full md:w-1/2 mt-8 py-4 padding-left-layout ">
            <h1 className="text-[47px] lg:text-[57px] text-primary text-center md:text-start font-bold mb-4">
              Backend Engineering
            </h1>
            <p className="text-ascent text-sm lg:text-base text-justify">
              Backend engineer with a passion for building robust systems. Proficient in Golang and
              Node.js, I specialize in developing microservices with a focus on efficient
              communication through gRPC. My expertise extends to SQL and Redis, enabling me to
              design and optimize databases for high-performance applications.
            </p>
          </div>
        </div>
        <div className="flex-1 font-thin h-full flex relative">
          <div className="w-[40px] flex-1">
            <FirstAsset />
          </div>
          <div className="flex-2 w-full md:w-1/2 mt-3 py-4 padding-right-layout">
            <h1 className="text-[47px] lg:text-[57px] text-primary text-center md:text-end lg:text-start font-bold mb-4">
              Frontend Engineering
            </h1>
            <p className="text-ascent text-justify">
              Experienced frontend engineer specializing in Next.js and TypeScript environments.
              Proficient in crafting seamless user experiences through dynamic Next.js applications,
              enhanced by the power of TypeScript for robust and error-free code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
