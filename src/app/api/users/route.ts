import { User } from "@/database/user.model";
import { UserSchema } from "@/lib/validations";
import handleError from "@/lib/handlers/error";
import { APIErrorResponse } from "@/types/global";
import { NextResponse } from "next/server";
import { ValidationError } from "@/lib/http-errors";

const GET = async () => {
  try {
    const users = await User.find();
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    handleError(error, "api") as APIErrorResponse;
  }
};

const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const validateData = UserSchema.safeParse(body);
    if (!validateData.success) {
      throw new ValidationError(validateData.error.flatten().fieldErrors);
    }

    const { email, username } = validateData.data;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    const user = await User.create(validateData.data);
    return NextResponse.json({ success: true, data: user }, { status: 201 });
  } catch (error) {
    handleError(error, "api") as APIErrorResponse;
  }
};

export { GET, POST };
