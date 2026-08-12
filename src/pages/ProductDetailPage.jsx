import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft, ShoppingCart, Check, Star, Shield, Truck, Headphones,
  ChevronRight, Minus, Plus, Send, CheckCircle, Monitor,
  Zap, Award, X
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductBySlug, submitContact } from '../services/api';
import ProductNavbar from '../components/ProductNavbar';
import Footer from '../components/Footer';

const ProductDetailPage = () => {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imgError, setImgError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [cartAdded, setCartAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('specs');
  const [expandedSpec, setExpandedSpec] = useState(null);

  // Inquiry form
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const load = async () => {
      try {
        setLoading(true);
        const data = await getProductBySlug(productSlug);
        setProduct(data);
        setFormData(prev => ({ ...prev, notes: `I am interested in the ${data.name}. Please provide more information.` }));
      } catch (err) {
        setError('Product not found');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [productSlug]);

  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < qty; i++) addToCart(product);
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: `${formData.notes}\n\nProduct: ${product.name} (ID: ${product.id})`
      });
      if (res.success) setSubmitted(true);
      else alert(res.message || 'Failed to send.');
    } catch {
      alert('Error sending. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Format price
  const formatPrice = (price) => {
    if (!price && price !== 0) return '—';
    return parseFloat(price).toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex flex-col">
        <ProductNavbar />
        <div className="flex-grow flex flex-col items-center justify-center gap-4">
          <div className="w-10 h-10 border-3 border-[#D9FF00] border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Loading product…</p>
        </div>
        <Footer bgGradient="#D0FF00" isDark={true} />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex flex-col">
        <ProductNavbar />
        <div className="flex-grow flex flex-col items-center justify-center gap-5">
          <Monitor size={48} strokeWidth={1} className="text-gray-600" />
          <h2 className="text-xl font-bold text-gray-300">{error || 'Product not found'}</h2>
          <Link to="/products" className="px-6 py-2.5 bg-[#D9FF00] text-black text-xs font-black uppercase tracking-wider rounded-xl hover:opacity-90 transition-all">
            Back to Products
          </Link>
        </div>
        <Footer bgGradient="#D0FF00" isDark={true} />
      </div>
    );
  }

  const specsEntries = Object.entries(product.specs || {}).filter(([, v]) => v);
  const images = product.image ? [product.image] : [];

  return (
    <div className="min-h-screen bg-[#111111] text-white font-poppins flex flex-col">
      <ProductNavbar />

      <main className="flex-grow">
        {/* ── Breadcrumb ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-2">
          <nav className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
            <Link to="/" className="hover:text-[#D9FF00] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/products" className="hover:text-[#D9FF00] transition-colors">Products</Link>
            <ChevronRight size={12} />
            <span className="text-gray-300 truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>

        {/* ── Main Product Section ── */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14">

            {/* LEFT — Image Gallery */}
            <div className="flex flex-col gap-3">
              {/* Main Image */}
              <div className="relative w-full aspect-square bg-[#1a1a1a] rounded-2xl border border-white/8 overflow-hidden flex items-center justify-center group">
                {(!product.image || imgError) ? (
                  <div className="flex flex-col items-center gap-3 text-gray-600">
                    <Monitor size={56} strokeWidth={1} />
                    <span className="text-xs uppercase tracking-widest">No Image Available</span>
                  </div>
                ) : (
                  <img
                    src={images[selectedImage]}
                    alt={product.name}
                    onError={() => setImgError(true)}
                    className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D9FF00] text-black text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip (if multiple images later) */}
              {images.length > 1 && (
                <div className="flex gap-2">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-16 h-16 rounded-xl border-2 overflow-hidden bg-[#1a1a1a] transition-all ${i === selectedImage ? 'border-[#D9FF00]' : 'border-white/10 opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-contain p-1" />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust Badges Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1">
                {[
                  { icon: Shield, label: '3 Year Warranty' },
                  { icon: Truck, label: 'Fast Delivery' },
                  { icon: Award, label: 'Certified Quality' },
                  { icon: Headphones, label: '24/7 Support' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5 bg-[#1a1a1a] border border-white/6 rounded-xl py-3 px-2 text-center">
                    <Icon size={16} className="text-[#D9FF00]" />
                    <span className="text-[9px] text-gray-400 font-semibold leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Product Info & Purchase */}
            <div className="flex flex-col gap-5">
              {/* Category + Title */}
              <div>
                <span className="text-[10px] text-[#D9FF00] uppercase tracking-[0.2em] font-bold">
                  {product.ledType || product.category}
                </span>
                <h1 className="mt-1 text-2xl md:text-3xl font-bold text-white leading-tight font-inter">
                  {product.name}
                </h1>

                {/* Star Rating (cosmetic) */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={13} className={s <= 4 ? 'text-[#D9FF00] fill-[#D9FF00]' : 'text-gray-600 fill-gray-600'} />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">4.0 (Industrial Grade)</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/8" />

              {/* Price Block */}
              <div className="flex items-end gap-3">
                <span className="text-3xl md:text-4xl font-black text-white">
                  £{formatPrice(product.price)}
                </span>
                <span className="text-xs text-gray-500 mb-1 font-medium">incl. VAT</span>
              </div>

              {/* Short Description */}
              <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-[#D9FF00]/40 pl-3">
                {product.description}
              </p>

              {/* Divider */}
              <div className="border-t border-white/8" />

              {/* Quantity + Add to Cart */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider w-20">Quantity</span>
                  <div className="flex items-center gap-0 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQty(q => Math.max(1, q - 1))}
                      className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-10 text-center text-sm font-bold text-white">{qty}</span>
                    <button
                      onClick={() => setQty(q => q + 1)}
                      className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-300 active:scale-[0.98] cursor-pointer ${
                    cartAdded
                      ? 'bg-emerald-500 text-white'
                      : 'bg-[#D9FF00] text-black hover:bg-[#c8ee00]'
                  }`}
                >
                  {cartAdded ? <Check size={16} /> : <ShoppingCart size={16} />}
                  {cartAdded ? 'Added to Cart!' : `Add to Cart — £${formatPrice(product.price * qty)}`}
                </button>

                <button
                  onClick={() => setShowForm(f => !f)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/15 bg-transparent text-white text-sm font-semibold hover:border-[#D9FF00]/50 hover:text-[#D9FF00] transition-all duration-200"
                >
                  <Send size={14} />
                  Request Custom Pricing / Enquiry
                </button>
              </div>

              {/* SKU / Availability */}
              <div className="flex flex-wrap gap-4 text-[11px] text-gray-500">
                <span><span className="text-gray-300 font-semibold">SKU:</span> {product.id}</span>
                <span><span className="text-gray-300 font-semibold">Category:</span> {product.category}</span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span className="text-emerald-400 font-semibold">In Stock</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Inquiry Form (collapsible) ── */}
        {showForm && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 pb-6">
            <div className="bg-[#1a1a1a] border border-white/8 rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-black text-white uppercase tracking-wider">Request Custom Pricing</h3>
                <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-8 text-center">
                  <CheckCircle size={36} className="text-emerald-400" />
                  <h4 className="text-white font-bold text-sm">Enquiry Submitted!</h4>
                  <p className="text-gray-400 text-xs max-w-sm">We've received your request and will contact you shortly with custom pricing.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { name: 'name', placeholder: 'Full Name *', required: true, type: 'text' },
                    { name: 'email', placeholder: 'Email Address *', required: true, type: 'email' },
                    { name: 'phone', placeholder: 'Phone Number', required: false, type: 'tel' },
                    { name: 'company', placeholder: 'Company Name', required: false, type: 'text' },
                  ].map(field => (
                    <input
                      key={field.name}
                      required={field.required}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="bg-[#111] border border-white/10 hover:border-white/20 focus:border-[#D9FF00]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                    />
                  ))}
                  <textarea
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Additional Message"
                    className="sm:col-span-2 bg-[#111] border border-white/10 hover:border-white/20 focus:border-[#D9FF00]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all resize-none"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="sm:col-span-2 flex items-center justify-center gap-2 py-3.5 bg-[#D9FF00] hover:bg-[#c8ee00] text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all active:scale-95"
                  >
                    {submitting ? 'Submitting…' : 'Submit Enquiry'}
                    <Send size={12} />
                  </button>
                </form>
              )}
            </div>
          </section>
        )}

        {/* ── Tabs: Specifications / Features / Description ── */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          {/* Tab Header */}
          <div className="flex border-b border-white/8 gap-6 mb-6">
            {[
              { key: 'specs', label: 'Specifications' },
              { key: 'features', label: 'Features' },
              { key: 'description', label: 'Description' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
                  activeTab === tab.key
                    ? 'border-[#D9FF00] text-[#D9FF00]'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {specsEntries.length > 0 ? specsEntries.map(([key, val]) => (
                <div key={key} className="flex items-start gap-3 bg-[#1a1a1a] border border-white/6 rounded-xl p-4">
                  <Zap size={14} className="text-[#D9FF00] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold capitalize">{key}</p>
                    <p className="text-sm text-white font-semibold mt-0.5">{val}</p>
                  </div>
                </div>
              )) : (
                <p className="text-gray-500 text-sm col-span-3">No specifications available.</p>
              )}
            </div>
          )}

          {activeTab === 'features' && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(product.features || []).length > 0 ? (product.features || []).map((feat, i) => (
                <li key={i} className="flex items-start gap-3 bg-[#1a1a1a] border border-white/6 rounded-xl p-4">
                  <CheckCircle size={15} className="text-[#D9FF00] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-200 leading-relaxed">{feat}</span>
                </li>
              )) : (
                <p className="text-gray-500 text-sm">No features listed.</p>
              )}
            </ul>
          )}

          {activeTab === 'description' && (
            <div className="max-w-3xl">
              <p className="text-sm text-gray-300 leading-relaxed">
                {product.description || 'No description available.'}
              </p>
            </div>
          )}
        </section>

        {/* ── Back Button ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#D9FF00] font-semibold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft size={13} />
            Back to All Products
          </button>
        </div>
      </main>

      <Footer bgGradient="#D0FF00" isDark={true} />
    </div>
  );
};

export default ProductDetailPage;
