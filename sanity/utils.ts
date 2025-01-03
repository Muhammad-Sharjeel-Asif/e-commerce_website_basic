// sanity/utils.js
import { client } from "@/sanity/lib/client";

export const fetchChefs = async () => {
  const chefQuery = `*[_type == "chef"] | order(_createdAt asc) {
    image, name, designation
  }`;

  const chefData = await client.fetch(chefQuery);
  return chefData;
};


export const fetchBlog = async () => {
  const blogQuery = `*[_type == "blog"] | order(_createdAt asc)
{image, title, 
        "slug": slug.current,
        "firstpara": pt::text(firstpara),
        "secondpara": pt::text(secondpara),
        "quotation": pt::text(quotation),
        "thirdpara": pt::text(thirdpara),
        "forthpara": pt::text(forthpara),
        "fifthpara": pt::text(fifthpara),
        "sixthpara": pt::text(sixthpara),
        "seventhpara": pt::text(seventhpara),
      sideimage,
  }`;

  const blogData = await client.fetch(blogQuery);
  return blogData;
};


export const fetchProduct = async () => {
  try {
    const productQuery = `*[_type == "product"] | order(_createdAt asc) {
      image, name, description, price, discount, category,
      "slug": slug.current
    }`;

    const productData = await client.fetch(productQuery);
    return productData;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};