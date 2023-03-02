export function filterData(text, restaurant) {
  return restaurant.filter((res) =>
    res.data?.name?.toLowerCase()?.includes(text.toLowerCase())
  );
}
