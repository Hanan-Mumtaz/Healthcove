import React, { useEffect, useState } from 'react';
import { 
  Apple, 
  Carrot, 
  ChefHat, 
  Clock, 
  Instagram, 
  Linkedin, 
  Mail, 
  MessageCircle, 
  Twitter, 
  Users 
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import logo from './log.png';
import log from './n2.png';
import ParticleBackground from './pages/ParticleBackground';
import SingleBlog from './pages/SingleBlog';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <ParticleBackground />
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform Your Life Through
                <span className="bg-gradient-to-r from-Mg to-Lg bg-clip-text text-transparent">
                  {" "}Healthy Nutrition
                </span>
              </h1>
              <p className="text-xl text-Mg">
                Personalized nutrition plans backed by science. Start your journey to a healthier lifestyle today.
              </p>
              <button className="bg-gradient-to-r from-Mg to-Lg text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 ">
                Book Consultation
              </button>
            </div>
            <div className="relative">
              <img
                src={log}
                alt="Healthy Food"
                className="ml-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white/30 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChefHat className="w-12 h-12 text-Lg" />,
                title: "Personalized Meal Plans",
                description: "Custom nutrition plans tailored to your lifestyle and goals."
              },
              {
                icon: <Users className="w-12 h-12 text-Lg" />,
                title: "1-on-1 Coaching",
                description: "Direct access to expert nutrition guidance and support."
              },
              {
                icon: <Clock className="w-12 h-12 text-Lg" />,
                title: "24/7 Support",
                description: "Round-the-clock assistance for your nutrition journey."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Client <span className="text-Lg">Success Stories</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={`https://i.pravatar.cc/150?img=${i+1}`}
                    alt="Client"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">Lost 20 lbs in 3 months</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The personalized approach and constant support made all the difference in my journey to a healthier lifestyle."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 relative overflow-hidden">
        <div className="animated-background" />
        
        {/* Navbar */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/55 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                  <img src={logo} alt="pic" className="w-30 h-12" />
                </span>
              </Link>

              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-Dg hover:text-white/55 transition-colors duration-300">Home</Link>
                <Link to="/services" className="text-Dg hover:text-white/55 transition-colors duration-300">Services</Link>
                <Link to="/about" className="text-Dg hover:text-white/55 transition-colors duration-300">About</Link>
                <Link to="/blog" className="text-Dg hover:text-white/55 transition-colors duration-300">Blog</Link>
                <Link to="/contact" className="text-Dg hover:text-white/55 transition-colors duration-300">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-white/10 text-black py-12 backdrop-blur-sm relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img src={logo} alt="pic" className="w-30 h-12" />
                </div>
                <p className="text-black-200">
                  Transform your life through the power of nutrition.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-black-200 hover:text-Lg transition-colors">About Us</Link></li>
                  <li><Link to="/services" className="text-black-200 hover:text-Lg transition-colors">Services</Link></li>
                  <li><Link to="/blog" className="text-black-200 hover:text-Lg transition-colors">Blog</Link></li>
                  <li><Link to="/contact" className="text-black-200 hover:text-Lg transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2">
                  <p className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>contact@Healthcove.com</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>+92 (355) 6403625 </span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-black-200 hover:text-Lg transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-Dg text-center text-black-200">
              <p>&copy; {new Date().getFullYear()} Healthcove. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;