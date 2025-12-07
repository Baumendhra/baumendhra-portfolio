
// File: src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form action="https://formsubmit.co/baumendhra@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;