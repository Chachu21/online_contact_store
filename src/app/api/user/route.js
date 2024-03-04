import connectDB from "@/config/configDB";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async(request) => { 
 const { fname, lname, email, password, marketing_accept} =
    await request.json();
  await connectDB()
  const hashedPassword = bcrypt.hash(password, 10)
    await User.create({
      fname,
      lname,
      email,
      password :hashedPassword,
      marketing_accept,
    });
    return NextResponse.json({message:"user created successfully"})
}