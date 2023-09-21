import React from 'react';

const LifeTimeline = () => {
  return (
    <div>
      <h1 className="text-[32px] mb-4 text-text-normal text-start ">My Journey</h1>
      <div className="step ">
        <div>
          <div className="circle" />
        </div>
        <div>
          <div className="title text-white">Universitas Upi YPTK</div>
          <div className="caption ">
            <p className="text-white">Information System</p>
            <p>2015 - 2020</p>
          </div>
        </div>
      </div>
      <div className="step">
        <div>
          <div className="circle" />
        </div>
        <div>
          <div className="title text-white">Bootcamp Binar Academy</div>

          <div className="caption ">
            <p className="text-white">Fullstack Web Developer</p>
            <p>FEB/2022 - OCT/2020</p>
          </div>
        </div>
      </div>
      <div className="step step-active">
        <div>
          <div className="circle " />
        </div>
        <div>
          <div className="title text-white">Bank BRI</div>

          <div className="caption ">
            <p className="text-white">Frontend Developer</p>
            <p className="">OCT/2022 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeTimeline;
