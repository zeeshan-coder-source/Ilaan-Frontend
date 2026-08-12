// import React, { useMemo, useState, useEffect } from 'react';
// import { ChevronDown, X } from 'lucide-react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useProducts } from '../hooks/useProducts';
// import ProductNavbar from '../components/ProductNavbar';
// import SearchBar from '../components/SearchBar';
// import Filters from '../components/Filters';
// import ProductCard from '../components/ProductCard';
// import Footer from '../components/Footer';


// // Assets
// import heroDisplayImg from '../assets/02 1.png';
// import productBgImg from '../assets/productbg.png';
// import herosectionbg from '../assets/Rectangle 12348.png';
// import checkMarkIcon from '../assets/check-mark 1.png';
// import buttonBgImg from '../assets/Rectangle 12352.png';
// import productherobg from '../assets/productherobg.png';

// const ProductsPage = () => {
//   const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
//   const {
//     products, loading, search, setSearch, sort, setSort, priceRange, setPriceRange,
//     selectedFilters, toggleFilter, resetFilters, applyFilters, hasPendingChanges,
//     availableFilters, filtersLoading,
//     categorySubcategoryMap, page, setPage, limit, setLimit, pagination
//   } = useProducts();

//   // Handle navigation to dedicated details page
//   const handleOpenModal = (product) => {
//     navigate(`/products/${product.slug || product.id}`);
//   };

//   const heroSpecs = [
//     "Ultra HD (3840x2160) Resolution",
//     "24/7 Commercial Use",
//     "Remote Content Management",
//     "WiFi & LAN Mounting Options",
//     "Multiple Mounting Options",
//     "High Brightness & Visibility"
//   ];

//   // Fallback for featured items
//   const featuredCollections = useMemo(() => {
//     return products.slice(0, 5);
//   }, [products]);

//   const handleHeroQuote = () => {
//     const heroProduct = products.find(p => p.id === 2) || products[0];
//     if (heroProduct) handleOpenModal(heroProduct);
//   };

//   // We still need navigate for filters / back navigation
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen text-white overflow-x-hidden font-poppins selection:bg-[#D9FF00]/30 selection:text-white bg-[#4B4B4B]">

//       {/* Top Section: Galaxy Background (Navbar + Hero + Search) */}
//       <style>{`
//         .products-hero-bg {
//           background-image: url(${productBgImg});
//         }
//         @media (max-w: 1023px) {
//           .products-hero-bg {
//             background-image: url(${productherobg});
//           }
//         }
//       `}</style>
//       <div
//         className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative border-b border-white/5 flex flex-col justify-between products-hero-bg"
//         style={{ backgroundColor: '#030508' }}
//       >
//         <ProductNavbar />

//         <main className="flex-grow w-full mx-auto px-4 md:px-22 pt-2 pb-10 flex flex-col justify-between">

//           {/* Hero Section */}
//           <section className="w-full flex-grow flex items-center py-6">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

//               <div className="mt-20 lg:col-span-4 space-y-8 text-center lg:text-left">
//                 {/* Breadcrumb */}
//                 <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs sm:text-sm font-light text-gray-400 tracking-wide">
//                   <span className="cursor-pointer hover:text-white transition-colors">Products</span>
//                   <span className="text-gray-600">/</span>
//                   <span className="text-gray-200">4K Digital Signage Display</span>
//                 </div>

//                 <div className="space-y-6">
//                   <h1 className="text-4xl md:text-5xl lg:text-[56px] font-[100] font-medium tracking-tight leading-[1.15] text-white text-center lg:text-left">
//                     4K Digital <br />
//                     Signage Display
//                   </h1>

//                   {/* Mobile Hero Spacer (shows background image monitor without overlap) */}
//                   <div className="lg:hidden h-[280px] sm:h-[340px] w-full"></div>

//                   <div className="flex flex-wrap gap-2 pt-2 max-w-sm justify-center lg:justify-start mx-auto lg:mx-0">
//                     {["Ultra HD Display", "24/7 Operation", "Remote", "Remote Content Management"].map((tag, idx) => (
//                       <span key={idx} className="px-3.5 py-2 bg-[#12161a]/60 border border-white/10 rounded-lg text-xs font-light text-gray-300 whitespace-nowrap">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="pt-4 flex justify-center lg:justify-start">
//                   <button
//                     onClick={handleHeroQuote}
//                     className="w-[193px] h-[58px] flex items-center justify-center text-white font-light text-sm tracking-wider rounded-full transition-all duration-300 active:scale-95 hover:scale-[1.02]"
//                     style={{
//                       background: 'linear-gradient(#030508, #030508) padding-box, linear-gradient(to right, #22458E, #2F7F5A) border-box',
//                       border: '2.5px solid transparent',
//                       boxShadow: '0 0 20px rgba(34, 69, 142, 0.35), 0 0 20px rgba(47, 127, 90, 0.35)'
//                     }}
//                   >
//                     Get a Quote
//                   </button>
//                 </div>
//               </div>


//               {/* Desktop Hero Image (visible only on desktop) */}
//               <div className="hidden lg:flex lg:col-span-5 justify-center items-center min-h-[300px]">
//                 {/* <div className="w-full max-w-lg drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] hover:scale-[1.01] transition-transform duration-700">
//                   <img src={heroDisplayImg} alt="Display" className="w-full h-auto object-contain" />
//                 </div> */}
//               </div>


//               <div
//                 className="lg:col-span-3 w-full max-w-[389px] h-auto lg:h-[496px] p-6 lg:p-7 flex flex-col justify-between bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-2xl shrink-0 mx-auto lg:mx-0 gap-8 lg:gap-0"
//                 style={{ backgroundImage: `url(${herosectionbg})` }}
//               >
//                 <div className="space-y-5">
//                   <h3 className="text-lg font-medium text-white tracking-wide">Key Specifications</h3>
//                   <ul className="space-y-3.5">
//                     {heroSpecs.map((spec, i) => (
//                       <li key={i} className="flex items-center gap-3 text-xs md:text-[13px] text-gray-300 font-light leading-relaxed">
//                         <img
//                           src={checkMarkIcon}
//                           alt="Check"
//                           className="w-4 h-4 shrink-0 object-contain"
//                         />
//                         <span>{spec}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="flex flex-col items-start gap-2.5 pt-2 w-full">
//                   <button
//                     onClick={handleHeroQuote}
//                     className="w-[135px] h-[49px] flex items-center justify-center bg-gradient-to-b from-[#20273D] to-[#171E2E] border border-white/10 hover:border-[#00E5FF]/40 hover:text-white rounded-md text-xs font-light text-gray-300 transition-all tracking-wide"
//                   >
//                     Datasheet
//                   </button>
//                   <button
//                     onClick={handleHeroQuote}
//                     className="w-[159px] h-[53px] flex items-center justify-center bg-gradient-to-b from-[#20273D] to-[#171E2E] border border-white/10 hover:border-[#00E5FF]/40 hover:text-white rounded-md text-xs font-light text-gray-300 transition-all tracking-wide"
//                   >
//                     Request info
//                   </button>
//                   <button
//                     onClick={resetFilters}
//                     className="w-[201px] h-[53px] flex items-center justify-center bg-gradient-to-b from-[#20273D] to-[#171E2E] border border-white/10 hover:border-[#00E5FF]/40 hover:text-white rounded-md text-xs font-light text-gray-300 transition-all tracking-wide"
//                   >
//                     View All Products
//                   </button>
//                 </div>
//               </div>



//             </div>
//           </section>

//           {/* Search Bar */}
//           <div className="w-full">
//             <SearchBar value={search} onChange={setSearch} />
//           </div>
//         </main>
//       </div>

//       {/* Bottom Section: Solid Dark Background (Collections + Catalog) */}
//       <div className="w-full bg-[#2b2b2b] py-14">
//         <main className="w-full mx-auto px-4 md:px-22 space-y-14">

//           {/* Featured Collections */}
//           {featuredCollections.length > 0 && (
//             <section className="space-y-5">
//               <div className="flex justify-between items-center border-b border-white/10 pb-4 gap-4">
//                 <div className="text-left flex-grow">
//                   <span className="block text-[11px] text-[#D9FF00]/70 uppercase tracking-[0.18em] font-bold">
//                     Top Sellers
//                   </span>
//                   <span className="block mt-1 text-2xl sm:text-3xl font-light text-white leading-tight">
//                     Best Collections
//                   </span>
//                 </div>
//                 <button
//                   onClick={resetFilters}
//                   className="px-4 py-1.5 text-xs border border-[#D9FF00]/50 rounded-full hover:bg-[#D9FF00]/10 transition-colors text-[#D9FF00] font-medium tracking-wide whitespace-nowrap shrink-0"
//                 >
//                   View All
//                 </button>
//               </div>
//               {/* 5-col horizontal scroll on mobile, grid on desktop */}
//               <div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-5 gap-4 pb-2 lg:pb-0 snap-x snap-mandatory w-full no-scrollbar pt-2">
//                 {featuredCollections.map((prod) => (
//                   <div key={prod.id} className="w-[220px] sm:w-[260px] lg:w-full shrink-0 snap-start">
//                     <ProductCard
//                       product={prod}
//                       isCollection={true}
//                       onOpenDetails={handleOpenModal}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Catalog Section */}
//           <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">

//             {/* Sidebar filter column — sticky, height expands with dropdowns */}
//             <aside className="hidden lg:block lg:col-span-2 bg-[#1c1d1a] rounded-[20px] p-5 sticky top-24">
//               <Filters
//                 selectedFilters={selectedFilters}
//                 toggleFilter={toggleFilter}
//                 priceRange={priceRange}
//                 setPriceRange={setPriceRange}
//                 availableFilters={availableFilters}
//                 filtersLoading={filtersLoading}
//                 resetFilters={resetFilters}
//                 applyFilters={applyFilters}
//                 hasPendingChanges={hasPendingChanges}
//                 categorySubcategoryMap={categorySubcategoryMap}
//               />
//             </aside>

//             {/* Grid display column — 10/12 columns */}
//             <div className="lg:col-span-10 space-y-4">
//               <div className="flex flex-row items-center justify-between gap-4 pb-2">
//                 {/* Results count */}
//                 <span className="hidden sm:inline text-[15px] text-white font-semibold font-inter">
//                   {pagination.total > 0
//                     ? `Showing ${((page - 1) * pagination.limit) + 1}–${Math.min(page * pagination.limit, pagination.total)} of ${pagination.total} products`
//                     : `${products.length} products`}
//                 </span>

//                 {/* Mobile filter button */}
//                 <button
//                   onClick={() => setIsMobileFiltersOpen(true)}
//                   className="sm:hidden flex items-center gap-1.5 bg-[#D9FF00] text-black px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer shadow-md transition-all active:scale-95 hover:opacity-90"
//                 >
//                   <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h18m-15 5h12m-9 5h6" />
//                   </svg>
//                   Filter by
//                 </button>

//                 {/* Sort + Per-page dropdowns */}
//                 <div className="flex items-center gap-3 flex-wrap">
//                   {/* Items per page */}
//                   <div className="relative flex items-center">
//                     <select
//                       value={limit}
//                       onChange={(e) => setLimit(Number(e.target.value))}
//                       className="bg-black border border-white/20 text-[13px] text-gray-300 pl-3 pr-8 py-2 rounded-xl focus:outline-none cursor-pointer appearance-none font-medium font-inter"
//                     >
//                       {[20, 40, 60, 80, 100].map(n => (
//                         <option key={n} value={n} className="bg-[#1e1e1e] text-white">{n} per page</option>
//                       ))}
//                     </select>
//                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
//                       <ChevronDown size={13} className="stroke-[2.5]" />
//                     </div>
//                   </div>

//                   {/* Sort */}
//                   <span className="text-[15px] text-white font-medium font-inter">Sort by</span>
//                   <div className="relative flex items-center">
//                     <select
//                       value={sort}
//                       onChange={(e) => setSort(e.target.value)}
//                       className="bg-black border border-[#D9FF00] text-[14px] text-white pl-4 pr-10 py-2 rounded-xl focus:outline-none cursor-pointer appearance-none font-medium font-inter"
//                     >
//                       <option value="recommended" className="bg-[#1e1e1e] text-white">Recommendation</option>
//                       <option value="price-low" className="bg-[#1e1e1e] text-white">Price: Low to High</option>
//                       <option value="price-high" className="bg-[#1e1e1e] text-white">Price: High to Low</option>
//                       <option value="name-asc" className="bg-[#1e1e1e] text-white">Name: A to Z</option>
//                     </select>
//                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#D9FF00]">
//                       <ChevronDown size={14} className="stroke-[3]" />
//                     </div>
//                   </div>
//                 </div>


//               </div>

//               {loading ? (
//                 <div className="py-20 flex flex-col items-center justify-center space-y-3">
//                   <div className="w-6 h-6 border-2 border-t-transparent border-[#D9FF00] rounded-full animate-spin" />
//                   <span className="text-xs text-gray-500">Loading catalog...</span>
//                 </div>
//               ) : products.length === 0 ? (
//                 <div className="py-20 border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-center px-4">
//                   <h4 className="text-sm font-medium text-gray-400">No Products Found</h4>
//                   <button
//                     onClick={resetFilters}
//                     className="mt-4 px-4 py-2 bg-[#D9FF00] text-black text-xs font-semibold rounded-lg"
//                   >
//                     Clear All Filters
//                   </button>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 pt-2">
//                   {products.map((prod) => (
//                     <ProductCard
//                       key={prod.id}
//                       product={prod}
//                       onOpenDetails={handleOpenModal}
//                     />
//                   ))}
//                 </div>
//               )}

//               {/* Pagination Bar */}
//               {!loading && pagination.totalPages > 1 && (
//                 <div className="flex items-center justify-end gap-3 pt-8">
//                   <button
//                     onClick={() => setPage(p => Math.max(1, p - 1))}
//                     disabled={page === 1}
//                     className="px-4 py-2 text-xs font-bold rounded-lg border border-white/10 bg-black/30 text-white hover:bg-[#D9FF00] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all"
//                   >
//                     ← Prev
//                   </button>

//                   <div className="flex items-center gap-1.5">
//                     {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
//                       .filter(p => p === 1 || p === pagination.totalPages || Math.abs(p - page) <= 2)
//                       .reduce((acc, p, idx, arr) => {
//                         if (idx > 0 && p - arr[idx - 1] > 1) acc.push('...');
//                         acc.push(p);
//                         return acc;
//                       }, [])
//                       .map((item, idx) =>
//                         item === '...' ? (
//                           <span key={`ellipsis-${idx}`} className="text-gray-500 text-xs px-1">…</span>
//                         ) : (
//                           <button
//                             key={item}
//                             onClick={() => setPage(item)}
//                             className={`w-8 h-8 text-xs font-bold rounded-lg transition-all ${item === page
//                               ? 'bg-[#D9FF00] text-black'
//                               : 'bg-black/30 border border-white/10 text-white hover:bg-white/10'
//                               }`}
//                           >
//                             {item}
//                           </button>
//                         )
//                       )
//                     }
//                   </div>

//                   <button
//                     onClick={() => setPage(p => Math.min(pagination.totalPages, p + 1))}
//                     disabled={page === pagination.totalPages}
//                     className="px-4 py-2 text-xs font-bold rounded-lg border border-white/10 bg-black/30 text-white hover:bg-[#D9FF00] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all"
//                   >
//                     Next →
//                   </button>
//                 </div>
//               )}
//             </div>

//           </section>

//         </main>
//       </div>



//       {/* Mobile Filters Drawer */}
//       {isMobileFiltersOpen && (
//         <div className="fixed inset-0 z-50 flex lg:hidden">
//           {/* Backdrop */}
//           <div
//             onClick={() => setIsMobileFiltersOpen(false)}
//             className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300"
//           />

//           {/* Drawer content — height fits viewport, no scroll, dropdowns handle scrolling internally */}
//           <div className="relative w-[85%] max-w-[360px] bg-[#1c1d1a] h-full p-6 shadow-2xl flex flex-col z-10">
//             <button
//               onClick={() => setIsMobileFiltersOpen(false)}
//               className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all cursor-pointer flex items-center justify-center"
//             >
//               <X size={20} />
//             </button>
//             <div className="mt-8 flex-1">
//               <Filters
//                 selectedFilters={selectedFilters}
//                 toggleFilter={toggleFilter}
//                 priceRange={priceRange}
//                 setPriceRange={setPriceRange}
//                 availableFilters={availableFilters}
//                 filtersLoading={filtersLoading}
//                 resetFilters={() => {
//                   resetFilters();
//                   setIsMobileFiltersOpen(false);
//                 }}
//                 applyFilters={() => {
//                   applyFilters();
//                   setIsMobileFiltersOpen(false);
//                 }}
//                 hasPendingChanges={hasPendingChanges}
//                 categorySubcategoryMap={categorySubcategoryMap}
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       <Footer bgGradient="#D0FF00" isDark={true} />
//     </div>
//   );
// };

// export default ProductsPage;

import React, { useMemo, useState, useEffect, useRef } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductNavbar from '../components/ProductNavbar';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';


// Assets
import heroDisplayImg from '../assets/02 1.png';
import productBgImg from '../assets/productbg.png';
import herosectionbg from '../assets/Rectangle 12348.png';
import checkMarkIcon from '../assets/check-mark 1.png';
import buttonBgImg from '../assets/Rectangle 12352.png';
import productherobg from '../assets/productherobg.png';

const ProductsPage = () => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const {
    products, loading, search, setSearch, sort, setSort, priceRange, setPriceRange,
    selectedFilters, toggleFilter, resetFilters, applyFilters, hasPendingChanges,
    availableFilters, filtersLoading,
    categorySubcategoryMap, page, setPage, limit, setLimit, pagination
  } = useProducts();

  // Custom dropdown open/close state
  const [isPerPageOpen, setIsPerPageOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const perPageRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (perPageRef.current && !perPageRef.current.contains(e.target)) setIsPerPageOpen(false);
      if (sortRef.current && !sortRef.current.contains(e.target)) setIsSortOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortLabels = {
    recommended: 'Recommendation',
    'price-low': 'Price: Low to High',
    'price-high': 'Price: High to Low',
    'name-asc': 'Name: A to Z',
  };

  // Handle navigation to dedicated details page
  const handleOpenModal = (product) => {
    navigate(`/products/${product.slug || product.id}`);
  };

  const heroSpecs = [
    "Ultra HD (3840x2160) Resolution",
    "24/7 Commercial Use",
    "Remote Content Management",
    "WiFi & LAN Mounting Options",
    "Multiple Mounting Options",
    "High Brightness & Visibility"
  ];

  // Fallback for featured items
  const featuredCollections = useMemo(() => {
    return products.slice(0, 5);
  }, [products]);

  const handleHeroQuote = () => {
    const heroProduct = products.find(p => p.id === 2) || products[0];
    if (heroProduct) handleOpenModal(heroProduct);
  };

  // We still need navigate for filters / back navigation
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white overflow-x-hidden font-poppins selection:bg-[#D9FF00]/30 selection:text-white bg-[#4B4B4B]">

      {/* Top Section: Galaxy Background (Navbar + Hero + Search) */}
      <style>{`
        .products-hero-bg {
          background-image: url(${productBgImg});
        }
        @media (max-w: 1023px) {
          .products-hero-bg {
            background-image: url(${productherobg});
          }
        }
      `}</style>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative border-b border-white/5 flex flex-col justify-between products-hero-bg"
        style={{ backgroundColor: '#030508' }}
      >
        <ProductNavbar />

        <main className="flex-grow w-full mx-auto px-4 md:px-22 pt-2 pb-10 flex flex-col justify-between">

          {/* Hero Section */}
          <section className="w-full flex-grow flex items-center py-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

              <div className="mt-20 lg:col-span-4 space-y-8 text-center lg:text-left">
                {/* Breadcrumb */}
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs sm:text-sm font-light text-gray-400 tracking-wide">
                  <span className="cursor-pointer hover:text-white transition-colors">Products</span>
                  <span className="text-gray-600">/</span>
                  <span className="text-gray-200">4K Digital Signage Display</span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-[56px] font-[100] font-medium tracking-tight leading-[1.15] text-white text-center lg:text-left">
                    4K Digital <br />
                    Signage Display
                  </h1>

                  {/* Mobile Hero Spacer (shows background image monitor without overlap) */}
                  <div className="lg:hidden h-[280px] sm:h-[340px] w-full"></div>

                  <div className="flex flex-wrap gap-2 pt-2 max-w-sm justify-center lg:justify-start mx-auto lg:mx-0">
                    {["Ultra HD Display", "24/7 Operation", "Remote", "Remote Content Management"].map((tag, idx) => (
                      <span key={idx} className="px-3.5 py-2 bg-[#12161a]/60 border border-white/10 rounded-lg text-xs font-light text-gray-300 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-center lg:justify-start">
                  <button
                    onClick={handleHeroQuote}
                    className="w-[193px] h-[58px] flex items-center justify-center text-white font-light text-sm tracking-wider rounded-full transition-all duration-300 active:scale-95 hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(#030508, #030508) padding-box, linear-gradient(to right, #22458E, #2F7F5A) border-box',
                      border: '2.5px solid transparent',
                      boxShadow: '0 0 20px rgba(34, 69, 142, 0.35), 0 0 20px rgba(47, 127, 90, 0.35)'
                    }}
                  >
                    Get a Quote
                  </button>
                </div>
              </div>


              {/* Desktop Hero Image (visible only on desktop) */}
              <div className="hidden lg:flex lg:col-span-5 justify-center items-center min-h-[300px]">
                {/* <div className="w-full max-w-lg drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] hover:scale-[1.01] transition-transform duration-700">
                  <img src={heroDisplayImg} alt="Display" className="w-full h-auto object-contain" />
                </div> */}
              </div>


              <div
                className="lg:col-span-3 w-full max-w-[389px] h-auto lg:h-[496px] p-6 lg:p-7 flex flex-col justify-between bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden shadow-2xl shrink-0 mx-auto lg:mx-0 gap-8 lg:gap-0"
                style={{ backgroundImage: `url(${herosectionbg})` }}
              >
                <div className="space-y-5">
                  <h3 className="text-lg font-medium text-white tracking-wide">Key Specifications</h3>
                  <ul className="space-y-3.5">
                    {heroSpecs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs md:text-[13px] text-gray-300 font-light leading-relaxed">
                        <img
                          src={checkMarkIcon}
                          alt="Check"
                          className="w-4 h-4 shrink-0 object-contain"
                        />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-2.5 pt-2 w-full">
                  <button
                    onClick={handleHeroQuote}
                    className="w-[135px] h-[49px] flex items-center justify-center bg-gradient-to-b from-[#20273D] to-[#171E2E] border border-white/10 hover:border-[#00E5FF]/40 hover:text-white rounded-md text-xs font-light text-gray-300 transition-all tracking-wide"
                  >
                    Datasheet
                  </button>
                  <button
                    onClick={handleHeroQuote}
                    className="w-[159px] h-[53px] flex items-center justify-center bg-gradient-to-b from-[#20273D] to-[#171E2E] border border-white/10 hover:border-[#00E5FF]/40 hover:text-white rounded-md text-xs font-light text-gray-300 transition-all tracking-wide"
                  >
                    Request info
                  </button>
                  <button
                    onClick={resetFilters}
                    className="w-[201px] h-[53px] flex items-center justify-center bg-gradient-to-b from-[#20273D] to-[#171E2E] border border-white/10 hover:border-[#00E5FF]/40 hover:text-white rounded-md text-xs font-light text-gray-300 transition-all tracking-wide"
                  >
                    View All Products
                  </button>
                </div>
              </div>



            </div>
          </section>

          {/* Search Bar */}
          <div className="w-full">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </main>
      </div>

      {/* Bottom Section: Solid Dark Background (Collections + Catalog) */}
      <div className="w-full bg-[#2b2b2b] py-14">
        <main className="w-full mx-auto px-4 md:px-22 space-y-14">

          {/* Featured Collections */}
          {featuredCollections.length > 0 && (
            <section className="space-y-5">
              <div className="flex justify-between items-center border-b border-white/10 pb-4 gap-4">
                <div className="text-left flex-grow">
                  <span className="block text-[11px] text-[#D9FF00]/70 uppercase tracking-[0.18em] font-bold">
                    Top Sellers
                  </span>
                  <span className="block mt-1 text-2xl sm:text-3xl font-light text-white leading-tight">
                    Best Collections
                  </span>
                </div>
                <button
                  onClick={resetFilters}
                  className="px-4 py-1.5 text-xs border border-[#D9FF00]/50 rounded-full hover:bg-[#D9FF00]/10 transition-colors text-[#D9FF00] font-medium tracking-wide whitespace-nowrap shrink-0"
                >
                  View All
                </button>
              </div>
              {/* 5-col horizontal scroll on mobile, grid on desktop */}
              <div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-5 gap-4 pb-2 lg:pb-0 snap-x snap-mandatory w-full no-scrollbar pt-2">
                {featuredCollections.map((prod) => (
                  <div key={prod.id} className="w-[220px] sm:w-[260px] lg:w-full shrink-0 snap-start">
                    <ProductCard
                      product={prod}
                      isCollection={true}
                      onOpenDetails={handleOpenModal}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Catalog Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">

            {/* Sidebar filter column — sticky, height expands with dropdowns */}
            <aside className="hidden lg:block lg:col-span-2 bg-[#1c1d1a] rounded-[20px] p-5 sticky top-24">
              <Filters
                selectedFilters={selectedFilters}
                toggleFilter={toggleFilter}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                availableFilters={availableFilters}
                filtersLoading={filtersLoading}
                resetFilters={resetFilters}
                applyFilters={applyFilters}
                hasPendingChanges={hasPendingChanges}
                categorySubcategoryMap={categorySubcategoryMap}
              />
            </aside>

            {/* Grid display column — 10/12 columns */}
            <div className="lg:col-span-10 space-y-4">
              <div className="flex flex-row items-center justify-between gap-4 pb-2">
                {/* Results count */}
                <span className="hidden sm:inline text-[15px] text-white font-semibold font-inter">
                  {pagination.total > 0
                    ? `Showing ${((page - 1) * pagination.limit) + 1}–${Math.min(page * pagination.limit, pagination.total)} of ${pagination.total} products`
                    : `${products.length} products`}
                </span>

                {/* Mobile filter button */}
                <button
                  onClick={() => setIsMobileFiltersOpen(true)}
                  className="sm:hidden flex items-center gap-1.5 bg-[#D9FF00] text-black px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer shadow-md transition-all active:scale-95 hover:opacity-90"
                >
                  <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h18m-15 5h12m-9 5h6" />
                  </svg>
                  Filter by
                </button>

                {/* Sort + Per-page dropdowns */}
                <div className="flex items-center gap-3 flex-wrap">
                  {/* Items per page — custom dropdown */}
                  <div className="relative" ref={perPageRef}>
                    <button
                      type="button"
                      onClick={() => { setIsPerPageOpen(o => !o); setIsSortOpen(false); }}
                      className="flex items-center gap-2 bg-black border border-white/15 hover:border-white/30 text-[13px] text-gray-300 pl-3.5 pr-2.5 py-2 rounded-xl focus:outline-none cursor-pointer font-medium font-inter transition-colors"
                    >
                      {limit} per page
                      <ChevronDown
                        size={13}
                        className={`stroke-[2.5] text-gray-400 transition-transform duration-200 ${isPerPageOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isPerPageOpen && (
                      <div className="absolute top-full mt-2 left-0 w-36 bg-[#1c1d1a] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-20 py-1 animate-in fade-in slide-in-from-top-1 duration-150">
                        {[20, 40, 60, 80, 100].map(n => (
                          <button
                            key={n}
                            type="button"
                            onClick={() => { setLimit(n); setIsPerPageOpen(false); }}
                            className={`w-full text-left px-4 py-2 text-[13px] font-medium font-inter transition-colors whitespace-nowrap ${n === limit
                              ? 'bg-[#D9FF00]/10 text-[#D9FF00]'
                              : 'text-gray-300 hover:bg-white/5 hover:text-white'
                              }`}
                          >
                            {n} per page
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Sort — custom dropdown */}
                  <span className="text-[15px] text-white font-medium font-inter">Sort by</span>
                  <div className="relative" ref={sortRef}>
                    <button
                      type="button"
                      onClick={() => { setIsSortOpen(o => !o); setIsPerPageOpen(false); }}
                      className={`flex items-center gap-2.5 bg-black border text-[14px] text-white pl-4 pr-3 py-2 rounded-xl focus:outline-none cursor-pointer font-medium font-inter transition-colors ${isSortOpen ? 'border-[#D9FF00]' : 'border-[#D9FF00]/60 hover:border-[#D9FF00]'
                        }`}
                    >
                      {sortLabels[sort]}
                      <ChevronDown
                        size={14}
                        className={`stroke-[3] text-[#D9FF00] transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isSortOpen && (
                      <div className="absolute top-full mt-2 right-0 w-48 bg-[#1c1d1a] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-20 py-1 animate-in fade-in slide-in-from-top-1 duration-150">
                        {Object.entries(sortLabels).map(([value, label]) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => { setSort(value); setIsSortOpen(false); }}
                            className={`w-full text-left px-4 py-2 text-[14px] font-medium font-inter transition-colors whitespace-nowrap ${value === sort
                              ? 'bg-[#D9FF00]/10 text-[#D9FF00]'
                              : 'text-gray-300 hover:bg-white/5 hover:text-white'
                              }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {loading ? (
                <div className="py-20 flex flex-col items-center justify-center space-y-3">
                  <div className="w-6 h-6 border-2 border-t-transparent border-[#D9FF00] rounded-full animate-spin" />
                  <span className="text-xs text-gray-500">Loading catalog...</span>
                </div>
              ) : products.length === 0 ? (
                <div className="py-20 border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-center px-4">
                  <h4 className="text-sm font-medium text-gray-400">No Products Found</h4>
                  <button
                    onClick={resetFilters}
                    className="mt-4 px-4 py-2 bg-[#D9FF00] text-black text-xs font-semibold rounded-lg"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 pt-2">
                  {products.map((prod) => (
                    <ProductCard
                      key={prod.id}
                      product={prod}
                      onOpenDetails={handleOpenModal}
                    />
                  ))}
                </div>
              )}

              {/* Pagination Bar */}
              {!loading && pagination.totalPages > 1 && (
                <div className="flex items-center justify-end gap-3 pt-8">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 text-xs font-bold rounded-lg border border-white/10 bg-black/30 text-white hover:bg-[#D9FF00] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    ← Prev
                  </button>

                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                      .filter(p => p === 1 || p === pagination.totalPages || Math.abs(p - page) <= 2)
                      .reduce((acc, p, idx, arr) => {
                        if (idx > 0 && p - arr[idx - 1] > 1) acc.push('...');
                        acc.push(p);
                        return acc;
                      }, [])
                      .map((item, idx) =>
                        item === '...' ? (
                          <span key={`ellipsis-${idx}`} className="text-gray-500 text-xs px-1">…</span>
                        ) : (
                          <button
                            key={item}
                            onClick={() => setPage(item)}
                            className={`w-8 h-8 text-xs font-bold rounded-lg transition-all ${item === page
                              ? 'bg-[#D9FF00] text-black'
                              : 'bg-black/30 border border-white/10 text-white hover:bg-white/10'
                              }`}
                          >
                            {item}
                          </button>
                        )
                      )
                    }
                  </div>

                  <button
                    onClick={() => setPage(p => Math.min(pagination.totalPages, p + 1))}
                    disabled={page === pagination.totalPages}
                    className="px-4 py-2 text-xs font-bold rounded-lg border border-white/10 bg-black/30 text-white hover:bg-[#D9FF00] hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>

          </section>

        </main>
      </div>



      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileFiltersOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300"
          />

          {/* Drawer content — height fits viewport, no scroll, dropdowns handle scrolling internally */}
          <div className="relative w-[85%] max-w-[360px] bg-[#1c1d1a] h-full p-6 shadow-2xl flex flex-col z-10">
            <button
              onClick={() => setIsMobileFiltersOpen(false)}
              className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all cursor-pointer flex items-center justify-center"
            >
              <X size={20} />
            </button>
            <div className="mt-8 flex-1">
              <Filters
                selectedFilters={selectedFilters}
                toggleFilter={toggleFilter}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                availableFilters={availableFilters}
                filtersLoading={filtersLoading}
                resetFilters={() => {
                  resetFilters();
                  setIsMobileFiltersOpen(false);
                }}
                applyFilters={() => {
                  applyFilters();
                  setIsMobileFiltersOpen(false);
                }}
                hasPendingChanges={hasPendingChanges}
                categorySubcategoryMap={categorySubcategoryMap}
              />
            </div>
          </div>
        </div>
      )}

      <Footer bgGradient="#D0FF00" isDark={true} />
    </div>
  );
};

export default ProductsPage;