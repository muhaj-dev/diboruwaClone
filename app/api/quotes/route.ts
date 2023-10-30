import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import User from "@/utils/models/Users";
import { connectDB, closeDB } from "@/utils/db";
import { Cart } from "@/utils/models/Cart";
import { generateToken } from "@/templates/authTemplates";
import ActivateAccount from "@/emails/ActivateAccount";
import sendEmail from "@/utils/resend";
import { sendMail } from "@/utils/sendMail";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/helpers/authOptions";
import {} from "@/emails";
import moment from "moment";
import { Request } from "@/utils/models/Requests";
import {
  AdminHomeCleaningQuoteRequest,
  AdminLaundryQuoteRequest,
  UserQuoteRequestConfirmation,
} from "@/emails/mails";

type Item = {
  name: string;
  id: number;
  amount: number;
};

export async function GET(req: Request, res: Response) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "You are not logged in" });
    }

    const userId = session.user._id;

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User does not exist" });
    }

    // Query the database for all quotes belonging to the user && fill user
    const quotes = await Request.find({ user: userId }).populate("user");

    // You can send the 'quotes' array as the response
    return NextResponse.json({ quotes }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  } finally {
    await closeDB();
  }
}

export async function POST(req: Request, res: Response) {
  try {
    await connectDB();

    const body = await req.json();

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "you are not loggedIn" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "user does not exist" });
    }

    const { data } = body;
    console.log(body);
    const timestamp = moment().format("YYYY-MM-DD HH:mm:ss");
    const turnaroundTime = moment().add(1, "day").format("YYYY-MM-DD HH:mm:ss");

    const quoteText = data.quote
      .filter((item: any) => item.amount > 0)
      .map((item: any) => `${item.name} -- ${item.amount}`)
      .join(", ");

    const newItems: Omit<Item, "id">[] = data.quote.map(
      ({ id, ...rest }: { id: number; rest: any }) => rest
    );

    const newRequest = new Request({
      user,
      type: data.type,
      items: newItems,
      from: `${user.address}, ${user.lga}, ${user.city}, ${user.state}`,
      date: timestamp,
    });

    await newRequest.save();

    const userEmailHTML = UserQuoteRequestConfirmation({
      firstName: user.firstName,
      serviceType: data.type,
      items: newItems,
      timestamp: timestamp,
      turnaroundTime: turnaroundTime,
      adminContact: "info@diboruwa.com",
    });
    sendMail(user.email, "Order Confirmed", userEmailHTML)
      .then((info) => {
        console.log("Email sent:", info);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    if (data.type === "laundry") {
      const laundryEmailHTML = AdminLaundryQuoteRequest({
        adminName: "Ibrahim",
        userName: `${user.firstName} ${user.lastName}`,
        userEmail: user.email,
        userContact: user.phone,
        userAddress: `${user.address}, ${user.lga}, ${user.city}, ${user.state}`,
        laundryItems: data.quote,
      });
      sendMail(
        "z3phyronsnides@gmail.com",
        "New Quote Request",
        laundryEmailHTML
      )
        .then((info) => {
          console.log("Email sent:", info);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    } else if (data.type === "cleaning") {
      const cleaningEmailHTML = AdminHomeCleaningQuoteRequest({
        adminName: "Ibrahim",
        userName: `${user.firstName} ${user.lastName}`,
        userEmail: user.email,
        userContact: user.phone,
        userAddress: `${user.address}, ${user.lga}, ${user.city}, ${user.state}`,
        homeCleaningAreas: data.quote,
      });

      sendMail(
        "z3phyronsnides@gmail.com",
        "New Quote Request",
        cleaningEmailHTML
      )
        .then((info) => {
          console.log("Email sent:", info);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }

    return NextResponse.json(
      { message: "emails sent successfully", quote: newRequest, success: true },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  } finally {
    await closeDB();
  }
}
