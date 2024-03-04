import connectDB from "@/config/configDB";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { email, password } = await request.json();
  await connectDB();

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return NextResponse.json(
        {
          status: "error",
          message: "invalid credentials",
        },
        404
      );
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid credentials",
        },
        401
      );
    }

    // User authentication successful
    return NextResponse.json({
      status: "success",
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "An error occurred during login",
      },
      500
    );
  }
};
