export async function getCategoryProducts({ category }) {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch products`);
  }

  return res.json();
}
