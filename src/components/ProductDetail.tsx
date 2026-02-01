import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Sparkles, ArrowLeft, Share2 } from 'lucide-react';
import { useState } from 'react';
import { createSlug } from '../utils/slug';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  route: string;
}

export function ProductDetail({ products }: { products: Product[] }) {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const product = products.find(p => createSlug(p.name) === productSlug);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-cream-50 to-lavender-50 flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800">Product Not Found</h1>
          <p className="text-gray-600 text-lg">Sorry, we couldn't find the product you're looking for.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-cream-50 to-lavender-50">
      <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Sparkles className="w-6 h-6 text-rose-400" />
              <span className="text-2xl font-light text-gray-800 tracking-wide">NailLux</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="hidden md:flex items-center gap-2 text-gray-600 hover:text-rose-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => navigate('/')}
            className="md:hidden flex items-center gap-2 text-gray-600 hover:text-rose-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:scale-110 transition-transform"
                  >
                    <Heart className={`w-6 h-6 ${isLiked ? 'fill-rose-400 text-rose-400' : 'text-gray-400'}`} />
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:scale-110 transition-transform"
                  >
                    <Share2 className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>
              {copied && (
                <div className="text-center text-sm text-green-600 font-medium">
                  Link copied to clipboard!
                </div>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-light text-gray-800 mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-medium">
                  Premium Quality
                </span>
                <span className="px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
                  Trending
                </span>
                <span className="px-4 py-2 bg-lavender-100 text-lavender-300 rounded-full text-sm font-medium">
                  Best Seller
                </span>
              </div>

              <div className="space-y-4 py-8 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Product Details</span>
                  <span className="text-sm text-gray-500">Premium Nail Collection</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Availability</span>
                  <span className="text-sm text-green-600 font-medium">In Stock</span>
                </div>
              </div>

              <a
                href={product.route}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
              >
                View on Store
              </a>

              <p className="text-sm text-gray-500 text-center">
                This is an affiliate link. We earn a commission if you make a purchase at no extra cost to you.
              </p>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-gray-200">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-4">
                  You Might Also Love
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Explore other beautiful nail designs from our collection
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedProducts.map(relatedProduct => (
                  <button
                    key={relatedProduct.id}
                    onClick={() => navigate(`/product/${createSlug(relatedProduct.name)}`)}
                    className="group text-left"
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 mb-4">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <h3 className="text-lg font-light text-gray-800 group-hover:text-rose-400 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
          <p>© 2024 NailLux. Affiliate links may earn us a commission. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
