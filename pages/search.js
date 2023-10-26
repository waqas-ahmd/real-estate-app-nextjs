import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import { getProperties } from "../API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const priceList = [
  0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
];
const bedroomsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bathroomsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const areaList = [
  0, 200, 400, 600, 800, 1000, 1200, 1500, 2000, 2500, 3000, 4000, 5000, 10000,
];
const sortList = [
  "Latest",
  "Alphabetic A-Z",
  "Alphabetic Z-A",
  "Price (Low to High)",
  "Price (High to Low)",
  "Area (Low to High)",
  "Area (High to Low)",
];

const Search = () => {
  const [editFilters, setEditFilters] = React.useState(false);
  const [appliedFilters, setAppliedFilters] = React.useState(null);
  const [page, setPageIndex] = React.useState(0);
  const [postsPerPage, setPostsPerPage] = React.useState(12);
  const [data, setData] = React.useState([]);
  const [sortBy, setSortBy] = React.useState(sortList[0]);
  const [priceMin, setPriceMin] = React.useState(priceList[0]);
  const [priceMax, setPriceMax] = React.useState(
    priceList[priceList.length - 1]
  );
  const [bedsMin, setBedsMin] = React.useState(bedroomsList[0]);
  const [bedsMax, setBedsMax] = React.useState(
    bedroomsList[bedroomsList.length - 1]
  );
  const [bathsMin, setBathsMin] = React.useState(bathroomsList[0]);
  const [bathsMax, setBathsMax] = React.useState(
    bathroomsList[bathroomsList.length - 1]
  );
  const [areaMin, setAreaMin] = React.useState(areaList[0]);
  const [areaMax, setAreaMax] = React.useState(areaList[areaList.length - 1]);

  const [view, setView] = React.useState("grid");
  const [currentCard, setCurrentCard] = React.useState(null);

  const showCard = (property) => {
    setCurrentCard(property);
  };

  const nextPage = () => {
    setPageIndex((p) => p + 1);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 300);
  };

  const prevPage = () => {
    setPageIndex((p) => p - 1);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 300);
  };

  const handleApplyFilters = () => {
    const filters = {};
    if (
      !(
        priceMin === priceList[0] &&
        priceMax === priceList[priceList.length - 1]
      )
    )
      filters.price = [priceMin, priceMax];
    if (
      !(
        bedsMin === bedroomsList[0] &&
        bedsMax === bedroomsList[bedroomsList.length - 1]
      )
    )
      filters.bedrooms = [bedsMin, bedsMax];
    if (
      !(
        bathsMin === bathroomsList[0] &&
        bathsMax === bathroomsList[bathroomsList.length - 1]
      )
    )
      filters.bathrooms = [bathsMin, bathsMax];
    if (!(areaMin === areaList[0] && areaMax === areaList[areaList.length - 1]))
      filters.area = [areaMin, areaMax];

    if (JSON.stringify(filters) === "{}") {
      setAppliedFilters(null);
    } else {
      setAppliedFilters(filters);
    }
    setEditFilters(false);
  };

  const clearFilters = () => {
    setAppliedFilters(null);
    setPageIndex(0);
  };
  React.useEffect(() => {
    (async () => {
      const data = await getProperties(appliedFilters, sortBy);
      setPageIndex(0);
      setData(data);
    })();
  }, [appliedFilters, sortBy]);
  return (
    <div className="pt-[66.5px] flex flex-col min-h-screen">
      <Navbar />

      <section className="px-4 w-full bg-secondary flex flex-col items-center">
        <div className="flex flex-col w-full overflow-hidden max-w-5xl">
          {editFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
              <div className="flex flex-row items-center gap-2 border border-primary p-2">
                <label className="font-medium">Price</label>
                <select
                  value={priceMin}
                  onChange={(e) => setPriceMin(e.target.value)}
                  className="outline-none bg-transparent border border-primary px-2 py-1 flex-1"
                >
                  <option disabled>MIN</option>
                  {priceList
                    .filter((a) => a < priceMax)
                    .map((price, key) => (
                      <option value={price} key={key}>
                        {price}
                      </option>
                    ))}
                </select>
                <span>-</span>
                <select
                  value={priceMax}
                  onChange={(e) => setPriceMax(e.target.value)}
                  className="outline-none bg-transparent border border-primary px-2 py-1 flex-1"
                >
                  <option disabled>MAX</option>
                  {priceList
                    .filter((a) => a > priceMin)
                    .map((price, key) => (
                      <option value={price} key={key}>
                        {price}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-row items-center gap-2 border border-primary p-2">
                <label className="font-medium">Bedrooms</label>
                <select
                  value={bedsMin}
                  onChange={(e) => setBedsMin(e.target.value)}
                  className="outline-none bg-transparent border border-primary px-2 py-1 flex-1"
                >
                  <option disabled>MIN</option>
                  {bedroomsList
                    .filter((a) => a < bedsMax)
                    .map((beds, key) => (
                      <option value={beds} key={key}>
                        {beds}
                      </option>
                    ))}
                </select>
                <span>-</span>
                <select
                  value={bedsMax}
                  onChange={(e) => setBedsMax(e.target.value)}
                  className="outline-none bg-transparent border border-primary px-2 py-1 flex-1"
                >
                  <option disabled>MAX</option>
                  {bedroomsList
                    .filter((a) => a > bedsMin)
                    .map((beds, key) => (
                      <option value={beds} key={key}>
                        {beds}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-row items-center gap-2 border border-primary p-2">
                <label className="font-medium">Bathrooms</label>
                <select
                  value={bathsMin}
                  onChange={(e) => setBathsMin(e.target.value)}
                  className="outline-none bg-transparent border border-primary px-2 py-1 flex-1"
                >
                  <option disabled>MIN</option>
                  {bathroomsList
                    .filter((a) => a < bathsMax)
                    .map((baths, key) => (
                      <option value={baths} key={key}>
                        {baths}
                      </option>
                    ))}
                </select>
                <span>-</span>
                <select
                  value={bathsMax}
                  onChange={(e) => setBathsMax(e.target.value)}
                  className="outline-none bg-transparent border border-primary px-2 py-1 flex-1"
                >
                  <option disabled>MAX</option>
                  {bathroomsList
                    .filter((a) => a > bathsMin)
                    .map((baths, key) => (
                      <option value={baths} key={key}>
                        {baths}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-row items-center gap-2 border border-primary p-2">
                <label className="font-medium">Area</label>
                <select
                  value={areaMin}
                  onChange={(e) => setAreaMin(e.target.value)}
                  className="outline-none bg-transparent border border-primary px-2 py-1 flex-1"
                >
                  <option disabled>MIN</option>
                  {areaList
                    .filter((a) => a < areaMax)
                    .map((area, key) => (
                      <option value={area} key={key}>
                        {area}
                      </option>
                    ))}
                </select>
                <span>-</span>
                <select
                  value={areaMax}
                  onChange={(e) => setAreaMax(e.target.value)}
                  className="outline-none bg-transparent border border-primary px-2 py-1 flex-1"
                >
                  <option disabled>MAX</option>
                  {areaList
                    .filter((a) => a > areaMin)
                    .map((area, key) => (
                      <option value={area} key={key}>
                        {area}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          )}

          {!editFilters &&
            (appliedFilters !== null ? (
              <div className="flex flex-row gap-2 py-2 items-center justify-center flex-wrap">
                {Object.keys(appliedFilters).map((key, index) => (
                  <div
                    className="p-1 px-3 rounded-full bg-primary1 text-sm"
                    key={index}
                  >
                    <span className="capitalize text-secondary font-bold">
                      {key}
                    </span>
                    :{" "}
                    <span className="text-white font-medium">
                      {appliedFilters[key][0]} - {appliedFilters[key][1]}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-2 text-rose-900 font-semibold text-center">
                No Filters Applied
              </div>
            ))}

          <div className="flex flex-row items-center justify-center gap-3 my-2">
            {appliedFilters !== null && (
              <button
                className="px-4 py-1 text-primary hover:text-primary1 bg-transparent font-bold uppercase tracking-wider"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            )}
            <button
              className="px-4 py-1 bg-primary hover:bg-primary1 text-white uppercase tracking-wider"
              onClick={
                editFilters
                  ? () => handleApplyFilters()
                  : () => setEditFilters(true)
              }
            >
              {editFilters ? "Apply Filters" : "Edit Filters"}
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 w-full flex flex-col items-center py-12 md:py-16 bg-stone-100 flex-1">
        {data.length > 0 ? (
          <>
            <div className="flex flex-row gap-3 justify-start items-center w-full max-w-5xl mb-2">
              <div
                onClick={() => setView("grid")}
                className={`flex flex-row gap-1 text-primary ${
                  view === "map" ? "opacity-50" : "opacity-100"
                } font-bold hover:opacity-75 cursor-pointer`}
              >
                Grid View
              </div>
              <div
                onClick={() => setView("map")}
                className={`flex flex-row gap-1 text-primary ${
                  view === "grid" ? "opacity-50" : "opacity-100"
                } font-bold hover:opacity-75 cursor-pointer`}
              >
                Map View
              </div>
            </div>
            {view === "grid" && (
              <div className="w-full max-w-5xl flex flex-col gap-3 md:flex-row justify-between mb-2">
                <h3 className="font-bold text-primary">
                  Showing Results ({page * 12 + 1}-
                  {page * 12 + 12 > data.length ? data.length : page * 12 + 12}{" "}
                  of {data.length})
                </h3>
                <div className="flex flex-row gap-2 items-center">
                  Sort by:
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1 border border-primary outline-none bg-transparent"
                  >
                    {sortList.map((sort, key) => (
                      <option key={key} value={sort}>
                        {sort}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full max-w-5xl flex flex-col justify-center items-center mb-2 text-xl font-bold text-secondary">
            No Results found!
          </div>
        )}
        {view === "grid" && (
          <div className="w-full max-w-5xl grid md:grid-cols-3 gap-6">
            {data.slice(page * 12, page * 12 + 12).map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        )}

        {data.length > postsPerPage && view === "grid" && (
          <div className="flex flex-row gap-3 items-center justify-center mt-3">
            <button
              disabled={page === 0}
              className="bg-secondary px-3 py-2 text-white disabled:opacity-60"
            >
              <FontAwesomeIcon icon={faArrowLeft} onClick={prevPage} />
            </button>
            <p className="font-bold">{page + 1}</p>
            <button
              disabled={
                page ===
                (data.length % postsPerPage === 0
                  ? Math.floor(data.length / postsPerPage) - 1
                  : Math.floor(data.length / postsPerPage))
              }
              className="bg-secondary px-3 py-2 text-white disabled:opacity-60"
            >
              <FontAwesomeIcon icon={faArrowRight} onClick={nextPage} />
            </button>
          </div>
        )}

        {view === "map" && data.length > 0 && (
          <div className="w-full max-w-5xl aspect-[0.5] md:aspect-[1.75]">
            <Map properties={data} showCard={showCard} />
          </div>
        )}

        {view === "map" && currentCard !== null && (
          <div className="fixed w-full px-4 sm:max-w-[360px] bottom-0 left-1/2 -translate-x-1/2">
            <PropertyCard property={currentCard} />
            <FontAwesomeIcon
              onClick={() => showCard(null)}
              icon={faXmark}
              className="top-2 right-6 sm:right-2 bg-white p-2 absolute cursor-pointer"
            />
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

const Map = ({ properties, showCard }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API,
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      const bounds = new google.maps.LatLngBounds();
      for (const property of properties) {
        bounds.extend(
          new google.maps.LatLng(property.location.lat, property.location.lng)
        );
      }
      map.fitBounds(bounds);
      setMap(map);
    },
    [properties]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (isLoaded)
    return (
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        center={properties[0].location}
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
        {properties.map((property, key) => (
          <Marker
            position={property.location}
            key={key}
            icon="/icons/Asset 4.png"
            onClick={() => showCard(property)}
          />
        ))}
        {/* <Marker position={center} icon="/icons/Asset 4.png" /> */}
      </GoogleMap>
    );
};

export default Search;
