import React from 'react';
import { Heading, Breadcrumb, CommonInput, Button } from '../components/UI';
function Contact() {
  return (
    <div className="mx-auto  mt-10 max-w-container px-2 lg:px-3">
      <Heading title="Contact" />
      <div className="mt-5"></div>
      <Breadcrumb />
      <div className="mt-10 lg:mt-20">
        <h1 className="font-dm text-3xl font-medium">Fill up a Form</h1>
        <div className="w-[80%] md:w-1/2">
          <form action="">
            <CommonInput title="Name" type="text" />
            <CommonInput title="Email" type="email" />
            <div>
              <h3 className="my-5 font-dm text-xl font-medium">Message</h3>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="3"
                placeholder="Your message here"
                className="border-b-2 outline-none"
              ></textarea>
            </div>
            <Button className="mt-3 bg-primary-black px-8 py-1 font-dm text-xl text-white md:py-3 md:px-14">
              Post
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
