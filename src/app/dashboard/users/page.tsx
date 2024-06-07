import { deleteUser } from "@/lib/actions";
import { fetchUsers } from "@/lib/data";
import Search from "@/components/searchbar";
import Image from "next/image";
import Link from "next/link";

type SearchParamsType = {
  q?: string;
  page?: number;
};

type UsersPageProps = {
  searchParams: SearchParamsType;
};

const UsersPage = async ({ searchParams }: UsersPageProps) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, users } = await fetchUsers(q, page);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New
          </button>
        </Link>
      </div>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Created At</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  {user.username}
                </div>
              </td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">
                {user.createdAt?.toString().slice(4, 16)}
              </td>
              <td className="px-4 py-2">{user.isAdmin ? "Admin" : "Client"}</td>
              <td className="px-4 py-2">
                {user.isActive ? "active" : "passive"}
              </td>
              <td className="px-4 py-2">
                <div className="flex justify-end">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View
                    </button>
                  </Link>
                  <form action="">
                    <input type="hidden" name="id" value={user.id} />
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination count={count} /> */}
    </div>
  );
};

export default UsersPage;
