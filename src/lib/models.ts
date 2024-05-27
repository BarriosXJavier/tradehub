import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    img: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    phone: {
      type: String,
      // required: true
    },

    address: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
); // Moved to correct position

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    img: {
      type: String,
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
    },

    color: {
      type: String,
    },

    size: {
      type: String,
    },
  },
  { timestamps: true }
); // Moved to correct position

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
