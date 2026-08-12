import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, Tag, ArrowRight, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQty, cartTotal, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');
  const [validating, setValidating] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart' | 'checkout' | 'success'
  
  const hasQuoteOnlyItems = items.some(item => item.purchaseType !== 'online');
  
  // Shipping details state
  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });
  const [placingOrder, setPlacingOrder] = useState(false);

  if (!isOpen) return null;

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) return;
    setValidating(true);
    setPromoError('');
    try {
      const res = await fetch(`${BASE_URL}/promo/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: promoCode.trim() })
      });
      const data = await res.json();
      if (data.success) {
        setAppliedPromo(data.data);
        setPromoCode('');
      } else {
        setPromoError(data.message || 'Invalid promo code');
      }
    } catch {
      setPromoError('Connection to server failed');
    } finally {
      setValidating(false);
    }
  };

  const getDiscountAmount = () => {
    if (!appliedPromo) return 0;
    if (appliedPromo.discountType === 'percent') {
      return cartTotal * (appliedPromo.value / 100);
    }
    return Math.min(appliedPromo.value, cartTotal);
  };

  const discount = getDiscountAmount();
  const finalTotal = Math.max(0, cartTotal - discount);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setPlacingOrder(true);

    const cartDetailsText = items.map(item => 
      `- ${item.name} - Qty: ${item.qty}, Price: £${parseFloat(item.price || 0).toLocaleString()}`
    ).join('\n');

    const messageBody = `
New Order Checkout from Ilaan Website:

Customer Details:
-----------------
Name: ${details.name}
Email: ${details.email}
Phone: ${details.phone}
Company: ${details.company || 'N/A'}
Delivery Address: ${details.address}, ${details.city}, ${details.zip}

Applied Promo Code: ${appliedPromo ? `${appliedPromo.code} (${appliedPromo.discountType === 'percent' ? `${appliedPromo.value}%` : `£${appliedPromo.value}`})` : 'None'}
Total Price: £${finalTotal.toLocaleString()}

Cart Contents:
--------------
${cartDetailsText}
    `;

    try {
      const res = await fetch(`${BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: details.name,
          email: details.email,
          phone: details.phone,
          company: details.company || 'N/A',
          message: messageBody
        })
      });
      const data = await res.json();
      if (data.success) {
        setCheckoutStep('success');
        clearCart();
        setAppliedPromo(null);
      } else {
        alert(data.message || 'Failed to place order/submit quote request.');
      }
    } catch (err) {
      console.error(err);
      alert('Error communicating with server. Please check SMTP/network.');
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-poppins">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300"
      />

      {/* Drawer Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-[450px] bg-[#0c0d0a]/95 border-l border-[#D9FF00]/15 shadow-2xl flex flex-col z-10 text-white">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-[#D9FF00]" size={20} />
            <h2 className="text-lg font-bold uppercase tracking-wider text-white">Shopping Cart</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Dynamic Step Views */}
        {checkoutStep === 'cart' && (
          <div className="flex-1 flex flex-col min-h-0">
            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20">
                  <ShoppingBag size={48} className="text-gray-600 stroke-[1.2]" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-300">Your cart is empty</h3>
                    <p className="text-xs text-gray-500 mt-1 max-w-[220px] mx-auto">Add online purchase items to see them here.</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="px-6 py-2 bg-[#D9FF00] text-black font-bold text-xs rounded-full uppercase tracking-wider hover:opacity-90 transition-all active:scale-95"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-2xl relative group">
                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center overflow-hidden p-2 shrink-0">
                      <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      {item.category && (
                        <span className="inline-block text-[9px] font-bold uppercase tracking-widest text-[#D9FF00]/70 bg-[#D9FF00]/10 border border-[#D9FF00]/20 rounded-full px-2 py-0.5 mb-1.5">
                          {item.category}
                        </span>
                      )}
                      <h4 className="text-xs font-bold text-white truncate pr-6">{item.name}</h4>
                      <p className="text-xs font-black text-[#D9FF00] mt-1">
                        £{parseFloat(item.price || 0).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                      </p>
                      
                      <div className="flex items-center gap-3 mt-3">
                        <button 
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all active:scale-95"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold text-white w-4 text-center tabular-nums">{item.qty}</span>
                        <button 
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all active:scale-95"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-red-500/10 text-gray-500 hover:text-red-400 transition-all active:scale-95"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart Summary & Actions */}
            {items.length > 0 && (
              <div className="border-t border-white/5 p-6 bg-black/[0.04] space-y-4">
                
                {/* Promo Code Input */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                      <input 
                        type="text"
                        placeholder="Enter Promo Code"
                        value={promoCode}
                        onChange={e => setPromoCode(e.target.value)}
                        className="w-full bg-[#161713] border border-white/5 focus:border-[#D9FF00]/40 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-all font-mono uppercase tracking-wider"
                      />
                    </div>
                    <button 
                      onClick={handleApplyPromo}
                      disabled={validating || !promoCode.trim()}
                      className="px-4 py-2.5 bg-white/5 border border-white/10 hover:border-[#D9FF00]/50 hover:bg-[#D9FF00] hover:text-black transition-all rounded-xl text-xs font-bold uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {validating ? 'Applying...' : 'Apply'}
                    </button>
                  </div>
                  {promoError && <p className="text-[10px] text-red-500 font-semibold">{promoError}</p>}
                  {appliedPromo && (
                    <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2 rounded-xl text-xs text-emerald-400">
                      <span className="font-bold font-mono tracking-widest">{appliedPromo.code} Applied!</span>
                      <button 
                        onClick={() => setAppliedPromo(null)}
                        className="text-emerald-400/70 hover:text-emerald-400 hover:underline text-[10px] uppercase font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Subtotals & Final Totals */}
                <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span className="font-semibold text-white">£{cartTotal.toLocaleString()}</span>
                  </div>
                  {appliedPromo && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Promo Discount ({appliedPromo.discountType === 'percent' ? `${appliedPromo.value}%` : `£${appliedPromo.value}`})</span>
                      <span className="font-semibold">-£{discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm pt-2 border-t border-white/5 font-bold">
                    <span>Total</span>
                    <span className="text-[#D9FF00]">£{finalTotal.toLocaleString()}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => setCheckoutStep('checkout')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#D9FF00] hover:bg-black hover:text-[#D9FF00] border border-[#D9FF00] text-black font-bold text-xs rounded-xl shadow-lg transition-all duration-300 active:scale-95 uppercase tracking-wider"
                >
                  Proceed to Checkout
                  <ArrowRight size={14} />
                </button>
              </div>
            )}
          </div>
        )}

        {checkoutStep === 'checkout' && (
          <form onSubmit={handlePlaceOrder} className="flex-1 flex flex-col min-h-0">
            {/* Delivery / Quote Details */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                {hasQuoteOnlyItems ? 'Quote Request Information' : 'Order Information'}
              </h3>
              
              <div className="space-y-3.5">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Full Name</label>
                  <input 
                    required
                    type="text"
                    name="name"
                    value={details.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full bg-[#161713] border border-white/5 focus:border-[#D9FF00]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D9FF00]/20 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Email Address</label>
                  <input 
                    required
                    type="email"
                    name="email"
                    value={details.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className="w-full bg-[#161713] border border-white/5 focus:border-[#D9FF00]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D9FF00]/20 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Phone Number</label>
                  <input 
                    required
                    type="tel"
                    name="phone"
                    value={details.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="w-full bg-[#161713] border border-white/5 focus:border-[#D9FF00]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D9FF00]/20 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Shipping Address</label>
                  <input 
                    required
                    type="text"
                    name="address"
                    value={details.address}
                    onChange={handleInputChange}
                    placeholder="Street address"
                    className="w-full bg-[#161713] border border-white/5 focus:border-[#D9FF00]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D9FF00]/20 transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">City</label>
                    <input 
                      required
                      type="text"
                      name="city"
                      value={details.city}
                      onChange={handleInputChange}
                      placeholder="London"
                      className="w-full bg-[#161713] border border-white/5 focus:border-[#D9FF00]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D9FF00]/20 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Postcode / ZIP</label>
                    <input 
                      required
                      type="text"
                      name="zip"
                      value={details.zip}
                      onChange={handleInputChange}
                      placeholder="E1 6AN"
                      className="w-full bg-[#161713] border border-white/5 focus:border-[#D9FF00]/40 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#D9FF00]/20 transition-all font-mono uppercase"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Pricing Details & Action */}
            <div className="border-t border-white/5 p-6 bg-black/[0.04] space-y-4">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>£{cartTotal.toLocaleString()}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span>-£{discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold pt-2 border-t border-white/5">
                  <span>Payable Total</span>
                  <span className="text-[#D9FF00]">£{finalTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="flex-1 py-3.5 bg-transparent hover:bg-white/5 border border-white/10 text-white font-bold text-xs rounded-xl transition-all active:scale-95 uppercase tracking-wider text-center"
                >
                  Back
                </button>
                <button 
                  type="submit"
                  disabled={placingOrder}
                  className="flex-[2] py-3.5 bg-[#D9FF00] hover:bg-black hover:text-[#D9FF00] border border-[#D9FF00] text-black font-bold text-xs rounded-xl shadow-lg transition-all duration-300 active:scale-95 uppercase tracking-wider text-center"
                >
                  {placingOrder ? 'Processing...' : 'Place Order'}
                </button>
              </div>
            </div>
          </form>
        )}

        {checkoutStep === 'success' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#D9FF00]/10 border border-[#D9FF00]/30 flex items-center justify-center text-[#D9FF00] mx-auto animate-bounce">
              <Check size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Order Received!
              </h3>
              <p className="text-xs text-gray-400 mt-2 max-w-[280px] mx-auto leading-relaxed">
                Thank you for your order. A confirmation email and quote breakdown has been sent to your email.
              </p>
            </div>
            <button 
              onClick={() => {
                setCheckoutStep('cart');
                onClose();
              }}
              className="px-8 py-3 bg-[#D9FF00] text-black font-bold text-xs rounded-full uppercase tracking-wider hover:opacity-90 transition-all active:scale-95"
            >
              Continue Browsing
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CartDrawer;
