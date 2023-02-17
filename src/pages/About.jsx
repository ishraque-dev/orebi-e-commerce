import React from 'react';
import { Heading, Breadcrumb, Image } from '../components/UI';
import usePageTitle from '../hooks/usePageTitle';
import { images } from '../assets/constants';
function About() {
  usePageTitle('Products');
  return (
    <div className="mx-auto my-16 max-w-container px-5 lg:px-0">
      <Heading title="About" />
      <div className="mt-5"></div>
      <Breadcrumb />
      <div className="mt-5 flex w-full justify-around lg:mt-20 ">
        <div className="relative w-[45%]">
          <Image src={images.boxShow5} className="w-full" />
          <div className="font-regular absolute bottom-2 left-0 right-0 mx-auto w-[100px] bg-[#262626] p-1 text-center font-dm text-white md:bottom-5 md:p-3 lg:w-[200px] ">
            asdfadsf
          </div>
        </div>
        <div className="relative w-[45%]">
          <Image src={images.product} className="w-full" />
          <div className="font-regular absolute bottom-2 left-0 right-0 mx-auto w-[100px] bg-[#262626] p-1 text-center font-dm text-white md:bottom-5 md:p-3 lg:w-[200px] ">
            asdfadsf
          </div>
        </div>
      </div>
      <div className="mx-2 mt-5 text-justify lg:mt-10 lg:text-center">
        <p className="font-dm text-sm md:text-xl ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur,
          dolore? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Aspernatur, dolore? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Aspernatur, dolore?
        </p>
      </div>
      <div className="mt-20 flex flex-wrap justify-around gap-x-5 md:gap-x-10">
        <div className="mb-5 w-[300px] lg:mb-0">
          <h3 className="mb-3 font-dm text-2xl font-medium">Our Vision</h3>
          <p className="text-justify font-dm text-sm text-[#767676] md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            itaque dicta quo eius repudiandae quas. Tenetur libero enim
            distinctio asperiores deserunt beatae provident fuga quisquam
            perferendis autem minus ut ea necessitatibus, ratione quasi
            repudiandae voluptas architecto non animi illo maiores sint. Vero
            sequi iure unde suscipit, aliquam tempore fuga excepturi.
          </p>
        </div>
        <div className="mb-5 w-[300px] lg:mb-0">
          <h3 className="mb-3 font-dm text-2xl font-medium">Our Story</h3>
          <p className="text-justify font-dm text-sm text-[#767676] md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            itaque dicta quo eius repudiandae quas. Tenetur libero enim
            distinctio asperiores deserunt beatae provident fuga quisquam
            perferendis autem minus ut ea necessitatibus, ratione quasi
            repudiandae voluptas architecto non animi illo maiores sint. Vero
            sequi iure unde suscipit, aliquam tempore fuga excepturi.
          </p>
        </div>
        <div className="mb-5 w-[300px] lg:mb-0">
          <h3 className="mb-3 font-dm text-2xl font-medium">Our Brands</h3>
          <p className="text-justify font-dm text-sm text-[#767676] md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            itaque dicta quo eius repudiandae quas. Tenetur libero enim
            distinctio asperiores deserunt beatae provident fuga quisquam
            perferendis autem minus ut ea necessitatibus, ratione quasi
            repudiandae voluptas architecto non animi illo maiores sint. Vero
            sequi iure unde suscipit, aliquam tempore fuga excepturi.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
