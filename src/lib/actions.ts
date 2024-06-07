// "use server";

import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { SignIn } from "@clerk/nextjs";

export const addUser = async (formData: FormData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData.entries()) as unknown as {
      username: string;
      email: string;
      password: string;
      phone?: string;
      address?: string;
      isAdmin?: boolean;
      isActive?: boolean;
    };

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.error(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData: FormData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData.entries()) as unknown as {
      id: string;
      username: string;
      email: string;
      password?: string;
      phone?: string;
      address?: string;
      isAdmin?: boolean;
      isActive?: boolean;
    };

  try {
    await connectToDB();

    const updateFields: { [key: string]: any } = {
      username,
      email,
      password: password ? await bcrypt.hash(password, 10) : undefined,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData: FormData) => {
  const { title, description, price, stock, color, size } = Object.fromEntries(
      formData.entries()
  ) as unknown as {
    title: string;
    description: string;
    price: number;
    stock: number;
    color?: string;
    size?: string;
  };

  try {
    await connectToDB();

    const newProduct = new Product({
      title,
      description,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (err) {
    console.error(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData: FormData) => {
  const { id, title, description, price, stock, color, size } =
    Object.fromEntries(formData.entries()) as unknown as {
      id: string;
      title: string;
      description: string;
      price: number;
      stock: number;
      color?: string;
      size?: string;
    };

  try {
    await connectToDB();

    const updateFields: { [key: string]: any } = {
      title,
      description,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || updateFields[key] === undefined) &&
        delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData.entries()) as { id: string };

  try {
    await connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};

export const deleteProduct = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData.entries()) as { id: string };

  try {
    await connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.error(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

// export const authenticate = async (formData: FormData) => {
//   const { username, password } = Object.fromEntries(formData.entries()) as {
//     username: string;
//     password: string;
//   };

//   try {
//     const signIn = new SignIn();
//     await signIn.authenticate({ identifier: username, password });
//   } catch (err: any) {
//     console.error(err);
//     if (err.message.includes("CredentialsSignin")) {
//       return "Wrong Credentials";
//     }
//     throw err;
//   }
// };

