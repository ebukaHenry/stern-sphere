import { 
  RiCheckboxCircleLine, 
  RiRobotLine, 
  RiShieldCheckLine, 
  RiBookOpenLine, 
  RiProgress3Line,
  RiLiveLine,
  RiArrowRightLine  
} from 'react-icons/ri';

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 px-6 py-16 w-full mx-auto overflow-hidden">
      
      {/* LEFT CONTENT WRAPPER */}
      <div className="w-full lg:w-2/3">
        <h6 className="text-red-700 text-sm font-extrabold tracking-wider uppercase mb-2">
          WHY STERNSPHERE?
        </h6>
        <h4 className="font-black text-3xl text-slate-900 mb-10 leading-tight">
          Everything Your Child Needs <br />
          <span className="relative inline-block mt-1">
            to Succeed.
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600 rounded-full"></span>
          </span>
        </h4>

        {/* 
          Feature Cards Grid:
          Staggered entrance animations are applied dynamically across cards.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Card 1 - AI Tutor */}
          <div className="flex flex-col justify-between bg-white rounded-xl shadow-md hover:shadow-xl p-5 border border-slate-100 transform translate-y-8 opacity-0 animate-[slideUp_0.6s_ease-out_forwards] hover:-translate-y-2 transition-all duration-300 group">
            <div>
              <div className="inline-block p-2 rounded-lg bg-red-50 text-red-700 mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <RiRobotLine className="w-6 h-6" />
              </div>
              <h6 className="font-bold text-slate-800 text-base mb-2">AI Tutor</h6>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Personalized AI tutor available 24/7 to help students learn better.
              </p>
            </div>
            <button className="text-red-700 font-bold text-xs sm:text-sm flex items-center gap-1 mt-auto hover:text-red-800 w-fit">
              <span>Learn More</span>
              <RiArrowRightLine className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 2 - Live Classes */}
          <div className="flex flex-col justify-between bg-white rounded-xl shadow-md hover:shadow-xl p-5 border border-slate-100 transform translate-y-8 opacity-0 animate-[slideUp_0.6s_ease-out_0.1s_forwards] hover:-translate-y-2 transition-all duration-300 group">
            <div>
              <div className="inline-block p-2 rounded-lg bg-red-50 text-red-700 mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <RiLiveLine className="w-6 h-6" />
              </div>
              <h6 className="font-bold text-slate-800 text-base mb-2">Live Classes</h6>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Interactive live classes with expert teachers from around the world.
              </p>
            </div>
            <button className="text-red-700 font-bold text-xs sm:text-sm flex items-center gap-1 mt-auto hover:text-red-800 w-fit">
              <span>Learn More</span>
              <RiArrowRightLine className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 3 - World Class Curriculum */}
          <div className="flex flex-col justify-between bg-white rounded-xl shadow-md hover:shadow-xl p-5 border border-slate-100 transform translate-y-8 opacity-0 animate-[slideUp_0.6s_ease-out_0.2s_forwards] hover:-translate-y-2 transition-all duration-300 group">
            <div>
              <div className="inline-block p-2 rounded-lg bg-red-50 text-red-700 mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <RiBookOpenLine className="w-6 h-6" />
              </div>
              <h6 className="font-bold text-slate-800 text-base mb-2">World Class Curriculum</h6>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Aligned with global standards and designed for real-world success.
              </p>
            </div>
            <button className="text-red-700 font-bold text-xs sm:text-sm flex items-center gap-1 mt-auto hover:text-red-800 w-fit">
              <span>Learn More</span>
              <RiArrowRightLine className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 4 - Smart Progress Tracking */}
          <div className="flex flex-col justify-between bg-white rounded-xl shadow-md hover:shadow-xl p-5 border border-slate-100 transform translate-y-8 opacity-0 animate-[slideUp_0.6s_ease-out_0.3s_forwards] hover:-translate-y-2 transition-all duration-300 group">
            <div>
              <div className="inline-block p-2 rounded-lg bg-red-50 text-red-700 mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <RiProgress3Line className="w-6 h-6" />
              </div>
              <h6 className="font-bold text-slate-800 text-base mb-2">Smart Progress</h6>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Real-time tracking and deep performance insights for parents and teachers.
              </p>
            </div>
            <button className="text-red-700 font-bold text-xs sm:text-sm flex items-center gap-1 mt-auto hover:text-red-800 w-fit">
              <span>Learn More</span>
              <RiArrowRightLine className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 5 - Safe & Secure */}
          <div className="flex flex-col justify-between bg-white rounded-xl shadow-md hover:shadow-xl p-5 border border-slate-100 transform translate-y-8 opacity-0 animate-[slideUp_0.6s_ease-out_0.4s_forwards] hover:-translate-y-2 transition-all duration-300 group">
            <div>
              <div className="inline-block p-2 rounded-lg bg-red-50 text-red-700 mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <RiShieldCheckLine className="w-6 h-6" />
              </div>
              <h6 className="font-bold text-slate-800 text-base mb-2">Safe & Secure</h6>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                A secure, completely ad-free platform built with child safety first.
              </p>
            </div>
            <button className="text-red-700 font-bold text-xs sm:text-sm flex items-center gap-1 mt-auto hover:text-red-800 w-fit">
              <span>Learn More</span>
              <RiArrowRightLine className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* RIGHT MARKETING BANNER */}
      <div className="w-full lg:w-1/3 flex flex-col md:flex-row items-center justify-between text-white bg-gradient-to-br from-red-800 via-red-700 to-red-500 p-6 md:p-8 rounded-2xl shadow-xl transform translate-x-4 opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards] self-stretch">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h5 className="font-extrabold text-2xl mb-3 leading-snug">
              Join the SternSphere <br />Community Today!
            </h5>
            <p className="text-red-100 text-sm leading-relaxed mb-6">
              Be part of a global community of learners, educators, and schools shaping the future of education.
            </p>
            <ul className="space-y-3 text-sm font-medium mb-8">
              <li className="flex items-center gap-2">
                <RiCheckboxCircleLine className="w-5 h-5 text-red-200 shrink-0" />
                <span>Flexible learning for all ages</span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckboxCircleLine className="w-5 h-5 text-red-200 shrink-0" />
                <span>Affordable plans for everyone</span>
              </li>
              <li className="flex items-center gap-2">
                <RiCheckboxCircleLine className="w-5 h-5 text-red-200 shrink-0" />
                <span>Access anywhere, anytime</span>
              </li>
            </ul>
          </div>
          <button className="w-full sm:w-auto bg-white text-red-700 px-6 py-3 rounded-lg font-bold text-sm shadow-md hover:bg-red-50 active:scale-95 transition-all duration-150">
            Get Started Today
          </button>
        </div>
        
        {/* Floating image adjustment inside the sidebar */}
        <div className="mt-6 md:mt-0 md:ml-4 shrink-0 hidden sm:block">
          <img 
            src="/sternspere2.png" 
            alt="Community Graphic" 
            className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]" 
          />
        </div>
      </div>

    </div>

  );
}
