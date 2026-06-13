export async function getProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=8");

    const data = await response.json();

    return data.products;
  } catch (error) {
    console.log(error);
    return [];
  }
}
