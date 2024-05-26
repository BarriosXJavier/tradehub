"use client"

import React, { useState } from "react";
import { Search, Plus, Eye, Trash } from "lucide-react";
import { Line } from "recharts";
import Link from "next/link";

interface Product {
  name: string;
  category: string;
  price: string;
  stock: string;
}

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const products: Product[] = [
    {
      name: "Product A",
      category: "Category 1",
      price: "$100",
      stock: "In Stock",
    },
    {
      name: "Product B",
      category: "Category 2",
      price: "$200",
      stock: "Out of Stock",
    },
    {
      name: "Product C",
      category: "Category 1",
      price: "$150",
      stock: "In Stock",
    },
    {
      name: "Product D",
      category: "Category 3",
      price: "$250",
      stock: "Limited Stock",
    },
    {
      name: "Product E",
      category: "Category 2",
      price: "$300",
      stock: "In Stock",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-[#151c2c] text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search for product..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 bg-gray-700 rounded-lg text-white placeholder-gray-400"
          />
          <Link href="/dashboard/addproduct">
            <button className="p-2 bg-blue-500 rounded-lg text-white flex items-center hover:bg-blue-600 transition">
              <Plus className="mr-2" />
              Add New Product
            </button>
          </Link>
        </div>
      </div>
      <table className="w-full table-auto mb-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-600">Product Name</th>
            <th className="py-2 px-4 border-b border-gray-600">Category</th>
            <th className="py-2 px-4 border-b border-gray-600">Price</th>
            <th className="py-2 px-4 border-b border-gray-600">Stock Status</th>
            <th className="py-2 px-4 border-b border-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr key={index} className="hover:bg-gray-700 transition">
              <td className="py-2 px-4 border-b border-gray-600">
                {product.name}
              </td>
              <td className="py-2 px-4 border-b border-gray-600">
                {product.category}
              </td>
              <td className="py-2 px-4 border-b border-gray-600">
                {product.price}
              </td>
              <td className="py-2 px-4 border-b border-gray-600">
                {product.stock}
              </td>
              <td className="py-2 px-4 border-b border-gray-600">
                <div className="flex space-x-2">
                  <button className="p-2 bg-green-500 rounded-lg text-white hover:bg-green-600 transition">
                    <Eye size={16} />
                  </button>
                  <button className="p-2 bg-red-500 rounded-lg text-white hover:bg-red-600 transition">
                    <Trash size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
