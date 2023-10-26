import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="pt-[66.5px]">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center px-4 w-full py-32 md:py-32 relative">
        <Image
          src="/contact.jpg"
          className="absolute top-0 left-0 h-full w-full z-0 object-cover"
          height={1000}
          width={1000}
          alt="Property"
          loading="lazy"
        />
        <div className="bg-black absolute top-0 left-0 h-full w-full bg-opacity-60 backdrop-blur-[2px] z-[1]" />
        <div className="flex flex-col items-center relative z-[2]">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 flex flex-col items-center py-16 md:py-24 bg-secondary">
        <div className="w-full max-w-4xl pb-8 border-b border-primary">
          <div className="flex flex-col gap-4 w-fit">
            <div>
              <p className="font-bold border-b border-primary text-primary mb-px w-fit pr-4">
                Our Email
              </p>
              <p>contact@website-domain.com</p>
            </div>
            <div>
              <p className="font-bold border-b border-primary text-primary mb-px w-fit pr-4">
                Our Phone
              </p>
              <p>(555) 123-4567</p>
            </div>
            <div>
              <p className="font-bold border-b border-primary text-primary mb-px w-fit pr-4">
                Our Address
              </p>
              <p>
                123 Main Street Suite 456
                <br /> Cityville, State 78901 United States
              </p>
            </div>
          </div>
        </div>
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-4xl pt-8">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-primary text-sm">First Name</label>
                <input className="w-full p-2 border border-primary outline-none focus:shadow-md bg-opacity-30 bg-white" />
              </div>
              <div>
                <label className="text-primary text-sm">Last Name</label>
                <input className="w-full p-2 border border-primary outline-none focus:shadow-md bg-opacity-30 bg-white" />
              </div>
            </div>
            <div>
              <label className="text-primary text-sm">Email</label>
              <input className="w-full p-2 border border-primary outline-none focus:shadow-md bg-opacity-30 bg-white" />
            </div>
            <div>
              <label className="text-primary text-sm">Phone No.</label>
              <input className="w-full p-2 border border-primary outline-none focus:shadow-md bg-opacity-30 bg-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-primary text-sm">Message</label>
            <textarea className="w-full flex-1 p-2 border border-primary outline-none focus:shadow-md bg-opacity-30 bg-white" />
          </div>
          <div className="lg:col-span-2 flex flex-col items-center">
            <button className="font-medium px-6 py-3 mt-8 text-white bg-primary hover:bg-primary1 transition-all">
              Submit
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
