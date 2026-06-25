export async function getCategoryProducts({ pageParams = 0, category }) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}?limit=8&skip=${pageParam}`,
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch products`);
  }

  return res.json();
}
