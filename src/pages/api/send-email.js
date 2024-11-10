import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Log the email details being sent
    console.log('Sending email to:', process.env.RECIPIENT_EMAIL);
    console.log('From email:', process.env.SENDGRID_FROM_EMAIL);

    // Send the email using SendGrid
    await sendgrid.send({
      to: process.env.RECIPIENT_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `${subject} (from ${name})`,
      text: message,
      replyTo: email,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error?.response?.body || error.message || error);
    return res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}
