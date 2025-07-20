// ContactMe.js
import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa';
import './ContactMe.css'; // Import the CSS file for styling
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // TODO: Replace these with your actual EmailJS values
  const SERVICE_ID = 'service_k2tfzqx';
  const TEMPLATE_ID = 'template_tbafh5o';
  const PUBLIC_KEY = 'GBvydzQFCnFSgUBZv';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    // Prepare template params for EmailJS
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    console.log('Sending email with params:', templateParams);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSuccess("Thank you for reaching out! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((err) => {
        console.error('EmailJS error details:', err);
        setError("Something went wrong. Please check your EmailJS template configuration.");
        setLoading(false);
      });
  };

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white dark:bg-brown-800 p-8 rounded-xl shadow space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded border border-brown-200 dark:border-brown-700 bg-brown-50 dark:bg-brown-900 text-brown-900 dark:text-brown-100"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded border border-brown-200 dark:border-brown-700 bg-brown-50 dark:bg-brown-900 text-brown-900 dark:text-brown-100"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 rounded border border-brown-200 dark:border-brown-700 bg-brown-50 dark:bg-brown-900 text-brown-900 dark:text-brown-100"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded bg-brown-700 text-white font-semibold hover:bg-brown-800 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && <div className="text-green-600 text-center mt-2">{success}</div>}
        {error && <div className="text-red-600 text-center mt-2">{error}</div>}
      </form>
    </section>
  );
}
