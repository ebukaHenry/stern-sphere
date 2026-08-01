import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'; // Using the Remix Icons we set up earlier

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    'Home', 'About', 'Academics', 'AI Tutor', 
    'For Parents', 'For Schools', 'Pricing', 'Resources'
  ];

  return (
    <header className="header relative shadow-sm py-3 px-6 md:px-8 bg-white z-50">
      <div className="flex items-center justify-between w-full">
        
        {/* 1. Logo Container (Stays left) */}
        <span className="logo-container flex items-center space-x-2">
          <img src="/stensphere-logo.jpeg" alt="Logo" className="logo w-10 h-10" />
          <Link to="/">
          <h1 className="text-2xl md:text-3xl font-bold text-black">
            STERN<span className="text-red-600">SPHERE</span>
          </h1>
          </Link>
        </span>

        {/* 2. Desktop Navigation (Hidden on Mobile) */}
        <ul className="hidden xl:flex space-x-6 font-medium text-slate-700">
          {navLinks.map((link) => (
            <li key={link} className="hover:text-red-600 cursor-pointer transition-colors">
              {link}
            </li>
          ))}
        </ul>

        {/* 3. Desktop Login Button (Hidden on Mobile) */}
        <div className="header-buttons hidden xl:block">
          <Link to="/login" className="login-button bg-red-600 text-white hover:bg-red-700 py-1.5 px-5 rounded-md font-medium transition-colors">
            Login
          </Link>
        </div>

        {/* 4. Mobile Hamburger Button (Hidden on Desktop) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="xl:hidden text-slate-800 p-1 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <RiCloseLine className="w-7 h-7" /> : <RiMenuLine className="w-7 h-7" />}
        </button>

      </div>

      {/* 5. Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-slate-100 xl:hidden transition-all duration-300 ease-in-out">
          <ul className="flex flex-col p-5 space-y-4 font-semibold text-slate-700">
            {navLinks.map((link) => (
              <li 
                key={link} 
                onClick={() => setIsOpen(false)}
                className="hover:text-red-600 cursor-pointer border-b border-slate-50 pb-2 last:border-none"
              >
                {link}
              </li>
            ))}
            
            {/* Login button injected right at the bottom of the mobile stack */}
            <li className="pt-2">
              <Link to="login" className="w-full bg-red-600 text-white hover:bg-red-700 py-2.5 px-4 rounded-md font-medium transition-colors">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
