import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log({ name, email, message });
    // Clear the form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
<div>
  <h1>Contact Us <span className="Contact Us"></span></h1>
  <div className="header"></div>
  <div className="hero"></div>
  <div className="phone">
    <button className="phone">679.335.224</button>
  </div>
  <div className="email">
    <button className="email">tinytopia@gmail.com</button>
  </div>
  <div className="contact-form">
    <h2>Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>
  );
};
export default ContactForm;
