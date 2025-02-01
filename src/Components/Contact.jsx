import React from "react";

const ContactForm = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <h4 className="text-center font-bold">Get in Touch</h4>
        <h2 className="text-[45px] font-black text-center">Contact me</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <form className="max-w-2xl mx-auto  p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-[#5e3bee] rounded-md shadow-sm"
                placeholder="Javeriya"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-[#5e3bee] rounded-md shadow-sm"
                placeholder="Saleem"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-[#5e3bee] rounded-md shadow-sm"
                placeholder="javeriya@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-[#5e3bee] rounded-md shadow-sm"
                placeholder="03124567890"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-[#5e3bee] rounded-md shadow-sm"
              rows="4"
              placeholder="Type your message..."
            ></textarea>
          </div>
          <div className="flex mt-6 justify-center ">
            <button
              type="submit"
              className=" bg-[#5e3bee] text-white py-2 px-6 rounded-md hover:bg-[#6846fc] cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;