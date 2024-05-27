"use client";

import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  createdAt: string;
  modifiedAt?: string;
}

const SingleUserPage = ({ params }: { params: { userId: string } }) => {
  const { userId } = params;
  const [user, setUser] = useState<User | null>(null);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async (id: string | undefined) => {
      if (id) {
        const fetchedUser = {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          address: "123 Main St, City, Country",
          phone: "123-456-7890",
          createdAt: "2024-05-28T10:00:00",
          modifiedAt: undefined,
        };
        setUser(fetchedUser);
        setEditedUser(fetchedUser);
      }
    };
    fetchUser(userId);
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    if (editedUser) {
      console.log("Saving changes:", editedUser);
      const updatedUser = {
        ...editedUser,
        modifiedAt: new Date().toISOString(),
      };
      setUser(updatedUser);
      setEditedUser(updatedUser);
      setEditing(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => {
      if (prevUser) {
        return {
          ...prevUser,
          [name]: value,
          modifiedAt: new Date().toISOString(),
        };
      }
      return prevUser;
    });
  };

  return (
    <div className="p-4 bg-[#151c2c] text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Details: {userId}</h1>
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Name:</h2>
          {editing ? (
            <input
              type="text"
              name="name"
              value={editedUser ? editedUser.name : ""}
              onChange={handleInputChange}
              className="p-2 bg-gray-700 rounded-lg text-white placeholder-gray-400"
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold">Email:</h2>
          {editing ? (
            <input
              type="email"
              name="email"
              value={editedUser ? editedUser.email : ""}
              onChange={handleInputChange}
              className="p-2 bg-gray-700 rounded-lg text-white placeholder-gray-400"
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold">Address:</h2>
          {editing ? (
            <textarea
              name="address"
              value={editedUser ? editedUser.address : ""}
              onChange={handleInputChange}
              className="p-2 bg-gray-700 rounded-lg text-white placeholder-gray-400"
            />
          ) : (
            <p>{user.address}</p>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold">Phone:</h2>
          {editing ? (
            <input
              type="tel"
              name="phone"
              value={editedUser ? editedUser.phone : ""}
              onChange={handleInputChange}
              className="p-2 bg-gray-700 rounded-lg text-white placeholder-gray-400"
            />
          ) : (
            <p>{user.phone}</p>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold">Created At:</h2>
          <p>{user.createdAt}</p>
        </div>
        {user.modifiedAt && (
          <div>
            <h2 className="text-lg font-semibold">Modified At:</h2>
            <p>{user.modifiedAt}</p>
          </div>
        )}
        {editing ? (
          <button
            onClick={handleSave}
            className="p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="p-2 bg-green-500 rounded-lg text-white hover:bg-green-600 transition"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleUserPage;
