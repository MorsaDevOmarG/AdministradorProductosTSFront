import { Link } from "react-router-dom";
import type { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800">{product.name}</td>

      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>

      <td className="p-3 text-lg text-gray-800">
        {product.availability ? "Disponible" : "No Disponible"}
      </td>

      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex  gap-2 items-center">
          {/* <button>Editar</button> */}
          <Link
            // ubicación
            to={`/productos/${product.id}/editar`}
            className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
          >
            Editar
          </Link>

          {/* <button>Eliminar</button> */}

          <Link className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center">
            Eliminar
          </Link>
        </div>
      </td>
    </tr>
  );
}
