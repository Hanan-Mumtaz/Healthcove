
import React, { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consultation request submitted!");
    setFormData({ name: "", email: "", phone: "", date: "", time: "", message: "" });
  };

  return (
    <div >
      <ParticleBackground />

      {/* HEADER */}
      <section className="relative pt-32 pb-0 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
  <h1 className="text-4xl md:text-6xl font-bold mb-4">
    Book a <span className="bg-gradient-to-r from-Mg to-Lg bg-clip-text text-transparent">Consultation</span>
  </h1>
  <p className="text-lg md:text-xl text-Mg max-w-2xl">
    Schedule a personalized session with our expert nutrition coaches and start your journey today.
  </p>
</section>


      {/* FORM */}
      <section className="py-16 md-0 py-10 relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/70 backdrop-blur-sm blur-mobile rounded-3xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-Mg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-Mg"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-Mg"
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-Mg"
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-Mg"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Additional Notes"
              value={formData.message}
              onChange={handleChange}
              className="p-4 rounded-xl border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-Mg h-32 resize-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-Mg to-Lg text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

     
    </div>
  );
};

export default BookConsultation;
