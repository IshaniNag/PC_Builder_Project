import { promises as fs } from "fs";
import path from "path";

export const getProductsJson = async () => {
  const filePath = path.join(process.cwd(), "public", "products.json");

  try {
    // Read the contents of the products.json file asynchronously
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Parse the JSON data
    const productsData = fileContent ? JSON.parse(fileContent) : [];
    return productsData;
  } catch (error) {
    console.error("Error reading products.json:", error);
    return [];  // Return empty array in case of error
  }
};
