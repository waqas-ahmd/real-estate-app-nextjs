/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { PiListMagnifyingGlassBold } from "@react-icons/all-files/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faList,
  faMagnifyingGlassLocation,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faStarHalfStroke } from "@fortawesome/free-regular-svg-icons";

const teamMembers = [
  {
    name: "John Smith",
    position: "Founder and CEO",
    image: "/persons/01.png",
  },
  {
    name: "Emily Davis",
    position: "Real Estate Agent",
    image: "/persons/02.png",
  },
  {
    name: "Michael Johnson",
    position: "Marketing Manager",
    image: "/persons/03.png",
  },
  {
    name: "Sarah Clark",
    position: "Property Manager",
    image: "/persons/04.png",
  },
];

const About = () => {
  return (
    <div className="pt-[66.5px]">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center px-4 w-full py-32 md:py-32 relative">
        <Image
          src="/about1.jpg"
          className="absolute top-0 left-0 h-full w-full z-0 object-cover"
          height={1000}
          width={1000}
          alt="Property"
          loading="lazy"
        />
        <div className="bg-black absolute top-0 left-0 h-full w-full bg-opacity-60 backdrop-blur-[2px] z-[1]" />
        <div className="flex flex-col items-center relative z-[2]">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl font-medium text-white mb-12 text-center max-w-xl">
            Nulla fugiat labore consequat officia occaecat excepteur voluptate
            officia magna ad sit Lorem nulla laborum.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 flex flex-col items-center py-16 md:py-24 bg-stone-100">
        <h2 className="text-2xl sm:hidden font-bold mb-6 text-center ">
          Our Mission
        </h2>
        <div className="flex flex-col-reverse gap-4 md:gap-12 sm:flex-row max-w-5xl">
          <div className="flex-[1.5]  my-auto">
            <h2 className="hidden sm:block text-3xl lg:text-4xl font-bold mb-6 text-left ">
              Our Mission
            </h2>
            <p className="mb-2 text-justify">
              Elit sunt ut et minim velit excepteur nisi Lorem sit ullamco. Amet
              qui eiusmod elit ad consequat exercitation mollit amet. Voluptate
              duis aliquip voluptate veniam dolor. Elit id deserunt tempor sunt
              velit exercitation deserunt ipsum anim dolore laborum sit
              occaecat. Minim sunt enim ex Lorem.
            </p>
            <p className="mb-2 text-justify">
              Non cillum pariatur exercitation commodo pariatur. Ad enim
              adipisicing incididunt elit commodo dolor anim proident voluptate
              duis. Ullamco deserunt velit pariatur nulla consequat laborum.
              Cillum ut reprehenderit magna aute sit laborum veniam dolore
              laboris et sunt. Enim exercitation reprehenderit et nulla ex. Duis
              do Lorem commodo amet.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <Image
              src="/placeholder.jpg"
              height={500}
              width={500}
              className="object-cover w-full aspect-[1.5] sm:aspect-square"
              alt="About"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 flex flex-col items-center py-16 md:py-24 bg-stone-100">
        <h2 className="text-2xl sm:hidden font-bold mb-6 text-center ">
          Our Values
        </h2>
        <div className="flex flex-col-reverse gap-4 md:gap-12 sm:flex-row-reverse max-w-5xl">
          <div className="flex-[1.5]  my-auto">
            <h2 className="hidden sm:block text-3xl lg:text-4xl font-bold mb-6 text-right ">
              Our Values
            </h2>
            <p className="mb-2 text-justify">
              Elit sunt ut et minim velit excepteur nisi Lorem sit ullamco. Amet
              qui eiusmod elit ad consequat exercitation mollit amet. Voluptate
              duis aliquip voluptate veniam dolor.
            </p>
            <p className="mb-2 text-justify">
              Non cillum pariatur exercitation commodo pariatur. Ad enim
              adipisicing incididunt elit commodo dolor anim proident voluptate
              duis. Ullamco deserunt velit pariatur nulla consequat laborum.
              Cillum ut reprehenderit magna aute sit laborum veniam dolore
              laboris et sunt. Enim exercitation reprehenderit et nulla ex. Duis
              do Lorem commodo amet.
            </p>
          </div>
          {/* <div className="flex-1 relative aspect-[1.5]"> */}
          <div className="flex-1 flex flex-col justify-center">
            <Image
              src="/placeholder.jpg"
              height={500}
              width={500}
              className="object-cover w-full aspect-[1.5] sm:aspect-square"
              alt="About"
            />
          </div>
          {/* </div> */}
        </div>
      </section>

      {/* USP Section */}
      <section className="px-4 flex flex-col items-center py-16 md:py-24 bg-stone-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-12 font-bold text-stone-50">
          What Sets Us Apart
        </h2>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl">
          <div className="flex flex-col items-center gap-3">
            <FontAwesomeIcon
              icon={faList}
              className="text-4xl p-6 rounded-full bg-secondary text-white aspect-square"
            />
            <h4 className="font-bold text-white text-center max-w-[200px]">
              Comprehensive Property Listings
            </h4>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FontAwesomeIcon
              icon={faMagnifyingGlassLocation}
              className="text-4xl p-6 rounded-full bg-secondary text-white aspect-square"
            />
            <h4 className="font-bold text-white text-center max-w-[200px]">
              Advanced Search Filters
            </h4>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FontAwesomeIcon
              icon={faBell}
              className="text-4xl p-6 rounded-full bg-secondary text-white aspect-square"
            />
            <h4 className="font-bold text-white text-center max-w-[200px]">
              Property Alerts
            </h4>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FontAwesomeIcon
              icon={faUserCheck}
              className="text-4xl p-6 rounded-full bg-secondary text-white aspect-square"
            />
            <h4 className="font-bold text-white text-center max-w-[200px]">
              Expert Real Estate Agents
            </h4>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-4xl p-6 rounded-full bg-secondary text-white aspect-square"
            />
            <h4 className="font-bold text-white text-center max-w-[200px]">
              Customer Support
            </h4>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              className="text-4xl p-6 rounded-full bg-secondary text-white aspect-square"
            />
            <h4 className="font-bold text-white text-center max-w-[200px]">
              User Reviews and Ratings
            </h4>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 flex flex-col items-center py-16 md:py-24 bg-secondary">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-12 text-center font-bold">
          Our Team
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-5xl">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <Image
                src={member.image}
                height={400}
                width={400}
                alt={member.name}
                className="w-full aspect-square object-cover"
              />

              <h4 className="font-bold text-center text-xl mt-2">
                {member.name}
              </h4>
              <p className="text-stone-800 text-center uppercase font-medium text-sm">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
