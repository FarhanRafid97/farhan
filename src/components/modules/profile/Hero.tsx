import React from 'react';
import Image from 'next/image';
import { HeroAsset, LeftHeroAsset } from './assets';

const Hero = () => {
  return (
    <section className="section-container ">
      <div className="w-full h-full  flex">
        <div className="w-full lg:w-[70%] p-4 h-full padding-left-layout  flex   bg-primary">
          <div className="my-auto lg:w-[500px]  w-full">
            <h1 className="text-secondary font-bold text-[56px]">Fullstack Engineer.</h1>
            <p className="text-white/80">
              Passionate full-stack engineer with a flair for crafting innovative web solutions.
              Bridging creativity and functionality to bring ideas to life.
            </p>
          </div>
          <LeftHeroAsset />
        </div>
        <div className="lg:w-[30%] h-full relative bg-secondary">
          <HeroAsset />
          <div className=" w-[240px] h-[340px] lg:block hidden absolute top-[300px]  left-[-140px] border-[4px] border-white  " />
          <div className=" absolute lg:block hidden  top-1/2 transform -translate-y-1/2 left-[-180px]    w-[250px] h-[320px]">
            <Image
              src="/assets/profilePict4.jpg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-[260px] rounded h-[370px]"
              alt="good"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
