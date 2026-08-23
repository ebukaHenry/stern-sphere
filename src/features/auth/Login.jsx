import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMailLine, RiLockLine, RiGoogleFill, RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Login({ switchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { loginUser, loginWithGoogle } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      await loginUser(email, password);
    } catch (error) {
      setErrorMsg(error.response?.data?.message || 'Invalid email or password credentials.');
    } finally {
      setIsSubmitting(false);
    }}

  return (
    <div className="w-full max-w-md mx-auto my-8 p-8 bg-white rounded-2xl shadow-xl border border-slate-100">
      {/* Title */}
      
      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-3xl font-black text-slate-900">Welcome Back</h2>
        <p className="text-sm text-slate-500 mt-1">Please enter your details to sign in</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
         {errorMsg && <div className="p-3 text-xs bg-red-50 text-red-600 rounded-lg">{errorMsg}</div>}

        {/* Email Field */}
        <div className="relative group">
          <span className="absolute left-0 bottom-3 text-slate-400 group-focus-within:text-red-600 transition-colors">
            <RiMailLine className="w-5 h-5" />
          </span>
          <input 
            type="email" 
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-7 pb-2 bg-transparent text-slate-800 placeholder-slate-400 border-b border-slate-200 focus:border-red-600 focus:outline-none transition-colors text-sm"
            required
          />
        </div>

        {/* Password Field */}
        <div className="relative group">
          <span className="absolute left-0 bottom-3 text-slate-400 group-focus-within:text-red-600 transition-colors">
            <RiLockLine className="w-5 h-5" />
          </span>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-7 pr-8 pb-2 bg-transparent text-slate-800 placeholder-slate-400 border-b border-slate-200 focus:border-red-600 focus:outline-none transition-colors text-sm"
            required
          />
          {/* Toggle Password Visibility */}
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 bottom-3 text-slate-400 hover:text-slate-600 transition-colors"
          >
            {showPassword ? <RiEyeOffLine className="w-4 h-4" /> : <RiEyeLine className="w-4 h-4" />}
          </button>
        </div>

        {/* Forgot Password Link */}
        <div className="flex justify-end">
          <Link 
            to="/forgot-password"
            className="text-xs font-semibold text-red-600 hover:text-red-700 transition-colors"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 shadow-md shadow-red-600/10 hover:shadow-red-700/20 active:scale-[0.98] transition-all text-sm"
        >
          Sign In
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-6 text-center">
        <span className="absolute inset-x-0 top-1/2 h-px bg-slate-100 -z-10"></span>
        <span className="bg-white px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Or continue with</span>
      </div>

      {/* Google Button */}
      <button 
        type="button"
        onClick={loginWithGoogle}
        className="w-full flex items-center justify-center gap-3 border border-slate-200 hover:bg-slate-50 font-semibold text-slate-700 py-3 rounded-lg active:scale-[0.98] transition-all text-sm shadow-sm"
      >
        <RiGoogleFill className="w-5 h-5 text-[#EA4335]" />
        <span>Sign in with Google</span>
      </button>

      {/* Switch Link */}
      <p className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?{' '}
        <Link 
          to="/register"
          className="font-bold text-red-600 hover:text-red-700 transition-colors"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
