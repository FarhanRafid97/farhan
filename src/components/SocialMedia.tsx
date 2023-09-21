'use client';
import React from 'react';

import { LinkedInIcon, GithubIcon } from './modules/SVG/Svg';
import { ArrowUpRight } from 'lucide-react';

const SocialMedia = () => {
  const socmedData = [
    {
      title: 'Farhan Rafid Syauqi',
      Icon: LinkedInIcon,
      url: 'https://www.linkedin.com/in/farhan-rafid-syauqi-268a9820b/',
    },
    { title: '@farhanrafid97', Icon: GithubIcon, url: 'https://github.com/FarhanRafid97' },
  ];
  return (
    <div>
      <h1 className="text-[32px] mb-4 text-text-normal text-start">Lets Connect</h1>
      <div className="flex gap-4 lg:flex-row flex-col ">
        {socmedData.map((socmed) => {
          return (
            <a
              href={socmed.url}
              key={socmed.title}
              target="_blank"
              className="border border-[#404040] w-full dark:border-neutral-700 bg-[#262626] hover:bg-[#262626]/30  dark:bg-neutral-800 rounded flex cursor-pointer items-center justify-between px-3 py-4 "
            >
              <div className="flex items-center gap-2">
                <socmed.Icon className="text-red-100" />
                <p className="h-fit text-text-normal font-semibold">{socmed.title}</p>
              </div>
              <div className="text-neutral-700 rounded bg-white/20 p-2 dark:text-neutral-300">
                <ArrowUpRight color="white" size={16} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
