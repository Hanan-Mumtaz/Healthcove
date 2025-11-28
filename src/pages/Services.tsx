import React, { useMemo } from 'react';
import { ChefHat, Users, Clock, Heart, Brain, Apple } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const ICONS = {
  meal: ChefHat,
  coaching: Users,
  health: Heart,
  education: Brain,
  weight: Apple,
  support: Clock,
};

function Services() {
  // Memoized services so they are not recreated on every render
  const services = useMemo(
    () => [
      {
        icon: ICONS.meal,
        title: "Personalized Meal Planning",
        description:
          "Custom-tailored nutrition plans that fit your lifestyle, preferences, and health goals. We consider your dietary restrictions, schedule, and cooking abilities.",
        features: ["Weekly meal plans", "Grocery lists", "Recipe instructions", "Portion guidance"],
      },
      {
        icon: ICONS.coaching,
        title: "1-on-1 Nutrition Coaching",
        description:
          "Direct access to certified nutritionists who will guide you through your health journey with personalized advice and support.",
        features: ["Weekly check-ins", "Progress tracking", "Behavioral coaching", "Goal setting"],
      },
      {
        icon: ICONS.health,
        title: "Health Condition Management",
        description:
          "Specialized nutrition programs for managing specific health conditions and achieving optimal wellness.",
        features: ["Condition-specific plans", "Supplement guidance", "Lifestyle modifications", "Progress monitoring"],
      },
      {
        icon: ICONS.education,
        title: "Nutrition Education",
        description:
          "Learn the science behind nutrition and develop lasting healthy eating habits through our educational programs.",
        features: ["Online workshops", "Educational resources", "Cooking classes", "Nutrition basics"],
      },
      {
        icon: ICONS.weight,
        title: "Weight Management",
        description:
          "Evidence-based weight management programs focused on long-term, sustainable results.",
        features: ["Body composition analysis", "Customized meal plans", "Exercise guidance", "Behavioral support"],
      },
      {
        icon: ICONS.support,
        title: "24/7 Support System",
        description:
          "Round-the-clock support to keep you motivated and on track with your nutrition goals.",
        features: ["Chat support", "Emergency consultations", "Daily motivation", "Community access"],
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 relative pt-16">
      <div className="animated-background" />
      <ParticleBackground />

      {/* HERO SECTION */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-Mg">Services</span>
          </h1>
          <p className="text-xl text-Dg max-w-3xl mx-auto mb-12">
            Comprehensive nutrition services tailored to your needs.
            Experience transformation through expert guidance.
          </p>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map(({ icon: Icon, title, description, features }, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 flex justify-center">
                  <Icon className="w-16 h-16 text-Mg" />
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
                <p className="text-gray-600 mb-6 text-center">{description}</p>

                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-Mg rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 text-center text-Mg">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Take the first step toward a healthier lifestyle with our personalized nutrition services.
            </p>

            <button className="bg-gradient-to-r from-Mg to-Lg text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
