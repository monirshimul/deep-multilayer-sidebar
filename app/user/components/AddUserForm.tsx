"use client";

import React, { useState } from "react";

interface User {
  name: string;
  mail: string;
  address: string;
  age: number;
}

const AddUserForm: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<User>({
    name: "",
    mail: "",
    address: "",
    age: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers((prevUsers) => [...prevUsers, formData]);
    setFormData({
      name: "",
      mail: "",
      address: "",
      age: 0,
    });
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="mail" className="block">
              Email:
            </label>
            <input
              type="email"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={handleChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="address" className="block">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="age" className="block">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border-gray-300 border rounded-md px-4 py-2 w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add User
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {users.map((user, index) => (
          <div key={index} className="border rounded-md p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
            <p>Email: {user.mail}</p>
            <p>Address: {user.address}</p>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddUserForm;
