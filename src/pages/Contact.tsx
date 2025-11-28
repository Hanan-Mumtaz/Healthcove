import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import ParticleBackground from '../pages/ParticleBackground';

function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+92 355 6403625", "+92 349 1526911"],
      action: "Call now",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@healthcove.com", "support@healthcove.com"],
      action: "Send email",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["--", "Islamabad, Pakistan"],
      action: "Get directions",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      action: "Book appointment",
    },
  ];

  const faqs = [
    "What are your business hours?",
    "Do you offer virtual consultations?",
    "What's your response time?",
    "How quickly can I book appointments?",
    "Do you provide diet plans?",
    "Do you offer emergency support?",
  ];

  const faqAnswers = {
    "What are your business hours?":
      "We're open Monday–Friday from 9 AM to 6 PM, and Saturdays from 10 AM to 4 PM.",
    "Do you offer virtual consultations?":
      "Yes, we offer both in-person and virtual consultations.",
    "What's your response time?":
      "We typically respond within 24 business hours.",
    "How quickly can I book appointments?":
      "Most appointments can be booked within the same week.",
    "Do you provide diet plans?":
      "Yes, we offer personalized diet and nutrition plans.",
    "Do you offer emergency support?":
      "Yes, limited emergency consultations are available.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 relative pt-16">
      <div className="animated-background" />
      <ParticleBackground />

      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-Mg gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-Dg">
              Have questions about our services? We're here to help you on your path to better health.
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map(({ icon: Icon, title, details, action }, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-6 h-6 text-Lg" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>

                <div className="text-center mb-4">
                  {details.map((detail, i) => (
                    <p key={i} className="text-Dg">
                      {detail}
                    </p>
                  ))}
                </div>

                <button className="w-full bg-violet-100 text-Dg py-2 rounded-xl hover:bg-Lg/30 transition-colors">
                  {action}
                </button>
              </div>
            ))}
          </div>

          {/* Contact Form + FAQ */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl text-Dg font-bold mb-6">Send us a Message</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="First Name" />
                  <Input label="Last Name" />
                </div>

                <Input label="Email" type="email" />
                <Input label="Subject" />
                <Textarea label="Message" />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-Mg to-Lg text-white py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>

            {/* FAQs */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-7 shadow-xl">
              <h2 className="text-2xl font-bold mb-5">Quick FAQs</h2>

              <div className="space-y-4">
                {faqs.map((question, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-2">{question}</h3>
                    <p className="text-gray-600">{faqAnswers[question]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full flex justify-center px-3 mt-20">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-7 shadow-xl w-[90vw] max-w-7xl min-h-[400px]">
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>

              <div className="w-full h-[85%] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=33.151992,73.733369&z=15&output=embed"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* Reusable Components */
const Input = ({ label, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-Dg mb-2">{label}</label>
    <input
      type={type}
      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-Lg focus:border-transparent"
    />
  </div>
);

const Textarea = ({ label }) => (
  <div>
    <label className="block text-sm font-medium text-Dg mb-2">{label}</label>
    <textarea
      rows={3}
      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-Lg focus:border-transparent"
    />
  </div>
);

export default Contact;