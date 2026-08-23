import axios from 'axios';

// 1. Centralized Axios instance with default settings
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. Request Interceptor: Automatically injects JWT Bearer token into outgoing requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('sternsphere_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Centralized Auth API Service Endpoints Wrapper
export const authService = {
  // Login handler
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data; // Expecting { token, user }
  },

  // Registration handler
  register: async (name, email, password) => {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
  },

  // Forgot Password handler (The one we use below)
  forgotPassword: async (email) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data; // Expecting { success: true, message: "..." }
  }
};

export default api;
