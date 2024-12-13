// src/components/Contact.js
import React from 'react';
import './contact.css';

function Contact() {
  return (
    <section id="kontakt" className="contact">
      <h2>Kontakta Mig</h2>
      <form
        action="https://formspree.io/f/your-form-id" // Replace with your Formspree form ID
        method="POST"
        className="contact-form"
      >
        <label>
          Namn:
          <input type="text" name="name" required />
        </label>

        <label>
          Email:
          <input type="email" name="_replyto" required />
        </label>

        <label>
          Meddelande:
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit">Skicka Meddelande</button>
      </form>
    </section>
  );
}

export default Contact;
