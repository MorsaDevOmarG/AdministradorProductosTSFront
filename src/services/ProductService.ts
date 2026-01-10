// import { safeParse, coerce, number, parse, boolean } from "valibot";
// import { safeParse, number, parse, boolean, pipe, string, transform } from "valibot";
import { safeParse, number, parse, pipe, string, transform } from "valibot";
import {
  DraftProductSchema,
  ProductSchema,
  ProductsSchema,
  type Product,
} from "../types";
import axios from "axios";
import { toBoolean } from "../utils";
// import { deleteProduct } from '../../../server/src/handlers/product';

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
  // console.log(data);
  // console.log(id);

  try {
    // const NumberSchema = coerce(number(), Number);

    const NumberSchema = pipe(string(), transform(Number), number());

    const result = safeParse(ProductSchema, {
      id,
      name: data.name,
      price: parse(NumberSchema, data.price),
      // availability: data.availability
      availability: toBoolean(data.availability.toString())
    });

    console.log(result);

    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;

      await axios.put(url, result.output);
    }

  } catch (error) {
    console.log(error);
  }
};

export async function deleteProduct(id: Product['id']) {
  // console.log(id);
  // console.log("ID crudo:", id, typeof id);

  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.delete(url);

  } catch (error) {
    console.log(error);
  }
};

export async function updateProductAvailability(id: Product['id']) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    await axios.patch(url);
    
  } catch (error) {
    console.log(error);
  }
}