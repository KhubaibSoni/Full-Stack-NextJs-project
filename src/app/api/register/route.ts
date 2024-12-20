import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/mongo";
import { NextRequest } from "next/server"; // Proper typing for the request object

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password } = await request.json();

    // Log request data
    console.log(name, email, password);

    // Create a DB Connection
    await dbConnect();

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 5);

    // Form a DB payload
    const newUser = {
      name,
      email,
      password: hashedPassword,
    };

    // Save user to the database
    await createUser(newUser);

    // Respond with success message
    return NextResponse.json({ message: "User has been created" }, { status: 201 });

  } catch (err: any) {
    // Handle errors and respond with a detailed error message
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
};
