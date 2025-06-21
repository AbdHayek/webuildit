import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { subject, firstName, lastName, email, phone, message } = await req.json();

    // Basic validation
    if (!subject || !firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Create transporter using env variables
    const transporter = nodemailer.createTransport({
      host: 'mail.webuildit.ae',     // SMTP server from the image
      port: 465,                     // Secure SMTP port
      secure: true,                  // Use SSL
      auth: {
        user: "contact@webuildit.ae",
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define mail options
    const mailOptions = {
      from: `"${firstName} ${lastName}" <contact@webuildit.ae>`, // must match authenticated user
      replyTo: email, // use this instead of setting `from` to user's email
      to: "info@webuildit.ae",
      subject: subject,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
