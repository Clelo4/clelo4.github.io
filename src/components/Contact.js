import React, { useState } from 'react';
import MessageBox from './MessageBox';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit actions here, e.g., send data to server

    // Assuming submission is successful, show success message and clear form
    setMessage("Message sent successfully!");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container contact">
      <h2 className="main-title text-center">CONTACT</h2>
      <form onSubmit={handleSubmit}>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-1">
              <input
                name="name"
                placeholder="Name"
                className="contact-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4 mb-1">
              <input
                name="email"
                placeholder="Email"
                className="contact-input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-1">
              <input
                name="subject"
                placeholder="Subject"
                className="contact-input"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-12">
          <textarea
            name="message"
            placeholder="Message"
            className="contact-textarea"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <br />
        <div className="row">
          <div className="col-md-12">
            <input className="form-btn" type="submit" value="Send Message" />
          </div>
        </div>
      </form>
      {message && <MessageBox message={message} type="success" onClose={() => setMessage("")}></MessageBox>}
    </div>
  );
}

export default Contact;
