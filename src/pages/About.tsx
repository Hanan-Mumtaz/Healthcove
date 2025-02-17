import React from 'react';
import { Award, BookOpen, Users, Heart } from 'lucide-react';
import n from '../n1.png';
import ParticleBackground from './ParticleBackground';

function About() {
  const team = [
    {
      name: "Areej Fatima",
      role: "Lead Nutritionist",
      image: n,
      description: "Registered Dietitian specializing in sports nutrition and weight management."
    },
    {
      name: "Michael Chen",
      role: "Dietitian Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      description: "Registered Dietitian specializing in sports nutrition and weight management."
    },
    {
      name: "David Wilson",
      role: "Clinical Nutritionist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      description: "Specializes in medical nutrition therapy and chronic disease management."
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-Mg" />, value: "10,000+", label: "Clients Served" },
    { icon: <Award className="w-8 h-8 text-Mg" />, value: "15+", label: "Years Experience" },
    { icon: <Heart className="w-8 h-8 text-Mg" />, value: "95%", label: "Success Rate" },
    { icon: <BookOpen className="w-8 h-8 text-Mg" />, value: "500+", label: "Published Articles" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 relative pt-16">
      <div className="animated-background" />
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-Mg">NutriLife</span>
            </h1>
            <p className="text-xl text-Dg">
              We're dedicated to transforming lives through the power of proper nutrition.
              Our evidence-based approach combines science with personalized care to help
              you achieve your health goals.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="justify-center text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-Dg">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 mb-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-Dg max-w-3xl mx-auto">
              To empower individuals with the knowledge, tools, and support they need
              to achieve optimal health through proper nutrition. We believe in a
              holistic approach that considers each person's unique needs and lifestyle.
            </p>
          </div>

          {/* Team Section */}
          <h2 className="text-3xl font-bold text-center mb-12">Our Expert Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-Lg font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;