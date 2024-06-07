import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "./lib/data";
import Image from "next/image";
import { FC } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  stock: number;
  color?: string;
  size?: string;
  cat?: string;
  desc?: string;
}

interface SingleProductPageProps {
  params: {
    id: string;
  };
}

const SingleProductPage: FC<SingleProductPageProps> = ({ params }) => {
  const { id } = params;
  const product: Product = fetchProduct(id); // Assuming fetchProduct returns Product type

  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-6 row-gap-5 md:grid-cols-2">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded shadow-lg">
            <Image
              src="/noavatar.png"
              alt=""
              fill
              className="object-cover w-full h-96"
            />
          </div>
          <h2 className="text-2xl font-bold">{product.title}</h2>
        </div>
        <div className="space-y-4">
          <form action={updateProduct} className="space-y-4">
            <input type="hidden" name="id" value={product.id} />
            <label className="block">
              Title
              <input
                type="text"
                name="title"
                defaultValue={product.title}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </label>
            <label className="block">
              Price
              <input
                type="number"
                name="price"
                defaultValue={product.price.toString()}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </label>
            <label className="block">
              Stock
              <input
                type="number"
                name="stock"
                defaultValue={product.stock.toString()}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </label>
            <label className="block">
              Color
              <input
                type="text"
                name="color"
                defaultValue={product.color || "color"}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </label>
            <label className="block">
              Size
              <textarea
                name="size"
                rows={4}
                defaultValue={product.size || "size"}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </label>
            <label className="block">
              Category
              <select
                name="cat"
                id="cat"
                defaultValue={product.cat}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="kitchen">Kitchen</option>
                <option value="computers">Computers</option>
              </select>
            </label>
            <label className="block">
              Description
              <textarea
                name="desc"
                rows={6}
                defaultValue={product.desc}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </label>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
