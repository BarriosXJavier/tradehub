import React from "react";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className="p-6 bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Latest Transactions</h2>
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-gray-100 border-b text-left text-gray-600 font-semibold uppercase">
              Name
            </th>
            <th className="py-3 px-6 bg-gray-100 border-b text-left text-gray-600 font-semibold uppercase">
              Date
            </th>
            <th className="py-3 px-6 bg-gray-100 border-b text-left text-gray-600 font-semibold uppercase">
              Status
            </th>
            <th className="py-3 px-6 bg-gray-100 border-b text-left text-gray-600 font-semibold uppercase">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <td className="py-4 px-6 border-b">
              <div className="flex items-center">
                <Image
                  src="/avatar.png"
                  alt="user avatar"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
                <span className="ml-3">John Doe</span>
              </div>
            </td>
            <td className="py-4 px-6 border-b">15.09.2024</td>
            <td className="py-4 px-6 border-b">
              <span className="text-green-600 font-semibold">Completed</span>
            </td>
            <td className="py-4 px-6 border-b">$750</td>
          </tr>
          <tr className="hover:bg-gray-100 transition-colors duration-200">
            <td className="py-4 px-6 border-b">
              <div className="flex items-center">
                <Image
                  src="/avatar.png"
                  alt="user avatar"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
                <span className="ml-3">Jane Smith</span>
              </div>
            </td>
            <td className="py-4 px-6 border-b">12.09.2024</td>
            <td className="py-4 px-6 border-b">
              <span className="text-yellow-600 font-semibold">Pending</span>
            </td>
            <td className="py-4 px-6 border-b">$500</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <td className="py-4 px-6 border-b">
              <div className="flex items-center">
                <Image
                  src="/avatar.png"
                  alt="user avatar"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
                <span className="ml-3">Mark Johnson</span>
              </div>
            </td>
            <td className="py-4 px-6 border-b">10.09.2024</td>
            <td className="py-4 px-6 border-b">
              <span className="text-green-600 font-semibold">Completed</span>
            </td>
            <td className="py-4 px-6 border-b">$1000</td>
          </tr>
          <tr className="hover:bg-gray-100 transition-colors duration-200">
            <td className="py-4 px-6 border-b">
              <div className="flex items-center">
                <Image
                  src="/avatar.png"
                  alt="user avatar"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
                <span className="ml-3">Sarah Davis</span>
              </div>
            </td>
            <td className="py-4 px-6 border-b">08.09.2024</td>
            <td className="py-4 px-6 border-b">
              <span className="text-yellow-600 font-semibold">Pending</span>
            </td>
            <td className="py-4 px-6 border-b">$250</td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <td className="py-4 px-6 border-b">
              <div className="flex items-center">
                <Image
                  src="/avatar.png"
                  alt="user avatar"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
                <span className="ml-3">Michael Brown</span>
              </div>
            </td>
            <td className="py-4 px-6 border-b">05.09.2024</td>
            <td className="py-4 px-6 border-b">
              <span className="text-green-600 font-semibold">Completed</span>
            </td>
            <td className="py-4 px-6 border-b">$1500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
