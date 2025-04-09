import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_jcns6cz','template_deg0b3c',form.current, {
      publicKey: '6Nq48mFD4CvnohGPO',
    })
    .then(
      () => {
        console.log('SUKSES')
      },
      (Error) => {
        console.log('FAILRD', Error.text)
      },
    );

  };

  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 overflow-hidden">
      <h1 className="font-bold text-2xl md:text-4xl">
        Contact
        <span className="ml-2 underline underline-offset-2 font-light decoration-1">With us</span>
      </h1>
      <p className="mt-4 text-center text-gray-500 max mb-4">Ready to Make a Move? Let’s Build Your Future Together</p>
      {/* form */}
      <form 
      ref={form}
      action="" 
      className="mt-6 flex-col md:flex-col"
      onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-6">
          {/* nama */}
          <div>
            <label htmlFor="" className="block text-gray-800 mb-1">
              Your Name
            </label>
            <input name="name" type="text" placeholder="Your Name" className="border border-gray-300 items-center px-4 rounded-md min-h-10 w-80 md:w-70 text-gray-500 shadow-black" />
          </div>
          {/* email */}
          <div>
            <label htmlFor="" className="block text-gray-800 mb-1">
              Your Email
            </label>
            <input name="email" type="email" placeholder="Your Email" className="border border-gray-300 items-center px-4 rounded-md min-h-10 w-80 md:w-70 text-gray-500" />
          </div>
        </div>
        <div className="pt-4">
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea name="message" id="message" placeholder="Message" rows={5} className="border  border-gray-300 px-4 py-2 rounded-md w-80 md:w-[36rem] text-gray-500 resize-none"></textarea>
        </div>
        <div className="items-center flex justify-center bg-blue-600 text-white rounded py-2 w-40 mt-8">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
