// import React, { useState, useMemo } from 'react';
// import { X, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';

// // ─── Accordion Section ────────────────────────────────────────────────────────
// const FilterSection = ({ title, count, children, defaultOpen = false }) => {
//   const [isOpen, setIsOpen] = useState(defaultOpen);
//   const isActive = isOpen;

//   return (
//     <div className="rounded-xl overflow-hidden mb-1.5">
//       {/* Header */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-200 cursor-pointer
//           ${isActive
//             ? 'bg-[#D9FF00] text-black'
//             : 'bg-[#2a2b27] text-white hover:bg-[#323330]'
//           }`}
//       >
//         <span className="flex items-center gap-2">
//           <span className="text-[11px] font-black uppercase tracking-[0.12em]">{title}</span>
//           {count > 0 && (
//             <span className={`text-[10px] font-mono font-bold ml-1 transition-colors
//               ${isActive ? 'text-black/60' : 'text-[#D9FF00]/85'}`}>
//               ({count})
//             </span>
//           )}
//         </span>
//         <span className={isActive ? 'text-black' : 'text-gray-400'}>
//           {isOpen ? <ChevronUp size={14} strokeWidth={2.5} /> : <ChevronDown size={14} strokeWidth={2.5} />}
//         </span>
//       </button>

//       {/* Content — scrollable list container with GPU-accelerated scroll and Lenis smooth scroll bypass */}
//       {isOpen && (
//         <div 
//           data-lenis-prevent
//           style={{ transform: 'translate3d(0, 0, 0)', WebkitOverflowScrolling: 'touch' }}
//           className="bg-[#222320] px-4 py-3 space-y-0.5 max-h-60 overflow-y-auto filter-scroll border border-white/5 rounded-b-xl -mt-0.5"
//         >
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

// // ─── Checkbox Row ─────────────────────────────────────────────────────────────
// const FilterCheckbox = ({ label, checked, onChange }) => {
//   const handleClick = (e) => {
//     e.preventDefault();
//     onChange();
//   };

//   return (
//     <div
//       onClick={handleClick}
//       role="checkbox"
//       aria-checked={checked}
//       tabIndex={0}
//       onKeyDown={(e) => {
//         if (e.key === ' ' || e.key === 'Enter') {
//           e.preventDefault();
//           onChange();
//         }
//       }}
//       className="flex items-center gap-3 cursor-pointer select-none py-1.5 group rounded-lg px-1 hover:bg-white/5 transition-colors focus:outline-none focus:bg-white/5"
//     >
//       <span className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all duration-150
//         ${checked
//           ? 'bg-[#D9FF00] border-[#D9FF00]'
//           : 'bg-transparent border-white/20 group-hover:border-white/40'}`}
//       >
//         {checked && (
//           <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
//             <path d="M1 3.5L3.5 6L8 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         )}
//       </span>
//       <span className={`text-[12px] font-medium transition-colors
//         ${checked ? 'text-[#D9FF00]' : 'text-gray-300 group-hover:text-white'}`}>
//         {label}
//       </span>
//     </div>
//   );
// };

// // ─── Label map ────────────────────────────────────────────────────────────────
// const LABELS = {
//   category: 'Categories',
//   use: 'Use Cases',
//   screenType: 'Screen Types',
//   size: 'Screen Sizes',
//   brightness: 'Brightness',
//   pixelPitch: 'Pixel Pitches',
//   indoorOutdoor: 'Indoor / Outdoor',
//   mount: 'Mounts',
//   operatingSystem: 'Operating Systems',
// };

// const ORDER = ['productFamily', 'use', 'screenType', 'size', 'brightness', 'pixelPitch', 'indoorOutdoor', 'mount', 'operatingSystem'];

// // ─── Filters Component ────────────────────────────────────────────────────────
// const Filters = ({
//   selectedFilters,
//   toggleFilter,
//   priceRange,
//   setPriceRange,
//   availableFilters = {},
//   filtersLoading,
//   resetFilters,
//   applyFilters,
//   hasPendingChanges,
//   categorySubcategoryMap = {},
// }) => {
//   const hasActiveFilters =
//     Object.values(selectedFilters).some(arr => arr?.length > 0) ||
//     priceRange.min !== '' ||
//     priceRange.max !== '';

//   const totalActiveCount = Object.values(selectedFilters).reduce((sum, arr) => sum + (arr?.length || 0), 0);

//   // ── Subcategory visibility ──────────────────────────────────────────────────
//   const visibleUseCases = useMemo(() => {
//     const allUse = availableFilters.use || [];
//     const selectedCats = selectedFilters.category || [];
//     if (selectedCats.length === 0 || Object.keys(categorySubcategoryMap).length === 0) return allUse;
//     const relevantSubs = new Set(selectedCats.flatMap(cat => categorySubcategoryMap[cat] || []));
//     return allUse.filter(u => relevantSubs.has(u));
//   }, [availableFilters.use, selectedFilters.category, categorySubcategoryMap]);

//   // ── Build filter section list ───────────────────────────────────────────────
//   const sections = useMemo(() => {
//     const result = [];
//     for (const backendKey of ORDER) {
//       let values, frontendKey;
//       if (backendKey === 'productFamily') {
//         values = availableFilters.productFamily || [];
//         frontendKey = 'category';
//       } else if (backendKey === 'use') {
//         values = visibleUseCases;
//         frontendKey = 'use';
//       } else {
//         values = availableFilters[backendKey] || [];
//         frontendKey = backendKey;
//       }
//       if (values.length === 0) continue;
//       result.push({ backendKey, frontendKey, values, label: LABELS[frontendKey] || frontendKey });
//     }
//     return result;
//   }, [availableFilters, visibleUseCases]);

//   return (
//     <div className="font-poppins">

//       {/* ── Header ── */}
//       <div className="flex items-center justify-between mb-4 px-1">
//         <div className="flex items-center gap-2">
//           <span className="text-white font-black text-[15px] tracking-wide">Filter by</span>
//           {totalActiveCount > 0 && (
//             <span className="text-[#D9FF00]/90 text-[13px] font-mono font-bold tracking-wider ml-1">
//               ({totalActiveCount})
//             </span>
//           )}
//         </div>
//         {hasActiveFilters && (
//           <button
//             onClick={resetFilters}
//             className="flex items-center gap-1 text-[10px] font-bold text-gray-400 hover:text-red-400 transition-colors uppercase tracking-wider cursor-pointer"
//           >
//             <X size={10} />
//             Reset
//           </button>
//         )}
//       </div>

//       {filtersLoading ? (
//         <div className="py-6">
//           <div className="space-y-2 w-full animate-pulse px-1">
//             {[1, 2, 3, 4].map(i => (
//               <div key={i} className="h-10 bg-white/5 rounded-xl" />
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="space-y-0">

//           {/* ── Price Range ── */}
//           <div className="mb-2">
//             <div className="bg-[#2a2b27] rounded-xl px-4 py-3 mb-1.5">
//               <span className="text-[11px] font-black uppercase tracking-[0.12em] text-white">Price Range (£)</span>
//             </div>
//             <div className="bg-[#222320] border border-white/5 rounded-xl px-4 py-3 -mt-1 rounded-t-none">
//               <div className="flex items-center gap-2">
//                 <div className="relative flex-1">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-bold">£</span>
//                   <input
//                     type="text"
//                     inputMode="numeric"
//                     pattern="[0-9]*"
//                     placeholder="Min"
//                     value={priceRange.min}
//                     onChange={e => setPriceRange(prev => ({ ...prev, min: e.target.value.replace(/[^0-9]/g, '') }))}
//                     className="w-full bg-[#1a1b18] border border-white/10 focus:border-[#D9FF00]/40 rounded-lg pl-7 pr-2 py-2 text-[12px] text-white focus:outline-none transition-all placeholder:text-gray-600"
//                   />
//                 </div>
//                 <span className="text-gray-600 text-xs font-bold">—</span>
//                 <div className="relative flex-1">
//                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-bold">£</span>
//                   <input
//                     type="text"
//                     inputMode="numeric"
//                     pattern="[0-9]*"
//                     placeholder="Max"
//                     value={priceRange.max}
//                     onChange={e => setPriceRange(prev => ({ ...prev, max: e.target.value.replace(/[^0-9]/g, '') }))}
//                     className="w-full bg-[#1a1b18] border border-white/10 focus:border-[#D9FF00]/40 rounded-lg pl-7 pr-2 py-2 text-[12px] text-white focus:outline-none transition-all placeholder:text-gray-600"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── Dynamic Sections ── */}
//           {sections.map(({ backendKey, frontendKey, values, label }) => {
//             const active = selectedFilters[frontendKey] || [];
//             return (
//               <FilterSection
//                 key={backendKey}
//                 title={label}
//                 count={active.length}
//                 defaultOpen={frontendKey === 'category' || frontendKey === 'screenType'}
//               >
//                 {values.length === 0 ? (
//                   <p className="text-[11px] text-gray-500 py-2 italic">No options available</p>
//                 ) : (
//                   values.map(val => (
//                     <FilterCheckbox
//                       key={val}
//                       label={val}
//                       checked={active.includes(val)}
//                       onChange={() => toggleFilter(frontendKey, val)}
//                     />
//                   ))
//                 )}
//               </FilterSection>
//             );
//           })}

//           {sections.length === 0 && (
//             <p className="text-xs text-gray-500 text-center py-8 italic">No filters available</p>
//           )}
//         </div>
//       )}

//       {/* ── Apply / Status Button ── */}
//       <div className="pt-3 mt-2 border-t border-white/5">
//         <button
//           onClick={hasPendingChanges ? applyFilters : undefined}
//           className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-[11px] uppercase tracking-[0.12em] transition-all duration-200 active:scale-[0.98]
//             ${hasPendingChanges
//               ? 'bg-[#D9FF00] text-black hover:bg-[#c9ef00] shadow-lg shadow-[#D9FF00]/15 cursor-pointer'
//               : 'bg-[#2a2b27] text-gray-400 border border-white/5 cursor-default'
//             }`}
//         >
//           <SlidersHorizontal size={13} strokeWidth={2.5} />
//           {hasPendingChanges ? 'Apply Filters' : 'Filters Applied'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Filters;



import React, { useState, useMemo } from 'react';
import { X, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';

// ─── Accordion Section ────────────────────────────────────────────────────────
const FilterSection = ({ title, count, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const isActive = isOpen;

  return (
    <div className="rounded-xl overflow-hidden mb-1.5">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 transition-all duration-200 cursor-pointer
          ${isActive
            ? 'bg-[#D9FF00] text-black'
            : 'bg-[#2a2b27] text-white hover:bg-[#323330]'
          }`}
      >
        <span className="flex items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">{title}</span>
          {count > 0 && (
            <span className={`text-[10px] font-mono font-bold ml-1 transition-colors
              ${isActive ? 'text-black/60' : 'text-[#D9FF00]/85'}`}>
              ({count})
            </span>
          )}
        </span>
        <span className={isActive ? 'text-black' : 'text-gray-400'}>
          {isOpen ? <ChevronUp size={14} strokeWidth={2.5} /> : <ChevronDown size={14} strokeWidth={2.5} />}
        </span>
      </button>

      {/* Content — scrollable list container with GPU-accelerated scroll and Lenis smooth scroll bypass */}
      {isOpen && (
        <div
          data-lenis-prevent
          style={{ transform: 'translate3d(0, 0, 0)', WebkitOverflowScrolling: 'touch' }}
          className="bg-[#222320] px-4 py-3 space-y-0.5 max-h-60 overflow-y-auto filter-scroll border border-white/5 rounded-b-xl -mt-0.5"
        >
          {children}
        </div>
      )}
    </div>
  );
};

// ─── Checkbox Row ─────────────────────────────────────────────────────────────
const FilterCheckbox = ({ label, checked, onChange }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onChange();
  };

  return (
    <div
      onClick={handleClick}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onChange();
        }
      }}
      className="flex items-center gap-3 cursor-pointer select-none py-1.5 group rounded-lg px-1 hover:bg-white/5 transition-colors focus:outline-none focus:bg-white/5"
    >
      <span className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all duration-150
        ${checked
          ? 'bg-[#D9FF00] border-[#D9FF00]'
          : 'bg-transparent border-white/20 group-hover:border-white/40'}`}
      >
        {checked && (
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path d="M1 3.5L3.5 6L8 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className={`text-[12px] font-medium transition-colors
        ${checked ? 'text-[#D9FF00]' : 'text-gray-300 group-hover:text-white'}`}>
        {label}
      </span>
    </div>
  );
};

// ─── Label map ────────────────────────────────────────────────────────────────
const LABELS = {
  category: 'Categories',
  use: 'Use Cases',
  screenType: 'Screen Types',
  size: 'Screen Sizes',
  brightness: 'Brightness',
  pixelPitch: 'Pixel Pitches',
  indoorOutdoor: 'Indoor / Outdoor',
  mount: 'Mounts',
  operatingSystem: 'Operating Systems',
};

const ORDER = ['productFamily', 'use', 'screenType', 'size', 'brightness', 'pixelPitch', 'indoorOutdoor', 'mount', 'operatingSystem'];

// ─── Filters Component ────────────────────────────────────────────────────────
const Filters = ({
  selectedFilters,
  toggleFilter,
  priceRange,
  setPriceRange,
  availableFilters = {},
  filtersLoading,
  resetFilters,
  applyFilters,
  hasPendingChanges,
  categorySubcategoryMap = {},
}) => {
  const hasActiveFilters =
    Object.values(selectedFilters).some(arr => arr?.length > 0) ||
    priceRange.min !== '' ||
    priceRange.max !== '';

  const totalActiveCount = Object.values(selectedFilters).reduce((sum, arr) => sum + (arr?.length || 0), 0);

  // ── Subcategory visibility ──────────────────────────────────────────────────
  const visibleUseCases = useMemo(() => {
    const allUse = availableFilters.use || [];
    const selectedCats = selectedFilters.category || [];
    if (selectedCats.length === 0 || Object.keys(categorySubcategoryMap).length === 0) return allUse;
    const relevantSubs = new Set(selectedCats.flatMap(cat => categorySubcategoryMap[cat] || []));
    return allUse.filter(u => relevantSubs.has(u));
  }, [availableFilters.use, selectedFilters.category, categorySubcategoryMap]);

  // ── Build filter section list ───────────────────────────────────────────────
  const sections = useMemo(() => {
    const result = [];
    for (const backendKey of ORDER) {
      let values, frontendKey;
      if (backendKey === 'productFamily') {
        values = availableFilters.productFamily || [];
        frontendKey = 'category';
      } else if (backendKey === 'use') {
        values = visibleUseCases;
        frontendKey = 'use';
      } else {
        values = availableFilters[backendKey] || [];
        frontendKey = backendKey;
      }
      if (values.length === 0) continue;
      result.push({ backendKey, frontendKey, values, label: LABELS[frontendKey] || frontendKey });
    }
    return result;
  }, [availableFilters, visibleUseCases]);

  return (
    <div className="font-poppins">

      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <span className="text-white font-black text-[15px] tracking-wide">Filter by</span>
          {totalActiveCount > 0 && (
            <span className="text-[#D9FF00]/90 text-[13px] font-mono font-bold tracking-wider ml-1">
              ({totalActiveCount})
            </span>
          )}
        </div>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 text-[10px] font-bold text-gray-400 hover:text-red-400 transition-colors uppercase tracking-wider cursor-pointer"
          >
            <X size={10} />
            Reset
          </button>
        )}
      </div>

      {filtersLoading ? (
        <div className="py-6">
          <div className="space-y-2 w-full animate-pulse px-1">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-10 bg-white/5 rounded-xl" />
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-0">

          {/* ── Price Range ── */}
          <div className="mb-2">
            <div className="bg-[#2a2b27] rounded-xl px-4 py-3 mb-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white">Price Range (£)</span>
            </div>
            <div className="bg-[#222320] border border-white/5 rounded-xl px-4 py-3 -mt-1 rounded-t-none">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-bold">£</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={e => setPriceRange(prev => ({ ...prev, min: e.target.value.replace(/[^0-9]/g, '') }))}
                    className="w-full bg-[#1a1b18] border border-white/10 focus:border-[#D9FF00]/40 rounded-lg pl-7 pr-2 py-2 text-[12px] text-white focus:outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
                <span className="text-gray-600 text-xs font-bold">—</span>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-bold">£</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={e => setPriceRange(prev => ({ ...prev, max: e.target.value.replace(/[^0-9]/g, '') }))}
                    className="w-full bg-[#1a1b18] border border-white/10 focus:border-[#D9FF00]/40 rounded-lg pl-7 pr-2 py-2 text-[12px] text-white focus:outline-none transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Dynamic Sections ── */}
          {sections.map(({ backendKey, frontendKey, values, label }) => {
            const active = selectedFilters[frontendKey] || [];
            return (
              <FilterSection
                key={backendKey}
                title={label}
                count={active.length}
                defaultOpen={false}
              >
                {values.length === 0 ? (
                  <p className="text-[11px] text-gray-500 py-2 italic">No options available</p>
                ) : (
                  values.map(val => (
                    <FilterCheckbox
                      key={val}
                      label={val}
                      checked={active.includes(val)}
                      onChange={() => toggleFilter(frontendKey, val)}
                    />
                  ))
                )}
              </FilterSection>
            );
          })}

          {sections.length === 0 && (
            <p className="text-xs text-gray-500 text-center py-8 italic">No filters available</p>
          )}
        </div>
      )}

      {/* ── Apply / Status Button ── */}
      <div className="pt-3 mt-2 border-t border-white/5">
        <button
          onClick={hasPendingChanges ? applyFilters : undefined}
          className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-[11px] uppercase tracking-[0.12em] transition-all duration-200 active:scale-[0.98]
            ${hasPendingChanges
              ? 'bg-[#D9FF00] text-black hover:bg-[#c9ef00] shadow-lg shadow-[#D9FF00]/15 cursor-pointer'
              : 'bg-[#2a2b27] text-gray-400 border border-white/5 cursor-default'
            }`}
        >
          <SlidersHorizontal size={13} strokeWidth={2.5} />
          {hasPendingChanges ? 'Apply Filters' : 'Filters Applied'}
        </button>
      </div>
    </div>
  );
};

export default Filters;