import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Email sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('Failed to send email.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
      <input type="text" name="subject" placeholder="Subject" onChange={handleChange} value={formData.subject} required />
      <textarea name="message" placeholder="Message" onChange={handleChange} value={formData.message} required />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
