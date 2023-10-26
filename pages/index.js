import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { BiChevronRight } from "@react-icons/all-files/bi/BiChevronRight";
import { BiChevronLeft } from "@react-icons/all-files/bi/BiChevronLeft";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";

import BlogCard from "../components/BlogCard";
import PropertyCard from "../components/PropertyCard";
import Testimonial from "../components/Testimonial";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getFeatured } from "../API";

const heroImage =
  "https://www.thebraggingmommy.com/wp-content/uploads/2020/06/house-home-real-estate-1100x728.png";

const testimonials = [
  {
    name: "John Smith",
    bio: "Real Estate Investor",
    review:
      "I recently bought a property through this website, and I was amazed by the professionalism of the team. They helped me find the perfect investment property that exceeded my expectations. Highly recommended!",
  },
  {
    name: "Alice Johnson",
    bio: "First-Time Homebuyer",
    review:
      "As a first-time homebuyer, I had a lot of questions and concerns. The agents at this website guided me through the entire process with patience and expertise. I'm now a happy homeowner, thanks to them.",
  },
  {
    name: "David Martinez",
    bio: "Seller",
    review:
      "Selling my property was a breeze with this website. Their marketing strategies are top-notch, and they managed to sell my house quickly at a great price. I couldn't be happier with the outcome.",
  },
  {
    name: "Sarah Adams",
    bio: "Real Estate Enthusiast",
    review:
      "I've been following this website for a while, and their blog posts and property listings are a goldmine of information. Their dedication to helping people make informed decisions in real estate is commendable.",
  },
  {
    name: "Michael Brown",
    bio: "Property Developer",
    review:
      "I've collaborated with the team behind this website on multiple real estate projects. Their extensive network and knowledge of the market have been invaluable to my business. It's a pleasure working with them.",
  },
  {
    name: "Emily Wilson",
    bio: "Retiree and Homebuyer",
    review:
      "In my retirement, I wanted to find the perfect place to settle down. The agents at this website understood my unique needs and helped me find a cozy home in a great community. It's the ideal place to enjoy my golden years.",
  },
];

export default function Home() {
  const [swiperIndex2, setSwiperIndex2] = React.useState(0);
  const [swiperRef2, setSwiperRef2] = React.useState(null);
  const [featured, setFeatured] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const data = await getFeatured();
      setFeatured(data);
    })();
  }, []);

  return (
    <div className="pt-[66.5px]">
      <Navbar />

      {/* Hero Section */}
      <section
        className="flex flex-col justify-center items-center px-4 w-full py-32 md:py-32 relative"
        // style={{
        //   background: `url(${heroImage})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <Image
          src="/property2.jpg"
          className="absolute top-0 left-0 h-full w-full z-0 object-cover"
          height={1000}
          width={1000}
          alt="Property"
          loading="lazy"
        />
        <div className="bg-black absolute top-0 left-0 h-full w-full bg-opacity-60 backdrop-blur-[2px] z-[1]" />
        <div className="flex flex-col items-center relative z-[2]">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Main Heading
          </h1>
          <p className="text-xl font-medium text-white mb-12 text-center max-w-xl">
            Nulla fugiat labore consequat officia occaecat excepteur voluptate
            officia magna ad sit Lorem nulla laborum.
          </p>

          <form className=" w-full md:w-96 flex flex-col relative overflow-hidden">
            <div className="relative w-full">
              <input
                className="p-3 outline-none font-medium w-full peer shadow-md"
                placeholder="Search Properties"
              />
              <button className="absolute transition-all duration-500 top-1/2 -right-16 peer-focus:right-0 h-full px-4 bg-primary hover:bg-primary1 -translate-y-1/2">
                <BiSearch className="text-2xl text-white" />
              </button>
            </div>
            <p className="text-neutral-300 italic text-xs mt-1">
              eg. Apartments in HongKong
            </p>
          </form>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="sm:px-4 flex flex-col items-center py-16 md:py-24 bg-secondary">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          Featured Listings
        </h2>

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
          {featured.map((property, i) => (
            <PropertyCard key={i} property={property} />
          ))}
        </div>

        <div className="sm:hidden block w-full relative">
          <div className="absolute top-0 right-0 h-full w-[10%] bg-gradient-to-l from-[#BCA37Faa] to-[#BCA37F00] z-10 pointer-events-none"></div>
          <div className="absolute top-0 left-0 h-full w-[10%] bg-gradient-to-r from-[#BCA37Faa] to-[#BCA37F00] z-10 pointer-events-none"></div>
          <Swiper
            slidesPerView={1.3}
            className="w-full"
            spaceBetween={20}
            centeredSlides={true}
          >
            {featured.map((property, i) => (
              <SwiperSlide key={i}>
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className="font-bold px-6 py-3 mt-8 border border-neutral-300 hover:border-neutral-400 hover:shadow-md transition-all bg-white">
          Find Out More
        </button>
      </section>

      {/* About Section */}
      <section className="px-4 flex flex-col items-center py-16 md:py-24 bg-stone-800">
        <h2 className="text-2xl md:hidden font-bold mb-6 text-center text-stone-50">
          About Us
        </h2>
        <div className="flex flex-col-reverse gap-4 md:flex-row max-w-5xl">
          <div className="flex-[1.5] text-stone-50 my-auto">
            <h2 className="hidden md:block text-3xl lg:text-4xl font-bold mb-6 text-left text-stone-50">
              About Us
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
            <button className="font-medium px-8 py-2 mt-4 border border-white transition-all hover:text-white hover:bg-stone-900">
              More
            </button>
          </div>
          {/* <div className="flex-1 relative aspect-[1.5]"> */}
          <div className="flex-1 flex flex-col justify-center">
            <Image
              src="/about.jpg"
              height={400}
              width={600}
              className="object-cover w-full aspect-[1.5] md:aspect-square"
              alt="About"
            />
          </div>
          {/* </div> */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="sm:px-4 flex flex-col items-center py-16 md:py-24 bg-stone-100">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          Client Testimonials
        </h2>
        <div className="w-full max-w-5xl relative sm:px-1">
          <div className="absolute hidden sm:flex top-0 -right-3 h-full w-8 z-10 flex-col justify-center items-start">
            <div
              onClick={() => swiperRef2?.slideNext()}
              className={`bg-white border border-neutral-400 h-8 w-8 rounded-full ${
                swiperIndex2 === testimonials.length - 3
                  ? "lg:pointer-events-none"
                  : ""
              } ${
                swiperIndex2 === testimonials.length - 2
                  ? "sm:pointer-events-none"
                  : ""
              }
              flex items-center justify-center cursor-pointer opacity-50 hover:opacity-100 hover:shadow-md transition-all`}
            >
              <BiChevronRight className="text-primary text-2xl" />
            </div>
          </div>
          <div className="absolute hidden sm:flex top-0 -left-3 h-full w-8 z-10 flex-col justify-center items-end">
            <div
              onClick={() => swiperRef2?.slidePrev()}
              className={`bg-white border border-neutral-400 h-8 w-8 rounded-full  ${
                swiperIndex2 === 0 ? "sm:pointer-events-none" : ""
              } flex items-center justify-center cursor-pointer opacity-50 hover:opacity-100 hover:shadow-md transition-all`}
            >
              <BiChevronLeft className="text-primary text-2xl" />
            </div>
          </div>
          <Swiper
            slidesPerView={1.33}
            centeredSlides={true}
            spaceBetween={20}
            autoHeight={true}
            onSlideChange={(a) => setSwiperIndex2(a.activeIndex)}
            onInit={(e) => setSwiperRef2(e)}
            breakpoints={{
              640: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} style={{ height: "100%" }}>
                <Testimonial data={t} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex sm:hidden flex-row items-center justify-center gap-3 mt-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`${
                  swiperIndex2 === i ? "bg-primary" : "bg-neutral-400"
                } transition-all h-2 w-2 rounded-full`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="px-4 flex flex-col items-center py-16 md:py-24 bg-stone-800">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-stone-50 text-center">
          Recent Articles
        </h2>

        <div className="grid lg:grid-cols-3 gap-4 max-w-5xl">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <button className="font-bold px-6 py-3 mt-8 border border-neutral-300 hover:bg-stone-900 transition-all text-stone-50">
          More Articles
        </button>
      </section>

      {/* Contact Section */}
      <section className="px-4 flex flex-col items-center py-16 md:py-24 bg-secondary">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          Contact Us
        </h2>

        <form className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-4xl">
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
}
