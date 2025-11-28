import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

// ------------------------------
// STATIC DATA (prevents re-render)
// ------------------------------
const featuredPost = {
  title: "The Science Behind Intuitive Eating",
  excerpt:
    "Discover how listening to your body's natural hunger and fullness cues can lead to better health outcomes and a more balanced relationship with food.",
  image:
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=2000",
  date: "March 15, 2024",
  author: "Dr. Sarah Johnson",
  readTime: "8 min read"
};

const posts = [
  {
    title: "Understanding Macronutrients: A Complete Guide",
    excerpt:
      "Learn about proteins, carbohydrates, and fats, and how they contribute to your overall health and fitness goals.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    date: "March 12, 2024",
    author: "Michael Chen"
  },
  {
    title: "Meal Prep Strategies for Busy Professionals",
    excerpt:
      "Effective meal planning and preparation techniques to maintain a healthy diet despite a hectic schedule.",
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=800",
    date: "March 10, 2024",
    author: "Emily Rodriguez"
  },
  {
    title: "The Role of Gut Health in Overall Wellness",
    excerpt:
      "Exploring the connection between digestive health and various aspects of physical and mental well-being.",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=800",
    date: "March 8, 2024",
    author: "Dr. David Wilson"
  },
  {
    title: "Sustainable Eating: A Guide to Eco-Friendly Nutrition",
    excerpt:
      "How to make environmentally conscious food choices while maintaining optimal nutrition.",
    image:
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800",
    date: "March 5, 2024",
    author: "Sarah Johnson"
  },
  {
    title: "Sports Nutrition: Fueling Your Performance",
    excerpt:
      "Essential nutrition strategies for athletes and active individuals to enhance performance and recovery.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    date: "March 3, 2024",
    author: "Michael Chen"
  },
  {
    title: "Mindful Eating in the Digital Age",
    excerpt:
      "Practicing mindful eating habits in a world full of distractions and quick-fix solutions.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=800",
    date: "March 1, 2024",
    author: "Emily Rodriguez"
  }
];

// --------------------------------------
// MEMOIZED POST CARD (faster rendering)
// --------------------------------------
const BlogCard = memo(({ post, index }) => (
  <Link to={`/blog/${index}`} className="block">
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="h-48 relative">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
      </div>
    </div>
  </Link>
));

function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 relative pt-16">
      <div className="animated-background" />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcove <span className="text-Mg">Blog</span>
            </h1>
            <p className="text-xl text-gray-600">
              Expert insights, tips, and the latest research in nutrition and healthy living.
            </p>
          </div>

          {/* Featured Post */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl mb-20">
            <div className="grid md:grid-cols-2 gap-8">

              <div className="h-96 md:h-auto relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-Lg font-semibold mb-4">Featured Post</div>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>

                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>

                <Link
                  to="/blog/featured"
                  className="flex items-center text-Lg font-semibold hover:text-Mg transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default Blog;
