import { 
  RiGoogleFill, 
  RiMicrosoftFill, 
  RiVideoChatFill,
  RiVisaLine,
  RiMastercardFill  
} from 'react-icons/ri';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-slate-900 text-slate-400 py-12 px-6 md:px-12 lg:px-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        
        {/* TOP LAYER: TRUSTED BRAND LOGOS STRIP */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <p className="text-xs font-bold tracking-wider text-slate-400 uppercase text-center lg:text-left">
            TRUSTED BY PARENTS & SCHOOLS WORLDWIDE
          </p>
          
          {/* Logo icons flexbox container with auto-wrap on mobile */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <RiGoogleFill className="w-7 h-7 text-slate-500 hover:text-[#EA4335] transition-colors duration-200" title="Google" />
            <RiMicrosoftFill className="w-7 h-7 text-slate-500 hover:text-[#00A4EF] transition-colors duration-200" title="Microsoft" />
            <RiVideoChatFill className="w-7 h-7 text-slate-500 hover:text-[#2D8CFF] transition-colors duration-200" title="Zoom" />
            <RiVisaLine className="w-9 h-9 text-slate-500 hover:text-[#1A1F71] transition-colors duration-200" title="Visa" />
            <RiMastercardFill className="w-8 h-8 text-slate-500 hover:text-[#EB001B] transition-colors duration-200" title="Mastercard" />
          </div>
        </div>

        {/* BOTTOM LAYER: DIRECTORY NAVIGATION & COPYRIGHT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          
          {/* Quick Footer Links */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium text-slate-400">
            <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contact Support</li>
          </ul>

          {/* Clean Copyright Line */}
          <p className="text-slate-500 text-xs text-center md:text-right">
            &copy; {currentYear} STERN<span className="text-red-500 font-bold">SPHERE</span>. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}
