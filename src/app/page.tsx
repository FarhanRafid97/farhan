'use client';

import Navbar from '@/components/modules/Navbar/Navbar';
import AboutMe from '@/components/modules/profile/AboutMe';
import Hero from '@/components/modules/profile/Hero';
import Journey from '@/components/modules/profile/Journey';
import { ParallaxText } from '@/components/modules/profile/RunningText';

export default function App() {
  return (
    <>
      <div className="h-[500vh]">
        <Navbar />
        <Hero />
        <AboutMe />
        <Journey />
        <div className="flex flex-col gap-[-10px] mt-12">
          <ParallaxText baseVelocity={-5}>Farhan Rafid Syauqi</ParallaxText>
          <ParallaxText baseVelocity={-5}>Frontend Engineer</ParallaxText>
        </div>
      </div>
    </>
  );
}
