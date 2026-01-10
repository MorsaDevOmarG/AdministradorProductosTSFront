import {
  Form,
  // Link,
  useNavigate,
  redirect,
  type ActionFunctionArgs,
  useFetcher,
} from "react-router-dom";
import type { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: Product;
};

export async function action({ params }: ActionFunctionArgs) {
  // console.log('DEsde actions product details', params.id);

  if (params.id !== undefined) {
    await deleteProduct(+params.id);

    return redirect("/");
  }
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const isAvailable = product.availability;

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>

      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>

      <td className="p-3 text-lg text-gray-800">
        {/* <form method="POST">
          <button
            type="button"
            name="availability"
            value={product.availability.toString()}
            className={`${isAvailable ? 'text-black' : 'text-red-600'} rounded-lg p-2 text-xs uppercase font-bold w-full border border-blue-100 hover:cursor-pointer`}
          >
            {product.availability ? "Disponible" : "No Disponible"}
          </button>
        </form> */}

        <fetcher.Form method="POST">
          <button
            type="submit"
            // name="availability"
            name="id"
            // value={product.availability.toString()}
            value={product.id}
            className={`${
              isAvailable ? "text-black" : "text-red-600"
            } rounded-lg p-2 text-xs uppercase font-bold w-full border border-blue-100 hover:cursor-pointer`}
          >
            {product.availability ? "Disponible" : "No Disponible"}
          </button>


        </fetcher.Form>

        {/* {product.availability ? "Disponible" : "No Disponible"} */}
      </td>

      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex  gap-2 items-center">
          <button
            className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center hover:cursor-pointer"
            // onClick={() => navigate(`/productos/${product.id}/editar`, {
            //   state: {
            //     product
            //   }
            // })}
            onClick={() => navigate(`/productos/${product.id}/editar`)}
          >
            Editar
          </button>

          {/* <Link
            // ubicación
            to={`/productos/${product.id}/editar`}
            className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
          >
            Editar
          </Link> */}

          {/* <button>Eliminar</button> */}

          {/* <Link className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center">
            Eliminar
          </Link> */}

          <Form
            className="w-full"
            method="POST"
            action={`productos/${product.id}/eliminar`}
            onSubmit={(e) => {
              if (!confirm("¿Eliminar?")) {
                e.preventDefault();
              }
            }}
          >
            <input
              type="submit"
              value="Eliminar"
              className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center hover:cursor-pointer"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
};
