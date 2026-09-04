// API Configuration
export const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:5000/api';

// API endpoints
export const API_ENDPOINTS = {
  auth: {
    signup: `${API_BASE_URL}/auth/signup`,
    login: `${API_BASE_URL}/auth/login`,
    users: `${API_BASE_URL}/auth/users`,
  },
  products: {
    getAll: `${API_BASE_URL}/products`,
    getById: (id: string) => `${API_BASE_URL}/products/${id}`,
    getByCategory: (category: string) => `${API_BASE_URL}/products/category/${category}`,
  },
  orders: {
    create: `${API_BASE_URL}/orders`,
    getAll: `${API_BASE_URL}/orders`,
    getByUser: (userId: string) => `${API_BASE_URL}/orders/user/${userId}`,
  },
};

