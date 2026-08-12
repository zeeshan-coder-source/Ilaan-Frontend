import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Shield, Zap, Sparkles, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { submitContact } from '../services/api';

const ProductDetailModal = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: `Interested in requesting a quote for the: ${product?.name}.`
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { addToCart } = useCart();
  const [cartAdded, setCartAdded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const handleAddToCart = () => {
    addToCart(product);
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2000);
  };

  if (!product) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: `${formData.notes}\n\nSubmitted for product: ${product.name} (ID: ${product.id}).`
      });
      if (response.success) {
        setSubmitted(true);
      } else {
        alert(response.message || "Failed to send quote request.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending quote request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex justify-center items-center p-4 md:p-6"
      onClick={onClose}
    >
      {/* Modal Card wrapper — Split BG to prevent color gaps, data-lenis-prevent added to allow native scroll */}
      <div 
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
        className="relative w-full max-w-5xl bg-white md:bg-gradient-to-r md:from-white md:from-50% md:to-[#D9FF00] md:to-50% border border-gray-200 rounded-[2rem] shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto select-none no-scrollbar"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black text-[#D9FF00] hover:bg-gray-800 transition-all duration-300 focus:outline-none shadow-md"
        >
          <X size={16} />
        </button>

        {/* Left Section: Product Visuals */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-center justify-center bg-white relative shrink-0">
          <div className="relative w-full flex items-center justify-center p-4 bg-gray-50 border border-gray-100 rounded-3xl aspect-square max-w-[280px] overflow-hidden shadow-inner">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[220px] max-w-[95%] w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          {/* Warranty / Trust Badges */}
          <div className="mt-6 grid grid-cols-2 gap-3.5 w-full max-w-[280px] relative z-10 text-gray-700">
            <div className="flex items-center gap-2 text-[10px] font-semibold bg-gray-50 border border-gray-200 px-3.5 py-2.5 rounded-xl">
              <Shield size={14} className="text-gray-900" />
              <span>3 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-semibold bg-gray-50 border border-gray-200 px-3.5 py-2.5 rounded-xl">
              <Zap size={14} className="text-gray-900" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Right Section: Specifications and Forms */}
        <div className="w-full md:w-1/2 p-6 md:p-10 pb-12 md:pb-16 flex flex-col justify-between bg-[#D9FF00] text-black">
          <div>
            {/* Category / Name */}
            <span className="text-[9px] font-extrabold text-black/60 tracking-widest uppercase mb-1 block">
              {product.category}
            </span>
            <h2 className="text-xl md:text-2xl font-black text-black leading-tight font-inter">
              {product.name}
            </h2>
            <p className="mt-2 text-xs text-black/80 font-poppins leading-relaxed font-semibold">
              {product.description}
            </p>

            {/* Spec Sheet Grid */}
            <div className="mt-5 bg-white border border-black/5 rounded-2xl p-4 md:p-5 shadow-sm">
              <h3 className="text-[11px] font-black uppercase tracking-wider text-black mb-3.5 flex items-center gap-1.5 border-b border-black/5 pb-2">
                <Sparkles size={13} className="text-[#D9FF00] fill-[#D9FF00] stroke-black" />
                Key Specifications
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5 text-xs">
                {Object.entries(product.specs || {}).map(([key, val]) => (
                  <li key={key} className="flex flex-col border-b border-gray-100 pb-1">
                    <span className="text-gray-400 capitalize text-[9px] font-bold">{key}</span>
                    <span className="text-gray-800 font-extrabold mt-0.5">{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features List */}
            <div className="mt-5 space-y-2.5">
              <h4 className="text-[10px] font-black uppercase tracking-wider text-black/70">
                Product Features
              </h4>
              <ul className="space-y-2">
                {(product.features || []).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-black/80 font-semibold">
                    <CheckCircle size={13} className="text-black shrink-0 mt-0.5" />
                    <span className="font-poppins leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact / Quote Form Section */}
          <div className="mt-6 pt-5 border-t border-black/10">
            {/* Add to Cart button for all products */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-2 py-3 mb-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer ${
                cartAdded
                  ? 'bg-emerald-600 text-white border border-emerald-600'
                  : 'bg-black text-[#D9FF00] hover:bg-gray-800 border border-black'
              }`}
            >
              <ShoppingCart size={13} />
              {cartAdded 
                ? 'Added to Cart!' 
                : product.purchaseType === 'online'
                  ? `Add to Cart — £${parseFloat(product.price || 0).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})}`
                  : 'Add to Cart — POA'}
            </button>
            
            {submitted ? (
              <div className="bg-white border border-black/5 rounded-2xl p-5 text-center shadow-sm">
                <CheckCircle size={28} className="text-emerald-500 mx-auto mb-1.5" />
                <h4 className="text-black font-extrabold text-xs uppercase tracking-wider">Request Submitted</h4>
                <p className="text-gray-500 text-[11px] mt-1 font-semibold">
                  We'll contact you shortly with custom pricing.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <h4 className="text-xs font-black text-black uppercase tracking-wider mb-1 font-inter">Request Custom Pricing</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full bg-white border border-black/10 hover:border-black/20 focus:border-black rounded-xl px-3.5 py-2.5 text-xs text-black placeholder-gray-400 focus:outline-none transition-all font-semibold"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full bg-white border border-black/10 hover:border-black/20 focus:border-black rounded-xl px-3.5 py-2.5 text-xs text-black placeholder-gray-400 focus:outline-none transition-all font-semibold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number (Optional)"
                    className="w-full bg-white border border-black/10 hover:border-black/20 focus:border-black rounded-xl px-3.5 py-2.5 text-xs text-black placeholder-gray-400 focus:outline-none transition-all font-semibold"
                  />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full bg-white border border-black/10 hover:border-black/20 focus:border-black rounded-xl px-3.5 py-2.5 text-xs text-black placeholder-gray-400 focus:outline-none transition-all font-semibold"
                  />
                </div>

                <textarea
                  rows="2"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Additional Message"
                  className="w-full bg-white border border-black/10 hover:border-black/20 focus:border-black rounded-xl px-3.5 py-2.5 text-xs text-black placeholder-gray-400 focus:outline-none transition-all font-semibold resize-none"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-1.5 py-3 bg-black hover:bg-gray-800 border border-black text-[#D9FF00] font-black text-xs rounded-xl shadow-md transition-all duration-300 active:scale-95 cursor-pointer uppercase tracking-wider"
                >
                  {submitting ? 'Submitting...' : 'Submit Request'}
                  <Send size={11} />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailModal;
