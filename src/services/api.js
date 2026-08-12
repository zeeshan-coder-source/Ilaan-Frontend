import { products } from '../data/products';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const defaultHeaders = {
  'Content-Type': 'application/json',
  'x-api-key': API_KEY,
};

async function request(endpoint, options = {}) {
  let url = `${BASE_URL}${endpoint}`;
  url = url.replace(/([^:]\/)\/+/g, "$1");
  
  if (BASE_URL.replace(/\/$/, '').endsWith('/api') && endpoint.startsWith('/api/')) {
    const cleanBase = BASE_URL.replace(/\/api\/?$/, '');
    url = `${cleanBase}${endpoint}`.replace(/([^:]\/)\/+/g, "$1");
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || `Request failed with status ${response.status}`);
  }

  return response.json();
}

export const getProducts = async ({ page = 1, limit = 12, sort = 'recommended', ...filters } = {}) => {
  try {
    const query = new URLSearchParams({
      page,
      limit,
      sort, 
      ...filters
    }).toString();
    const response = await request(`/products?${query}`);
    const backendProducts = response.data || [];
    const pagination = response.pagination || { total: backendProducts.length, page, limit, totalPages: 1 };
    
    const fallbackImages = products.map(p => p.image).filter(Boolean);
    const BACKEND_URL = BASE_URL.replace(/\/api\/?$/, '');

    const mapped = backendProducts.map((p, index) => {
      let image = '';
      let pics = [];
      if (p.picture) {
        if (Array.isArray(p.picture)) {
          pics = p.picture;
        } else if (typeof p.picture === 'string') {
          try {
            pics = JSON.parse(p.picture);
          } catch (e) {
            pics = [p.picture];
          }
        }
      }

      if (pics.length > 0) {
        const pic = pics[0];
        image = pic.startsWith('http') ? pic : `${pic}`;
      } else {
        image = fallbackImages[index % fallbackImages.length];
      }

      const specs = {
        resolution: p.screenDimension || '1920 x 1080',
        brightness: p.brightness || '1500 nits',
        connectivity: p.operatingSystem || 'WiFi / LAN / USB',
        mounting: p.mount || 'Wall Mount',
        operation: p.indoorOutdoor || '24/7 Run Operation'
      };

      const features = p.longDescription
        ? p.longDescription.split('\n').map(line => line.trim()).filter(Boolean).slice(0, 3)
        : [
            "Slim profile design with a heavy-duty stable base",
            "Seamless content scheduling and remote updates via cloud console",
            "High brightness output ensuring clear visibility under direct sunlight"
          ];

      return {
        id: p.id,
        slug: p.slug || '',
        name: p.productName || p.model || `Product ${p.id}`,
        category: p.productFamily || 'LED Screen',
        ledType: p.use || 'Outdoor LED Display',
        price: p.purchaseType === 'online' 
          ? (p.onlinePrice || 0) 
          : (p.priceGbp || (p.landedCostGbp ? parseFloat(p.landedCostGbp.replace(/[^0-9.]/g, '')) : 0) || 1200),
        purchaseType: p.purchaseType || 'quote_only',
        onlinePrice: p.onlinePrice || null,
        landedCostGbp: p.landedCostGbp || '',
        quotes: p.quotes || [],
        image,
        description: p.productSummary || p.longDescription || 'No description available.',
        featured: index < 4,
        specs,
        features
      };
    });

    return {
      products: mapped,
      pagination
    };
  } catch (error) {
    console.error("Error fetching dynamic products from backend, falling back to mock data:", error);
    return {
      products: products,
      pagination: {
        total: products.length,
        page: 1,
        limit: products.length,
        totalPages: 1
      }
    };
  }
};

export const getFilters = async () => {
  return request('/products/filters');
};

export const submitContact = async (formData) => {
  return request('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

export const getProductBySlug = async (slugOrId) => {
  const result = await request(`/products/${slugOrId}`);
  if (!result.success) {
    throw new Error(result.message || "Failed to load product");
  }
  const p = result.data;
  const BACKEND_URL = BASE_URL.replace(/\/api\/?$/, '');
  let image = '';
  let pics = [];
  if (p.picture) {
    if (Array.isArray(p.picture)) pics = p.picture;
    else {
      try { pics = JSON.parse(p.picture); } catch { pics = [p.picture]; }
    }
  }
  if (pics.length > 0) {
    image = pics[0].startsWith('http') ? pics[0] : `${pics[0]}`;
  }
  return {
    id: p.id,
    slug: p.slug || '',
    name: p.productName || p.model || `Product ${p.id}`,
    category: p.productFamily || 'LED Screen',
    ledType: p.use || 'Outdoor LED Display',
    price: p.purchaseType === 'online' ? (p.onlinePrice || 0) : (p.priceGbp || (p.landedCostGbp ? parseFloat(p.landedCostGbp.replace(/[^0-9.]/g, '')) : 0) || 1200),
    purchaseType: p.purchaseType || 'quote_only',
    onlinePrice: p.onlinePrice || null,
    landedCostGbp: p.landedCostGbp || '',
    quotes: p.quotes || [],
    image,
    description: p.productSummary || p.longDescription || 'No description available.',
    specs: {
      resolution: p.screenDimension || '1920 x 1080',
      brightness: p.brightness || '1500 nits',
      connectivity: p.operatingSystem || 'WiFi / LAN / USB',
      mounting: p.mount || 'Wall Mount',
      operation: p.indoorOutdoor || '24/7 Run Operation'
    },
    features: p.longDescription
      ? p.longDescription.split('\n').map(line => line.trim()).filter(Boolean).slice(0, 3)
      : ["Slim profile design with a heavy-duty stable base"]
  };
};

