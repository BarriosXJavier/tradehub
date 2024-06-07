import { connectToDB } from "./utils";
import { User } from "./models";

export type UserType = {
  id: string;
  name: string;
  email: string;
  // TODO add more properties later
};

export const fetchUsers = async (q: string, page: number): Promise<{ count: number; users: UserType[] }> => {
  await connectToDB();
  const users = await User.find();
  return { count: users.length, users }; // Assume User.find() returns an array of User objects
};
