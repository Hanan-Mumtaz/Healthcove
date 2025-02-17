
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import ParticleBackground from '../pages/ParticleBackground';

function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-Lg" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "Call now"
    },
    {
      icon: <Mail className="w-6 h-6 text-Lg" />,
      title: "Email",
      details: ["contact@nutrilife.com", "support@nutrilife.com"],
      action: "Send email"
    },
    {
      icon: <MapPin className="w-6 h-6 text-Lg" />,
      title: "Location",
      details: ["123 Nutrition Street", "Wellness City, WC 12345"],
      action: "Get directions"
    },
    {
      icon: <Clock className="w-6 h-6 text-Lg" />,
      title: "Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      action: "Book appointment"
    }
  ];

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
              Have questions about our services? We're here to help you on your journey
              to better nutrition and health.
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center text-Dg mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-4">{info.title}</h3>
                <div className="text-center mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-Dg">{detail}</p>
                  ))}
                </div>
                <button className="w-full bg-violet-100 text-Dg py-2 rounded-xl hover:bg-Lg/30 transition-colors">
                  {info.action}
                </button>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl text-Dg font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-Dg mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-Lg focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-Dg mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-Lg focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-Dg mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-Lg focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-Dg mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-Lg focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-Dg mb-2">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-Lg focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-Mg to-Lg text-white py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>

            

              {/* FAQ */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-7 shadow-xl">
                <h2 className="text-2xl font-bold mb-5">Quick FAQs</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">What are your business hours?</h3>
                    <p className="text-gray-600">We're open Monday through Friday from 9:00 AM to 6:00 PM, and Saturdays from 10:00 AM to 4:00 PM.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Do you offer virtual consultations?</h3>
                    <p className="text-gray-600">Yes, we offer both in-person and virtual consultations for your convenience.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">What's your response time?</h3>
                    <p className="text-gray-600">We typically respond to all inquiries within 24 business hours.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">What's your response time?</h3>
                    <p className="text-gray-600">We typically respond to all inquiries within 24 business hours.</p>
                  </div><div>
                    <h3 className="font-semibold mb-2">What's your response time?</h3>
                    <p className="text-gray-600">We typically respond to all inquiries within 24 business hours.</p>
                  </div><div>
                    <h3 className="font-semibold mb-2">What's your response time?</h3>
                    <p className="text-gray-600">We typically respond to all inquiries within 24 business hours. within 24 business hours</p>
                  </div>

                </div>
              </div>
          </div>
          <div className="w-full flex justify-center px-3 mt-20">
  {/* Map Container */}
  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-7 shadow-xl w-[90vw] max-w-7xl min-h-[400px]">
    <h2 className="text-2xl font-bold mb-6">Our Location</h2>
    <div className="w-full h-[85%] rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps?q=33.151992, 73.733369&z=15&output=embed"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Contact;