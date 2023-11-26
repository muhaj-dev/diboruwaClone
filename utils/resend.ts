import React from "react";
import { Resend } from "resend";

export const resend = new Resend("re_Ee9D3su5_4uYDSSe5moEw3E9952YXV9Wq");

// const resend = new Resend(process.env.RESEND_API_KEY);

// Define a reusable email sending function
const sendEmail = async (
  to: string,
  subject: string,
  react: React.ReactNode
) => {
  try {
    const data = await resend.emails.send({
      from: "info@diboruwa.com",
      to,
      text: "email from DiboRowa",
      subject,
      react,
    });

    return data;
  } catch (error) {
    throw error;
  }
};


export default sendEmail