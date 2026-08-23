import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMailLine, RiArrowLeftLine, RiCheckboxCircleLine } from 'react-icons/ri';

export default function ForgotPassword() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your password reset API logic will go here
    if (email) {
      setEmailSubmitted(true);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-12 p-8 bg-white rounded-2xl shadow-xl border border-slate-100 transition-all duration-300">
      
      {!emailSubmitted ? (
        /* PHASE 1: REQUEST RESET LINK FORM */
        <>
          {/* Title */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl font-black text-slate-900">Reset Password</h2>
            <p className="text-sm text-slate-500 mt-1">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
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

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 shadow-md shadow-red-600/10 hover:shadow-red-700/20 active:scale-[0.98] transition-all text-sm"
            >
              Send Reset Link
            </button>
          </form>
        </>
      ) : (
        /* PHASE 2: SUCCESS STATE CONFIRMATION */
        <div className="text-center py-4 animate-[slideUp_0.4s_ease-out_forwards]">
          <div className="inline-block p-3 rounded-full bg-emerald-50 text-emerald-500 mb-4">
            <RiCheckboxCircleLine className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">Check Your Email</h2>
          <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6 leading-relaxed">
            We have sent a secure password reset link to <br />
            <span className="font-semibold text-slate-800">{email}</span>.
          </p>
          <button 
            onClick={() => setEmailSubmitted(false)}
            className="text-xs text-slate-400 hover:text-slate-600 underline font-medium transition-colors"
          >
            Didn't receive it? Try another email
          </button>
        </div>
      )}

      {/* FOOTER: BACK TO SIGN IN NAVIGATION */}
      <div className="mt-8 pt-6 border-t border-slate-50 text-center">
        <Link 
          to="/login" 
          className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors group"
        >
          <RiArrowLeftLine className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Sign In</span>
        </Link>
      </div>

    </div>
  );
}
