import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../utils/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 1. On app mount, check if user has a valid cached token session
  useEffect(() => {
    const token = localStorage.getItem('sternsphere_token');
    const savedUser = localStorage.getItem('sternsphere_user');
    
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // 2. The Custom Email/Password Login Wrapper Action
  const loginUser = async (email, password) => {
    const data = await authService.login(email, password);
    // Expecting response data format: { token: "...", user: { id: 1, name: "..." } }
    localStorage.setItem('sternsphere_token', data.token);
    localStorage.setItem('sternsphere_user', JSON.stringify(data.user));
    setUser(data.user);
    navigate('/'); // Route directly back to Home layout dashboard
  };

  // 3. The Custom Email/Password Register Wrapper Action
  const registerUser = async (name, email, password) => {
    const data = await authService.register(name, email, password);
    localStorage.setItem('sternsphere_token', data.token);
    localStorage.setItem('sternsphere_user', JSON.stringify(data.user));
    setUser(data.user);
    navigate('/');
  };

  // 4. The Google Single-Sign-On Integration Action
  const loginWithGoogle = async () => {
    try {
      // Directs to your backend controller which initiates the Google OAuth flow
      window.location.href = `${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/auth/google`;
    } catch (error) {
      console.error('Google Sign-In initialization failed:', error);
      throw error;
    }
  };

  // 5. Global Sign-out cleanup helper
  const logoutUser = () => {
    localStorage.removeItem('sternsphere_token');
    localStorage.removeItem('sternsphere_user');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginUser, registerUser, loginWithGoogle, logoutUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Custom hook to quickly tap into auth methods across components
export const useAuth = () => useContext(AuthContext);
