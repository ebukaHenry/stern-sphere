import React from 'react';
import Hero from '../components/Hero.jsx';
import Main from '../components/Main.jsx';
import AboutUs from '../components/AboutUs.jsx';
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';


export default function Home () {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    const user = searchParams.get('user');

    if (token && user) {
      // Save tokens into localStorage to authenticate the current session
      localStorage.setItem('sternsphere_token', token);
      localStorage.setItem('sternsphere_user', decodeURIComponent(user));
      
      // Clean up the URL to hide security queries
      navigate('/', { replace: true });
      window.location.reload(); // Re-trigger application state boot
    }
  }, [searchParams, navigate]);

  return (
    <div className="home d-flex flex-col">
      <Hero />
      <Main />
      <AboutUs />
    </div>
  );
}