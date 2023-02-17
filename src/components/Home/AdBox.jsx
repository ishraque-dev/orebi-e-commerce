import React from 'react';
import Marquee from 'react-fast-marquee';
function AdBox({ images, Image }) {
  return (
    <div className="flex w-[45%] flex-wrap items-start justify-center   ">
      <div className="top  flex w-full items-center justify-center gap-1 md:gap-2  ">
        <div className="group relative h-full w-[40%]">
          <Image
            src={images.comWithTab}
            className="h-full w-full object-contain"
          />
          <div className="absolute bottom-0 left-0 h-full w-full bg-black opacity-0 duration-300 ease-in group-hover:opacity-50 ">
            <div className="flex h-full items-center justify-center">
              <span className="font-dm text-xl font-bold text-white">
                {' '}
                30% Off
              </span>
            </div>
          </div>
        </div>
        <div className="group relative h-full w-[40%]">
          <Image
            src={images.compTable}
            className="h-full w-full object-contain"
          />
          <div className="absolute bottom-0 left-0 h-full w-full bg-black opacity-0 duration-300 ease-in group-hover:opacity-50 ">
            <div className="flex h-full items-center justify-center">
              <span className="font-dm text-xl font-bold text-white">
                {' '}
                33% Off
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex w-full items-center justify-center gap-1 md:gap-2 lg:mt-2"></div>
      <div className=" flex justify-center ">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Image
            src={images.ad4}
            className="mb-2 h-full w-[81%] object-contain"
          />
          <Image
            src={images.under99}
            className="h-full w-[81%] object-contain "
          />
        </div>
      </div>
    </div>
  );
}

export default AdBox;
