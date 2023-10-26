import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="border border-gray-300 bg-white flex flex-col sm:flex-row lg:flex-col hover:border-neutral-400 hover:shadow-md transition-all cursor-pointer">
      <div className="flex-1">
        <Image
          src="/blog.jpg"
          height={450}
          width={600}
          alt="Post"
          className="w-full"
        />
      </div>
      <div className="h-full flex flex-col justify-center flex-[2] p-4">
        <p
          className="text-primary font-medium font-lato mb-1 text-sm"
          dangerouslySetInnerHTML={{ __html: new Date().toLocaleDateString() }}
        >
          {/* {new Date().toLocaleDateString()} */}
        </p>
        <h4 className="line-clamp-1 font-bold text-lg text-black">
          Nostrud adipisicing ullamco ea laboris mollit aute mollit deserunt
          elit.
        </h4>
        <h4 className="line-clamp-2 font-medium text-sm text-neutral-600">
          Nulla officia fugiat do fugiat elit anim deserunt adipisicing id in
          exercitation enim eu sit. Elit non voluptate qui qui exercitation
          Lorem occaecat tempor dolor pariatur officia. Laborum fugiat irure
          laboris amet.
        </h4>
      </div>
    </div>
  );
};

export default BlogCard;
