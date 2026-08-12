import React, { useState } from 'react';
import { ShoppingCart, Check, Monitor, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onOpenDetails }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCartClick = (e) => {
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const handleCardClick = () => {
    if (onOpenDetails) onOpenDetails(product);
  };

  const displayPrice = product.price
    ? `£${parseFloat(product.price).toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`
    : 'POA';

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer
                 bg-white
                 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shadow-sm"
    >
      {/* ── Image area ─────────────────────────── */}
      <div className="relative h-44 sm:h-48 flex items-center justify-center overflow-hidden bg-[#f8f8f8]">

        {/* Fallback placeholder when image is missing / broken */}
        {(!product.image || imgError) ? (
          <div className="flex flex-col items-center justify-center gap-1.5 text-gray-300 select-none w-full h-full">
            <Monitor size={28} strokeWidth={1} className="text-gray-300" />
            <span className="text-[8px] uppercase tracking-widest text-gray-400">No Image</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover
                       transition-transform duration-500 group-hover:scale-[1.05]"
          />
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100
                        transition-opacity duration-300 flex items-center justify-center">
          <span className="flex items-center gap-1 text-[9px] font-bold text-white
                           bg-black/70 backdrop-blur-sm border border-white/10
                           px-2.5 py-1.5 rounded-full uppercase tracking-wider">
            <Eye size={9} />
            View Details
          </span>
        </div>
      </div>

      {/* ── Info area — brand yellow-green ─────── */}
      <div className="bg-[#D9FF00] px-2.5 pt-2 pb-2.5 flex flex-col gap-1.5 select-none border-t border-black/5">
        <div className="space-y-0.5">
          {/* Category */}
          <p className="text-[7.5px] text-black/55 font-bold tracking-widest uppercase line-clamp-1">
            {product.category || 'Display'}
          </p>

          {/* Product name */}
          <h3 className="text-[11.5px] font-bold text-black font-inter line-clamp-2 leading-tight min-h-[2rem]">
            {product.name}
          </h3>
        </div>

        {/* Spec pills */}
        {product.specs && (
          <div className="flex flex-wrap gap-0.5">
            {product.specs.resolution && (
              <span className="text-[7px] text-black/65 bg-black/8 border border-black/8
                               px-1 py-0.5 rounded font-bold">
                {product.specs.resolution}
              </span>
            )}
            {product.specs.brightness && (
              <span className="text-[7px] text-black/65 bg-black/8 border border-black/8
                               px-1 py-0.5 rounded font-bold">
                {product.specs.brightness}
              </span>
            )}
          </div>
        )}

        {/* Divider & price / actions */}
        <div className="border-t border-black/10 pt-2 flex items-center justify-between gap-1.5">
          {/* Price */}
          <span className="text-sm font-black text-black">
            {displayPrice}
          </span>

          {/* Add to Cart/Quote button */}
          <button
            onClick={handleCartClick}
            className={`flex items-center gap-1 text-[8px] font-black px-2.5 py-1.5
                        rounded-full uppercase tracking-wider transition-all duration-300 shrink-0
                        ${added
                          ? 'bg-emerald-500 text-white scale-105'
                          : 'bg-black text-[#D9FF00] hover:bg-gray-800 active:scale-95'}`}
          >
            {added ? <Check size={8} /> : <ShoppingCart size={8} />}
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;