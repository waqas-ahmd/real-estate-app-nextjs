import axios from "axios";

const randomValues = () => {
  const img1 = `/properties/img_${Math.ceil(Math.random() * 73)}.jpg`;
  const img2 = `/properties/img_${Math.ceil(Math.random() * 73)}.jpg`;
  const img3 = `/properties/img_${Math.ceil(Math.random() * 73)}.jpg`;
  const img4 = `/properties/img_${Math.ceil(Math.random() * 73)}.jpg`;
  const img5 = `/properties/img_${Math.ceil(Math.random() * 73)}.jpg`;
  const currentDate = new Date();
  const twoMonthsAgo = new Date(currentDate);
  twoMonthsAgo.setMonth(currentDate.getMonth() - 2);
  const randomTime =
    twoMonthsAgo.getTime() +
    Math.random() * (currentDate.getTime() - twoMonthsAgo.getTime());
  const randomDate = new Date(randomTime);
  return {
    id: crypto.randomUUID(),
    location: { lat: 53.13 - Math.random() * 0.6, lng: -2.8 + Math.random() },
    area: Math.round(Math.random() * 10000),
    bedrooms: Math.ceil(Math.random() * 10),
    bathrooms: Math.ceil(Math.random() * 10),
    price: Math.round(Math.random() * 100) * 1000,
    images: [img1, img2, img3, img4, img5],
    date: randomDate.toLocaleDateString(),
  };
};

export const updateData = async () => {
  const { data } = await axios.get("/data.json");
  const newData = data.map((item) => ({ ...item, ...randomValues() }));
  console.log(newData);
};

export const getProperties = async (filters, sort) => {
  const { data } = await axios.get("/data.json");
  let filtered = [...data];
  if (filters?.price) {
    filtered = filtered.filter(
      (a, b) => a.price >= filters?.price[0] && a.price <= filters.price[1]
    );
  }
  if (filters?.bedrooms) {
    filtered = filtered.filter(
      (a, b) =>
        a.bedrooms >= filters?.bedrooms[0] && a.bedrooms <= filters.bedrooms[1]
    );
  }
  if (filters?.bathrooms) {
    filtered = filtered.filter(
      (a, b) =>
        a.bathrooms >= filters?.bathrooms[0] &&
        a.bathrooms <= filters.bathrooms[1]
    );
  }
  if (filters?.area) {
    filtered = filtered.filter(
      (a, b) => a.area >= filters?.area[0] && a.area <= filters.area[1]
    );
  }

  const sortList = [
    "Latest",
    "Alphabetic A-Z",
    "Alphabetic Z-A",
    "Price (Low to High)",
    "Price (High to Low)",
    "Area (Low to High)",
    "Area (High to Low)",
  ];

  let sorted = JSON.parse(JSON.stringify(filtered));
  sorted = sorted.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (sort === sortList[0]) {
    sorted = sorted.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } else if (sort === sortList[1]) {
    sorted = sorted.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (sort === sortList[2]) {
    sorted = sorted.sort((a, b) => (a.name < b.name ? 1 : -1));
  } else if (sort === sortList[3]) {
    sorted = sorted.sort((a, b) => a.price - b.price);
  } else if (sort === sortList[4]) {
    sorted = sorted.sort((a, b) => b.price - b.price);
  } else if (sort === sortList[5]) {
    sorted = sorted.sort((a, b) => a.area - b.area);
  } else if (sort === sortList[6]) {
    sorted = sorted.sort((a, b) => b.area - a.area);
  }

  return sorted;
};

export const getFeatured = async () => {
  const { data } = await axios.get("/data.json");
  return data.sort((a, b) => (Math.random() > 0.5 ? -1 : 1)).slice(0, 4);
};
