import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChefHat,
  Check,
  ArrowLeft
} from "lucide-react";

// Small reusable UI components
const SectionCard = ({ children, className = "" }) => (
  <div className={`bg-white/70 backdrop-blur-sm rounded-xl p-4 ${className}`}>
    {children}
  </div>
);

const PricingCard = ({ plan }) => (
  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
    <p className="text-3xl font-bold text-violet-500 mb-6">{plan.price}</p>
    <ul className="space-y-3 mb-8">
      {plan.features.map((feature, idx) => (
        <li key={idx} className="flex items-center space-x-3">
          <Check className="w-5 h-5 text-violet-500 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className="w-full bg-violet-500 text-white py-3 rounded-xl hover:bg-violet-600 transition-colors">
      Get Started
    </button>
  </div>
);

const FAQItem = ({ faq }) => (
  <SectionCard className="p-6">
    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
    <p className="text-gray-600">{faq.answer}</p>
  </SectionCard>
);

function ServiceDetail() {
  const { id } = useParams();

  // Memoized static content (prevents rerendering cost)
  const service = useMemo(
    () => ({
      icon: <ChefHat className="w-20 h-20 text-violet-500" />,
      title: "Personalized Meal Planning",
      description:
        "Our comprehensive meal planning service is designed to help you achieve your health and nutrition goals through customized, delicious, and sustainable meal plans.",
      image:
        "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=2000",

      benefits: [
        "Customized meal plans based on your preferences and goals",
        "Weekly grocery lists with exact quantities",
        "Easy-to-follow recipes with step-by-step instructions",
        "Nutritional analysis of each meal",
        "Flexible plans that adapt to your schedule",
        "Regular adjustments based on your progress",
        "Access to our recipe database",
        "Mobile app integration for easy tracking"
      ],

      includes: [
        "Initial consultation and assessment",
        "Weekly meal plans",
        "Shopping lists",
        "Recipe instructions",
        "Nutritional guidance",
        "Progress tracking",
        "24/7 support"
      ],

      pricing: [
        {
          name: "Basic Plan",
          price: "$99/month",
          features: [
            "Personalized meal plans",
            "Weekly grocery lists",
            "Basic recipes",
            "Email support"
          ]
        },
        {
          name: "Premium Plan",
          price: "$199/month",
          features: [
            "Everything in Basic",
            "Advanced recipes",
            "24/7 chat support",
            "Monthly consultation",
            "Custom recipe modifications",
            "Progress tracking"
          ]
        },
        {
          name: "Elite Plan",
          price: "$299/month",
          features: [
            "Everything in Premium",
            "Weekly consultations",
            "Priority support",
            "Cooking tutorials",
            "Restaurant guidance",
            "Family meal planning"
          ]
        }
      ],

      faqs: [
        {
          question: "How customizable are the meal plans?",
          answer:
            "Our meal plans are highly customizable and take into account your dietary preferences, restrictions, allergies, and lifestyle factors."
        },
        {
          question: "Can I change my meal plan mid-week?",
          answer:
            "Yes, you can modify your meal plan at any time through our platform or by contacting your nutritionist."
        },
        {
          question: "Do you accommodate dietary restrictions?",
          answer:
            "Absolutely! We cater to various dietary needs including vegetarian, vegan, gluten-free, dairy-free, and more."
        }
      ]
    }),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 relative pt-16">
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <Link
            to="/services"
            className="inline-flex items-center text-violet-500 hover:text-violet-600 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>

          {/* Hero */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="mb-6">{service.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {service.description}
              </p>
              <button className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>

            <img
              src={service.image}
              alt={service.title}
              className="rounded-3xl shadow-2xl"
            />
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <SectionCard key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-violet-500 mt-1" />
                  <span>{benefit}</span>
                </SectionCard>
              ))}
            </div>
          </div>

          {/* Includes */}
          <SectionCard className="p-12 mb-20 rounded-3xl">
            <h2 className="text-3xl font-bold mb-8">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.includes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-violet-50 p-4 rounded-xl"
                >
                  <Check className="w-5 h-5 text-violet-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Pricing */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {service.pricing.map((plan, index) => (
                <PricingCard key={index} plan={plan} />
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-violet-500 to-indigo-500 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Transform your nutrition journey with our personalized meal
              planning service.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-violet-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-violet-500 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
