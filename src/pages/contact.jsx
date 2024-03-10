// contact.jsx
import React from "react";
import "./contacts.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  // Replace this with your actual Google Maps API key
  const googleMapsApiKey = "AIzaSyDuPpW4rcyu9WFlZdW-rqi9wf6BJmNIj6k";

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label>Name</label>
          <input type="text" name="name" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <label>Message</label>
          <textarea name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-item">
          <FaEnvelope />
          <p>Email: ameerwattad20@gmail.com</p>
        </div>

        <div className="info-item">
          <FaPhone />
          <p>Phone: 052-6867713</p>
        </div>

        <div className="info-item">
          <FaMapMarkerAlt />
          <p>Ramat Aviv, Tel Aviv, Israel</p>
        </div>
      </div>

      <div className="google-maps">
        <iframe
          title="Google Maps"
          src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=123+Main+Street,Cityville,Country`}
          width="100%"
          height="300"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
