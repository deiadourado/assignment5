/*Student Name: Andreia Araujo Dourado
Student number: 200560835
E-mail: 200560835@student.georgianc.on.ca*/

import Image from 'next/image';
import '../styles/contact.css';

export default function ContactPage() {
  return (
    <div className="about-container">
      <h1 className="about-title">Let's get in touch!</h1>
      <div className="about-content">
        <Image
          src="/contact.png" 
          alt="contato"
          width={150}
          height={150}
          className="about-image"
        />
        <p className="about-description">
        If you'd like to get in touch, I'd be happy to chat!
        </p>

        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="name" required />

          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" placeholder="e-mail" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" placeholder="message" required></textarea>

          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
}