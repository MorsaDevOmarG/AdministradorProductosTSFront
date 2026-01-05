import { safeParse } from "valibot";
import {
  DraftProductSchema,
  ProductSchema,
  ProductsSchema,
  type Product,
} from "../types";
import axios from "axios";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: ProductData) {
  // console.log('addProudct...', data);

  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });

    // console.log(result);

    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;

      await axios.post(url, {
        name: result.output.name,
        price: result.output.price,
      });
    } else {
      throw new Error("Datos no validos");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const { data } = await axios(url);
    // console.log(data);
    const result = safeParse(ProductsSchema, data.data);
    // console.log(result);

    if (result.success) {
      return result.output;
    } else {
      throw new Error("Hubo un error...");
    }
  } catch (error) {
    console.log(error);
  }
};

export async function getProductById(id: Product["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const { data } = await axios(url);
    // console.log(data);
    const result = safeParse(ProductSchema, data.data);
    // console.log(result);

    if (result.success) {
      return result.output;
    } else {
      throw new Error("Hubo un error...");
    }
  } catch (error) {
    console.log(error);
  }
};

export async function updateProduct(data : ProductData, id : Product['id']) {
  console.log(data);
  console.log(id);
};