import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Message logged to console!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-[#128B47] mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">
        Feel free to reach out via the form below.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-2 border rounded"
          rows="5"
          required
        />
        <button
          type="submit"
          className="bg-[#128B47] text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
export default Contact
