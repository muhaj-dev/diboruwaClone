import { closeDB, connectDB } from "@/utils/db";
import { authOptions } from "@/utils/helpers/authOptions";
import { Subscription } from "@/utils/models/Subscription";
import { Order } from "@/utils/models/Order";
import User from "@/utils/models/Users";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { resend } from "@/utils/resend";
import SubscriptionConfirmation from "@/emails/SubscriptionOrder";
import moment from "moment";
import { SubscriptionConfirmationEmail } from "@/emails/mails";
import { sendMail } from "@/utils/sendMail";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    let order;

    const id = params.id;

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "you are not loggedIn" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "user does not exist" });
    }

    const subscription = await Subscription.findByIdAndUpdate(
      id,
      { isPaid: true },
      { new: true }
    );

    if (!subscription) {
      // If no existing Subscription,throw new error
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });
    } else {
      // If an existing Subscription is found, check if the item exists
      order = new Order({
        orderItems: subscription,
        type: "subscription",
        email: user.email,
        phone: user.phone,
        total: subscription.total,
        address: user.address,
        user,
        paymentId: body.referenceId,
      });

      const emailHTML = SubscriptionConfirmationEmail({
        customerName: `${user.firstName} ${user.lastName}`,
        serviceName: subscription.type,
        planName: subscription.plan,
        startDate: moment(subscription.start).format("MMMM D, YYYY"),
        endDate: moment(subscription.due).format("MMMM D, YYYY"),
      });

      sendMail(user.email, "Reset Password", emailHTML)
        .then((info) => {
          console.log("Email sent:", info);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });

      await order.save();
    }

    return NextResponse.json({ order, success: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "An error occurred", err },
      { status: 500 }
    );
  } finally {
    await closeDB();
  }
}

export async function GET(req: Request, res: Response) {
  try {
    await connectDB();

    if (!req.body)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    const body = await req.json();
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "you are not loggedIn" });
    }

    const user = await User.findById(session.user._id);
    if (!user) {
      return NextResponse.json({ message: "user does not exist" });
    }

    const ordersHistory = await Order.find({ user });

    return NextResponse.json({ ordersHistory, success: true }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  } finally {
    await closeDB();
  }
}
