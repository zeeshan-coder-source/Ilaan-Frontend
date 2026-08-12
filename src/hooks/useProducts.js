import { useState, useEffect, useCallback } from 'react';
import { getProducts, getFilters } from '../services/api';

const EMPTY_FILTERS = {
  category: [],
  use: [],
  size: [],
  brightness: [],
  screenType: [],
  pixelPitch: [],
  indoorOutdoor: [],
  mount: [],
  operatingSystem: [],
};

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Available filters from backend
  const [availableFilters, setAvailableFilters] = useState({});
  const [filtersLoading, setFiltersLoading] = useState(true);

  // Hierarchical mapping: { "Digital Poster": ["Indoor Signage", "Outdoor Signage"], ... }
  const [categorySubcategoryMap, setCategorySubcategoryMap] = useState({});

  // ── Core pagination / sort / search (auto-apply on change) ───────────────────
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  // const [limit, setLimit] = useState(15);
  const [limit, setLimit] = useState(20);
  const [sort, setSort] = useState('recommended');

  // ── DRAFT filter states (updated on checkbox click / price input) ─────────────
  const [selectedFilters, setSelectedFilters] = useState({ ...EMPTY_FILTERS });
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  // ── APPLIED filter states (sent to the API — only updated on "Apply Filters") ─
  const [appliedFilters, setAppliedFilters] = useState({ ...EMPTY_FILTERS });
  const [appliedPriceRange, setAppliedPriceRange] = useState({ min: '', max: '' });

  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    // limit: 15,
    limit: 20,
    totalPages: 1,
  });

  // ─── Fetch available filter values from backend on mount ─────────────────────
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        setFiltersLoading(true);
        const res = await getFilters();
        if (res.success) {
          setAvailableFilters(res.data || {});
          if (res.meta?.categorySubcategoryMap) {
            setCategorySubcategoryMap(res.meta.categorySubcategoryMap);
          }
        }
      } catch (err) {
        console.error('Failed to load backend filters:', err);
      } finally {
        setFiltersLoading(false);
      }
    };
    fetchFilters();
  }, []);

  // ─── Toggle DRAFT filter; prune stale subcategories when categories change ───
  const toggleFilter = useCallback((field, value) => {
    setSelectedFilters(prev => {
      const current = prev[field] || [];
      const isRemoving = current.includes(value);
      const updatedField = isRemoving
        ? current.filter(v => v !== value)
        : [...current, value];

      const next = { ...prev, [field]: updatedField };

      if (field === 'category' && Object.keys(categorySubcategoryMap).length > 0) {
        if (updatedField.length > 0) {
          const validSubs = new Set(
            updatedField.flatMap(cat => categorySubcategoryMap[cat] || [])
          );
          next.use = (prev.use || []).filter(u => validSubs.has(u));
        }
      }

      return next;
    });
    // Do NOT reset page or trigger fetch here — wait for Apply
  }, [categorySubcategoryMap]);

  // ─── Apply draft filters → applied filters, then reset page ─────────────────
  const applyFilters = useCallback(() => {
    setAppliedFilters({ ...selectedFilters });
    setAppliedPriceRange({ ...priceRange });
    setPage(1);
  }, [selectedFilters, priceRange]);

  // ─── Reset ALL states instantly and refetch ──────────────────────────────────
  const resetFilters = useCallback(() => {
    const empty = { ...EMPTY_FILTERS };
    const emptyPrice = { min: '', max: '' };
    setSearch('');
    setSort('recommended');
    setSelectedFilters(empty);
    setPriceRange(emptyPrice);
    setAppliedFilters(empty);
    setAppliedPriceRange(emptyPrice);
    setPage(1);
  }, []);

  // ─── Computed: does draft differ from applied? ────────────────────────────────
  const hasPendingChanges = (() => {
    const filtersChanged = Object.keys(selectedFilters).some(k => {
      const a = selectedFilters[k] || [];
      const b = appliedFilters[k] || [];
      return a.length !== b.length || a.some((v, i) => v !== b[i]);
    });
    const priceChanged =
      priceRange.min !== appliedPriceRange.min ||
      priceRange.max !== appliedPriceRange.max;
    return filtersChanged || priceChanged;
  })();

  // ─── Fetch products (triggered by applied states + search/sort/page/limit) ───
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);

      const params = { page, limit, sort, search };

      Object.keys(appliedFilters).forEach(key => {
        const vals = appliedFilters[key];
        if (vals && vals.length > 0) {
          params[key] = vals.join(',');
        }
      });

      if (appliedPriceRange.min) params.minPrice = appliedPriceRange.min;
      if (appliedPriceRange.max) params.maxPrice = appliedPriceRange.max;

      const result = await getProducts(params);

      setProducts(result.products || []);
      setPagination(result.pagination || { total: 0, page: 1, limit, totalPages: 1 });
    } catch (err) {
      console.error('Failed to fetch products:', err);
      setError(err.message || 'Failed to load products.');
    } finally {
      setLoading(false);
    }
  }, [page, limit, sort, search, appliedFilters, appliedPriceRange]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // When limit changes, reset to page 1
  const setLimitAndReset = useCallback((newLimit) => {
    setLimit(newLimit);
    setPage(1);
  }, []);

  return {
    products,
    loading,
    error,
    search,
    setSearch,
    sort,
    setSort,
    // Draft states (shown in UI, updated on checkbox/price change)
    priceRange,
    setPriceRange,
    selectedFilters,
    setSelectedFilters,
    toggleFilter,
    // Applied states (used for API)
    appliedFilters,
    appliedPriceRange,
    // Actions
    applyFilters,
    resetFilters,
    hasPendingChanges,
    // Filter metadata
    availableFilters,
    filtersLoading,
    categorySubcategoryMap,
    // Pagination
    page,
    setPage,
    limit,
    setLimit: setLimitAndReset,
    pagination,
    refetch: fetchProducts,
  };
};
