import React from 'react';

function Banner() {
  return (
    <div className="relative bg-[url('/mainbanner.png')] bg-cover bg-center rounded-b-sm h-[366px]">
      {/* Text Container */}
      <div className="absolute text-center bottom-5 right-5 md:bottom-7 md:right-10">
        <h1 className="text-4xl leading-tight text-white md:text-7xl lg:text-9xl">
          ร้านหลบมุม
        </h1>
        <p className="text-lg italic text-white md:text-2xl lg:text-3xl">
          cafe and Restaurant
        </p>
      </div>
    </div>
  );
}

export default Banner;