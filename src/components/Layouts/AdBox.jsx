import React from 'react';
import Marquee from 'react-fast-marquee';
function AdBox({ images, Image }) {
  return (
    <div className="flex w-1/2 flex-wrap items-start justify-center   ">
      <div className="hidden w-[81%] justify-between bg-[#FEBD69] p-2 md:flex">
        <div>
          <h3 className="font-regular  inline-block animate-blinkingText font-dm text-base text-black lg:text-xl">
            Todays Hot Deals
          </h3>
        </div>
        <Marquee
          gradient={false}
          style={{
            width: '50%',
          }}
          speed={60}
          direction="left"
        >
          <span style={{ marginRight: '10px' }}>
            Limited period offers on every products.
          </span>
          <span style={{ marginRight: '10px' }}>
            Get discount and gifts offers now. Harry up!
          </span>
        </Marquee>
      </div>
      <div className="top  flex w-full items-center justify-center gap-1 md:gap-2  ">
        <div className="group relative h-full w-[40%]">
          <Image
            src={images.boxShow1}
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
            src={images.boxShow2}
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
      <div className="bottom  -mt-2 flex w-full items-center justify-center gap-1 md:-mt-5 md:gap-2 lg:-mt-6">
        <div className="group relative h-full w-[40%] ">
          <Image
            src={images.boxShow3}
            className="h-full w-full object-contain"
          />
          <div className="absolute bottom-0 left-0 h-full w-full bg-black opacity-0 duration-300 ease-in group-hover:opacity-50 ">
            <div className="flex h-full items-center justify-center">
              <span className="font-dm text-xl font-bold text-white">
                {' '}
                22% Off
              </span>
            </div>
          </div>
        </div>
        <div className="group relative h-full w-[40%]">
          <Image
            src={images.boxShow4}
            className="h-full w-full object-contain"
          />
          <div className="absolute bottom-0 left-0 h-full w-full bg-black opacity-0 duration-300 ease-in group-hover:opacity-50 ">
            <div className="flex h-full items-center justify-center">
              <span className="font-dm text-xl font-bold text-white">
                {' '}
                25% Off
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center ">
        <div className="flex h-full w-full justify-center">
          <Image src={images.ad4} className="h-full w-[81%] object-contain " />
        </div>
      </div>
    </div>
  );
}

export default AdBox;
