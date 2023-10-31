import { closeDB, connectDB } from "@/utils/db";
import { authOptions } from "@/utils/helpers/authOptions";
import { Order } from "@/utils/models/Order";
import User from "@/utils/models/Users";
import { sendMail } from "@/utils/sendMail";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    const body = await req.json();

    const { email, name,  message } = body;

    // await sendMail("z3phyronsnides@gmail.com", subject, message);
    sendMail("z3phyronsnides@gmail.com", `New message from diboruwa(${name})`, `message from ${email} - ${message}`)
    .then((info) => {
      console.log("Email sent:", info);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
    return NextResponse.json(
      { message: "emails sent successfully", success: true },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
