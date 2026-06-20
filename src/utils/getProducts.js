export async function getProducts({ pageParam = 0 }) {
  const response = await fetch(
    `https://dummyjson.com/products?limit=8&skip=${pageParam}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products`);
  }
  return response.json();
}
