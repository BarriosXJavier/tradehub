import mongoose from "mongoose";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// MongoDB connection
let isConnected: boolean = false;

export const connectToDB = async (): Promise<void> => {
  if (isConnected) return;

  try {
    if (!process.env.MONGODB) {
      throw new Error("MONGODB environment variable is not defined");
    }

    const db = await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);

    isConnected = db.connection.readyState === 1;
    console.log("Connected to MongoDB");
  } catch (error: any) {
    throw new Error(error.message);
  }
};
