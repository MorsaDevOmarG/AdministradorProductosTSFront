import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  // useLocation,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { addProduct, getProductById } from "../services/ProductService";
import type { Product } from "../types";

export async function loader({params} :   LoaderFunctionArgs) {
  // console.log('Desde loader...', params);

  if (params.id !== undefined) {
    const product = await getProductById(+params.id);
    // console.log(product);

    if (!product) {
      // throw new Response('', {status:404, statusText: 'No Encontrado'});
      return redirect('/');
    }

    return product;
  }
};

export async function action({ request }: ActionFunctionArgs) {
  // console.log('Desde action...', await request.formData());

  const data = Object.fromEntries(await request.formData());
  // console.log(data);

  let error = "";

  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }
  // console.log(error);

  if (error.length) {
    return error;
  }

  await addProduct(data);

  return redirect("/");
}

export default function EditProduct() {
  const product = useLoaderData() as Product;

  const error = useActionData() as string;
  // console.log(error);

  // const { state } = useLocation();
  // console.log(state);

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Editar Producto</h2>

        <Link
          to={"/"}
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-700"
        >
          Volver a Productos
        </Link>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form className="mt-10" method="POST">
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
            Nombre Producto:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Producto"
            name="name"
            // defaultValue={state.product.name}
            defaultValue={product.name}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="price">
            Precio:
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Precio Producto. ej. 200, 300"
            name="price"
            // defaultValue={state.product.price}
            defaultValue={product.price}
          />
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Editar Producto"
        />
      </Form>
    </>
  );
}
