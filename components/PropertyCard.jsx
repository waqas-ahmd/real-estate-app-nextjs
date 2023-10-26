import { HiLocationMarker } from "@react-icons/all-files/hi/HiLocationMarker";
import Image from "next/image";
import Link from "next/link";

const PropertyCard = ({ property }) => {
  return (
    <div className="border border-gray-300 p-2 bg-white flex flex-col hover:border-neutral-400 hover:shadow-md transition-all">
      {/* <div className="aspect-[1.4] w-full relative"> */}
      <Image
        height={320}
        width={450}
        className="w-full object-cover aspect-[1.4]"
        src={property.images[0]}
        alt="Property Name"
        quality={50}
      />
      {/* </div> */}

      <div className="mt-1 w-full">
        <p className="font-bold text-lg line-clamp-1">{property.name}</p>
        <div className="flex flex-row justify-between items-center mt-1">
          <div className="font-bold text-black text-sm flex flex-row items-center gap-1">
            <HiLocationMarker className="text-primary text-lg" />
            <p>{property.city}</p>
          </div>
          <p className="text-lg font-bold font-lato text-primary line-clamp-1">
            ${property.price}
          </p>
        </div>
        <p className="text-neutral-600 text-sm mt-1 line-clamp-1">
          {property.description}
        </p>
      </div>
      <Link
        href={`/property/${property.id}`}
        className="w-full mt-4 bg-primary p-2 text-secondary font-medium text-center hover:text-white"
      >
        View Details
      </Link>
    </div>
  );
};

export default PropertyCard;
