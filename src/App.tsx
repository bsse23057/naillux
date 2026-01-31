import { Heart, Sparkles, Clock, Star, TrendingUp, Mail, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSection, setActiveSection] = useState('trending');
  const productsPerPage = 6;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['trending', 'lifestyle', 'subscribe'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "Sunset Ombré",
      description: "Soft gradient nails that blend peach and coral tones for a dreamy summer vibe",
      image: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$24.99"
    },
    {
      id: 2,
      name: "French Elegance",
      description: "Classic meets modern with this timeless nude and white French manicure design",
      image: "https://images.pexels.com/photos/6621460/pexels-photo-6621460.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$29.99"
    },
    {
      id: 3,
      name: "Glitter Glam",
      description: "Sparkle and shine with rose gold glitter that catches the light beautifully",
      image: "https://images.pexels.com/photos/3997360/pexels-photo-3997360.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$22.99"
    },
    {
      id: 4,
      name: "Lavender Dreams",
      description: "Soft pastel purple nails perfect for a feminine and romantic aesthetic",
      image: "https://images.pexels.com/photos/6621337/pexels-photo-6621337.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$26.99"
    },
    {
      id: 5,
      name: "Nude Perfection",
      description: "Sophisticated bare-toned nails that complement every outfit and occasion",
      image: "https://images.pexels.com/photos/6621445/pexels-photo-6621445.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$23.99"
    },
    {
      id: 6,
      name: "Blossom Beauty",
      description: "Delicate floral accents on a soft pink base for the ultimate feminine touch",
      image: "https://images.pexels.com/photos/5706452/pexels-photo-5706452.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "$31.99"
    }
  ];

  const lifestyle = [
    {
      id: 1,
      title: "Office Chic",
      image: "https://images.pexels.com/photos/6621338/pexels-photo-6621338.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Professional elegance meets personal style"
    },
    {
      id: 2,
      title: "Coffee Dates",
      image: "https://images.pexels.com/photos/7697459/pexels-photo-7697459.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Add charm to everyday moments"
    },
    {
      id: 3,
      title: "Special Events",
      image: "https://images.pexels.com/photos/8467877/pexels-photo-8467877.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Stand out on your big day"
    }
  ];

  const reasons = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Self-Love",
      description: "A beautiful way to express care for yourself"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Confidence Boost",
      description: "Feel polished and ready to take on the world"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Long-Lasting",
      description: "Enjoy gorgeous nails that stay perfect for weeks"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Versatile Style",
      description: "From casual to formal, there's a look for every mood"
    }
  ];

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      document.getElementById('trending')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      document.getElementById('trending')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-cream-50 to-lavender-50">
      <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Sparkles className="w-6 h-6 text-rose-400" />
              <span className="text-2xl font-light text-gray-800 tracking-wide">NailLux</span>
            </a>

            <div className="hidden md:flex space-x-8 text-gray-600 text-sm">
              <a
                href="#trending"
                onClick={(e) => handleNavClick(e, '#trending')}
                className={`transition-all duration-300 ${activeSection === 'trending' ? 'text-rose-400 font-medium' : 'hover:text-rose-400'}`}
              >
                Trending
              </a>
              <a
                href="#lifestyle"
                onClick={(e) => handleNavClick(e, '#lifestyle')}
                className={`transition-all duration-300 ${activeSection === 'lifestyle' ? 'text-rose-400 font-medium' : 'hover:text-rose-400'}`}
              >
                Lifestyle
              </a>
              <a
                href="#reasons"
                onClick={(e) => handleNavClick(e, '#reasons')}
                className={`transition-all duration-300 hover:text-rose-400`}
              >
                Why Love It
              </a>
              <a
                href="#subscribe"
                onClick={(e) => handleNavClick(e, '#subscribe')}
                className={`transition-all duration-300 ${activeSection === 'subscribe' ? 'text-rose-400 font-medium' : 'hover:text-rose-400'}`}
              >
                Subscribe
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 mt-4 pt-4 pb-4 space-y-3 animate-in fade-in">
              <a
                href="#trending"
                onClick={(e) => handleNavClick(e, '#trending')}
                className="block text-gray-600 hover:text-rose-400 transition-colors"
              >
                Trending
              </a>
              <a
                href="#lifestyle"
                onClick={(e) => handleNavClick(e, '#lifestyle')}
                className="block text-gray-600 hover:text-rose-400 transition-colors"
              >
                Lifestyle
              </a>
              <a
                href="#reasons"
                onClick={(e) => handleNavClick(e, '#reasons')}
                className="block text-gray-600 hover:text-rose-400 transition-colors"
              >
                Why Love It
              </a>
              <a
                href="#subscribe"
                onClick={(e) => handleNavClick(e, '#subscribe')}
                className="block text-gray-600 hover:text-rose-400 transition-colors"
              >
                Subscribe
              </a>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-16">
        <section className={`relative min-h-screen flex items-center justify-center px-4 py-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-lavender-100/30 to-rose-100/50"></div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-light text-gray-800 leading-tight">
                Your Nails,
                <span className="block text-rose-400 font-normal">Your Statement</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Discover stunning nail designs and accessories that help you express your unique beauty. From elegant classics to bold trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Shop Trending Nails
                </button>
                <button className="px-8 py-4 bg-white text-gray-700 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200">
                  Explore Collections
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Beautiful nail art"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-400/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-rose-400" />
                  <div>
                    <p className="text-sm text-gray-500">Trending This Week</p>
                    <p className="text-lg font-medium text-gray-800">Ombré Elegance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="trending" className="py-20 px-4 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
                Trending Now
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The most loved nail designs by women everywhere. Each style is carefully curated to make you feel confident and beautiful.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-5 h-5 text-rose-400" />
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-light text-gray-800">{product.name}</h3>
                      <span className="text-rose-400 font-medium">{product.price}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                    <button className="w-full py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                      View Product
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex items-center justify-center gap-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-3 rounded-full bg-white border border-gray-200 hover:border-rose-400 hover:text-rose-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      document.getElementById('trending')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-10 h-10 rounded-full transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-rose-400 to-pink-400 text-white'
                        : 'bg-white border border-gray-200 text-gray-600 hover:border-rose-400 hover:text-rose-400'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-3 rounded-full bg-white border border-gray-200 hover:border-rose-400 hover:text-rose-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        <section id="lifestyle" className="py-20 px-4 bg-gradient-to-b from-lavender-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
                For Every Moment
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Beautiful nails complement your lifestyle, from work to play and everything in between.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {lifestyle.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-96"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-light mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reasons" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
                Why Women Love These Styles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                More than just beauty, it's about how they make you feel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="text-center space-y-4 p-8 rounded-3xl hover:bg-pink-50 transition-colors duration-300"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl text-rose-400">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="subscribe" className="py-20 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-lavender-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center space-y-8">
              <div className="inline-flex p-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl">
                <Mail className="w-8 h-8 text-rose-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-800">
                Stay Inspired
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Get the latest nail trends, exclusive designs, and beauty tips delivered to your inbox every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Join 10,000+ women who get their weekly dose of nail inspiration
              </p>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-6 h-6 text-rose-400" />
                  <span className="text-2xl font-light">NailLux</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Your destination for stunning nail inspiration and curated accessories.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Shop</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Trending Designs</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Best Sellers</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Sale</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Inspiration</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Nail Guides</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Style Tips</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Seasonal Trends</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Care Tips</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Pinterest</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">TikTok</a></li>
                  <li><a href="#" className="hover:text-rose-400 transition-colors">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2024 NailLux. Affiliate links may earn us a commission. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .animate-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
