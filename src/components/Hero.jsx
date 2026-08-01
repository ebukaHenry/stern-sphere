import { 
  RiArrowRightLine, 
  RiPlayFill, 
  RiTvLine, 
  RiCustomerService2Fill, 
  RiBrainLine, 
  RiEmotionHappyLine 
} from 'react-icons/ri';

export default function Hero() {
  return (
    <div className="hero min-h-[85vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 py-12 md:px-12 lg:px-16 overflow-hidden bg-gradient-to-b from-white to-slate-50">
      
      {/* LEFT CONTENT WRAPPER */}
      <div className="hero-content flex flex-col space-y-4 max-w-2xl text-center lg:text-left items-center lg:items-start animate-fade-in">
        
        {/* Subtle sliding sub-header */}
        <h4 className="text-red-600 font-extrabold text-sm tracking-wider uppercase transform translate-y-2 opacity-0 animate-[slideUp_0.5s_ease-out_forwards]">
          THE WORLD'S AI-POWERED
        </h4>

        {/* Dynamic growing headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight transform translate-y-4 opacity-0 animate-[slideUp_0.6s_ease-out_0.1s_forwards]">
          LEARNING <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-800 to-red-600">ECOSYSTEM</span>
        </h1>

        {/* Descriptive Body */}
        <p className="text-base text-slate-600 leading-relaxed max-w-lg transform translate-y-4 opacity-0 animate-[slideUp_0.7s_ease-out_0.2s_forwards]">
          SternSphere combines world-class Curriculum, expert educators and AI technology 
          to deliver personalized learning that empowers every child to excel.
        </p>

        {/* Buttons Action Bar */}
        <div className="hero-buttons flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto transform translate-y-4 opacity-0 animate-[slideUp_0.8s_ease-out_0.3s_forwards]">
          
          {/* Main Call To Action Button with arrow slide hover effect */}
          <button className="group bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-red-700/30 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95">
            <span>Start Learning Now</span>
            <RiArrowRightLine className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Watch Button with pulsating ripple */}
          <button className="group bg-white text-slate-800 font-semibold py-3 px-6 rounded-lg border border-slate-200 shadow-sm hover:bg-slate-50 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95">
            <RiPlayFill className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
            <span>Watch Video</span>
          </button>
          
        </div>

        {/* BOTTOM FEATURE CARDS/GRID */}
        {/* Turns into a 2x2 grid on mobile and 4-column layout on wide screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 w-full border-t border-slate-200 transform translate-y-4 opacity-0 animate-[slideUp_0.9s_ease-out_0.4s_forwards]">
          
          {/* AI Feature */}
          <div className="flex items-center gap-3 p-2 text-left border-r-0 sm:border-r border-slate-200 group last:border-0">
            <div className="p-2 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <RiBrainLine className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">AI Powered<br/><span className="text-slate-500 font-normal">Learning</span></p>
          </div>

          {/* Personalization Feature */}
          <div className="flex items-center gap-3 p-2 text-left border-r-0 lg:border-r border-slate-200 group last:border-0">
            <div className="p-2 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <RiCustomerService2Fill className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">Personalized<br/><span className="text-slate-500 font-normal">For Every Child</span></p>
          </div>

          {/* Live Classes Feature */}
          <div className="flex items-center gap-3 p-2 text-left border-r-0 sm:border-r border-slate-200 group last:border-0">
            <div className="p-2 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <RiTvLine className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">Live Classes<br/><span className="text-slate-500 font-normal">& Expert Teachers</span></p>
          </div>

          {/* Security Feature */}
          <div className="flex items-center gap-3 p-2 text-left group last:border-0">
            <div className="p-2 rounded-lg bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <RiEmotionHappyLine className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">Secure<br/><span className="text-slate-500 font-normal">& Child Safe</span></p>
          </div>

        </div>
      </div>

      {/* RIGHT HERO IMAGE WRAPPER */}
      {/* Floating animation applied here to give a dynamic web feel */}
      <div className="hero-image w-full lg:w-1/2 flex justify-center animate-[float_4s_ease-in-out_infinite]">
        <div className="relative w-full max-w-md lg:max-w-none">
          {/* Dynamic background accent block behind image */}
          <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-indigo-600 rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <img 
            src="sternspere1.png" 
            alt="Hero Image" 
            className="relative w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-2xl border border-slate-100" 
          />
        </div>
      </div>

    </div>
  );
}
