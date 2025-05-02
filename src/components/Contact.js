// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Thanks for reaching out!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <h2>Contact & Connect</h2>
      <p>Feel free to reach out or follow along:</p>

      <div className="contact-links">
        <a href="mailto:henry@soulunknown.com" target="_blank" rel="noopener noreferrer">Email</a>
        <a href="https://open.spotify.com/artist/0NfkWfj6ZOV05fwGodsQnU?si=p2jYH6RcSQ-N70RO-MtJBA" target="_blank" rel="noopener noreferrer">Spotify</a>
        <a href="https://www.youtube.com/@SoulUnknown" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
