import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.SMTP_TO_EMAIL,
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>A new user has subscribed to your newsletter.</p>
      `,
    };

    // Send confirmation email to subscriber
    const subscriberMailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: 'Welcome to Our Newsletter!',
      html: `
        <h2>Thank You for Subscribing!</h2>
        <p>We're excited to have you join our newsletter. You'll now receive updates about our latest services and offers.</p>
        <p>Best regards,<br>Your Team</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(subscriberMailOptions)
    ]);

    res.status(200).json({ message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ message: 'Failed to subscribe to newsletter' });
  }
} 