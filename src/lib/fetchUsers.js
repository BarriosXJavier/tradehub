import { connectToDB } from "./utils";
import { User } from "./models";

export const fetchUsers = async (q, page) => {
  await connectToDB();
  const users = await User.find();
  return { count: users.length, users };
};
