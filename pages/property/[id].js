import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import PropertyCard from "../../components/PropertyCard";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Property = () => {
  const router = useRouter();
  const [imageIndex, setImageIndex] = React.useState(0);
  const [property, setProperty] = React.useState(null);
  const [similar, setSimilar] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [swiper, setSwiper] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      setLoading(true);
      setImageIndex(0);
      try {
        const { data } = await axios.get("/data.json");
        const property = data.find((a) => a.id === router.query.id);
        if (!property) {
          setError("Property Not Found");
        } else {
          const similar = data
            .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
            .slice(0, 3);
          setProperty(property);
          setSimilar(similar);
          setError(null);
        }
      } catch (error) {
        console.log(error);
        setError("Network/Server Error");
      }
      setLoading(false);
    })();
  }, [router.query.id]);

  return (
    <div className="pt-[66.5px] flex flex-col min-h-screen bg-stone-100">
      <Navbar />
      <section className="flex-1 flex flex-col py-12 md:py-16 px-4 items-center">
        {error ? (
          <div className="text-2xl font-semibold text-secondary text-center">
            {error}
          </div>
        ) : loading ? (
          <div className="text-2xl font-semibold text-primary animate-pulse text-center">
            Loading
          </div>
        ) : (
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-3">
              {property.name}
            </h2>
            <div className="grid grid-cols-3 gap-8 w-full max-w-5xl">
              <div className="col-span-3 md:col-span-2 flex flex-col">
                <div className="relative w-full border border-primary">
                  <button
                    className="absolute z-10 top-1/2 left-0 -translate-y-1/2 bg-primary hover:bg-primary1 p-2 text-secondary disabled:opacity-40"
                    disabled={imageIndex === 0}
                    onClick={() => swiper?.slidePrev()}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <button
                    className="absolute z-10 top-1/2 right-0 -translate-y-1/2 bg-primary hover:bg-primary1 p-2 text-secondary disabled:opacity-40"
                    disabled={imageIndex === 4}
                    onClick={() => swiper?.slideNext()}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                  <Swiper
                    className="block"
                    onInit={(ref) => setSwiper(ref)}
                    onSlideChange={(s) => setImageIndex(s.activeIndex)}
                  >
                    {property.images.map((img, key) => (
                      <SwiperSlide key={key}>
                        <Image
                          src={img}
                          height={400}
                          width={600}
                          className="aspect-video w-full"
                          alt={property.name}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="p-3 bg-secondary mt-3 flex flex-col gap-4 border border-primary">
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-primary">Cost</p>
                    <p className="font-bold text-3xl">${property.price}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-primary">Address</p>
                    <p className="font-bold">{property.address}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-bold text-primary">
                      Description
                    </p>
                    <p className="font-medium">{property.description}</p>
                  </div>

                  <div className="grid grid-cols-3">
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-primary">
                        Area (sqft)
                      </p>
                      <p className="font-bold text-xl">{property.area}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-primary">Bedrooms</p>
                      <p className="font-bold text-xl">{property.bedrooms}</p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-primary">
                        Bathrooms
                      </p>
                      <p className="font-bold text-xl">{property.bathrooms}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 relative border border-primary">
                  <Map center={property.location} />
                </div>
              </div>
              <div className="col-span-3 md:col-span-1 flex flex-col gap-4">
                <div className="flex flex-col p-2 items-center border border-primary">
                  <h4 className="font-semibold my-4">Contact Agent</h4>

                  <button className="bg-primary hover:bg-primary1 text-secondary font-medium w-full flex flex-row gap-2 items-center justify-center py-2">
                    <FontAwesomeIcon icon={faPhone} />
                    <span className="text-white text-sm">(0123) 123 12312</span>
                  </button>
                  <button className="bg-primary hover:bg-primary1 text-secondary font-medium w-full flex flex-row gap-2 items-center justify-center py-2 mt-1">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="text-white text-sm">
                      contact@agent.com
                    </span>
                  </button>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                  <h2 className="text-lg font-semibold">Similar Properties</h2>
                  <div className="flex flex-col gap-4">
                    {similar.map((property, key) => (
                      <PropertyCard key={key} property={property} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

const Map = ({ center }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new google.maps.LatLngBounds();

      bounds.extend(new google.maps.LatLng(center.lat, center.lng));
      bounds.extend(new google.maps.LatLng(center.lat + 0.001, center.lng));
      bounds.extend(new google.maps.LatLng(center.lat - 0.001, center.lng));

      //   const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map);
    },
    [center]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (isLoaded)
    return (
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          aspectRatio: 2,
        }}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          zoomControl: false,
          panControl: false,
          disableDoubleClickZoom: true,
          streetViewControl: false,
        }}
      >
        <Marker position={center} icon="/icons/Asset 4.png" />
      </GoogleMap>
    );
};

export default Property;
