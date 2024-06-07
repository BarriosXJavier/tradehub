
"use client"

import { addUser } from '@/lib/actions';

const AddUserPage: React.FC = () => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-lg mx-auto">
        <form action={addUser} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="phone"
            placeholder="Phone"
            name="phone"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <select
            name="isAdmin"
            id="isAdmin"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            defaultValue={'false'}
          >
            <option value={'false'}>Is Admin?</option>
            <option value={'true'}>Yes</option>
            <option value={'false'}>No</option>
          </select>
          <select
            name="isActive"
            id="isActive"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            defaultValue={'true'}
          >
            <option value={'true'}>Is Active?</option>
            <option value={'true'}>Yes</option>
            <option value={'false'}>No</option>
          </select>
          <textarea
            name="address"
            id="address"
            rows={6}
            placeholder="Address"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="block w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserPage;
