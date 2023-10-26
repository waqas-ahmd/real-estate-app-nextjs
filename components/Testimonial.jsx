import { MdFormatQuote } from "@react-icons/all-files/md/MdFormatQuote";
import Image from "next/image";

const Testimonial = ({ data }) => {
  return (
    <div className="border border-gray-300 p-4 sm:px-6 lg:px-8 bg-white flex flex-col h-full cursor-pointer justify-between">
      <div>
        <MdFormatQuote className="text-5xl text-primary -scale-100 -translate-x-2" />
        <div className="italic text-sm">{data.review}</div>
      </div>
      <div className="flex flex-row items-center gap-2 mt-6">
        <Image
          src="/persons/p1.jpg"
          height={128}
          width={120}
          alt="person"
          className="h-12 w-12 rounded-full border border-neutral-400"
        />
        <div className="flex flex-col">
          <div className="font-bold text-primary">{data.name}</div>
          <div className="text-sm font-medium text-neutral-400">{data.bio}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
