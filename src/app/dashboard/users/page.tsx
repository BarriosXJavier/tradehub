"use client";

import React, { useState } from "react";
import { Plus, Eye, Trash } from "lucide-react";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  role: string;
}

const Users: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      createdAt: "2024-01-15",
      role: "Admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      createdAt: "2024-02-12",
      role: "User",
    },
    {
      id: 3,
      name: "Mark Johnson",
      email: "mark@example.com",
      createdAt: "2024-03-10",
      role: "User",
    },
    {
      id: 4,
      name: "Sarah Davis",
      email: "sarah@example.com",
      createdAt: "2024-04-08",
      role: "Moderator",
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael@example.com",
      createdAt: "2024-05-05",
      role: "Admin",
    },
    {
      id: 6,
      name: "Emily White",
      email: "emily@example.com",
      createdAt: "2024-06-01",
      role: "User",
    },
    {
      id: 7,
      name: "Paul Green",
      email: "paul@example.com",
      createdAt: "2024-07-12",
      role: "Admin",
    },
    {
      id: 8,
      name: "Laura Blue",
      email: "laura@example.com",
      createdAt: "2024-08-22",
      role: "Moderator",
    },
    {
      id: 9,
      name: "Peter Black",
      email: "peter@example.com",
      createdAt: "2024-09-05",
      role: "User",
    },
    {
      id: 10,
      name: "Nancy Gray",
      email: "nancy@example.com",
      createdAt: "2024-10-16",
      role: "User",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-4 bg-[#151c2c] text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search for user..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 bg-gray-700 rounded-lg text-white placeholder-gray-400"
          />
          <Link href="/dashboard/adduser/page">
            <button className="p-2 bg-blue-500 rounded-lg text-white flex items-center hover:bg-blue-600 transition">
              <Plus className="mr-2" />
              Add New
            </button>
          </Link>
        </div>
      </div>
      <table className="w-full table-auto mb-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-600">Name</th>
            <th className="py-2 px-4 border-b border-gray-600">Email</th>
            <th className="py-2 px-4 border-b border-gray-600">Created At</th>
            <th className="py-2 px-4 border-b border-gray-600">Role</th>
            <th className="py-2 px-4 border-b border-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index} className="hover:bg-gray-700 transition">
              <td className="py-2 px-4 border-b border-gray-600">
                <Link href={`/dashboard/users/${user.id}/`}
                   className="text-blue-400 hover:underline">{user.name}
                </Link>
              </td>
              <td className="py-2 px-4 border-b border-gray-600">
                {user.email}
              </td>
              <td className="py-2 px-4 border-b border-gray-600">
                {user.createdAt}
              </td>
              <td className="py-2 px-4 border-b border-gray-600">
                {user.role}
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
      <div className="flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === number
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-white"
            } hover:bg-blue-600 transition`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Users;
