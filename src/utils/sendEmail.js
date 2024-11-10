import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({ name, email, subject, message }) => {
  try {
    await sendgrid.send({
      to: process.env.RECIPIENT_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `${subject} (from ${name})`,
      text: message,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};
