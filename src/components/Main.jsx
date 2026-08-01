import { 
  RiGraduationCapLine, 
  RiEarthLine, 
  RiVerifiedBadgeFill, 
  RiUser3Line, 
  RiBarChartGroupedFill 
} from 'react-icons/ri';

export default function Main() {
  return (
    <>
      {/* 
        Responsive Layout Grid:
        - 1 column on small mobile layout (grid-cols-1)
        - 3 columns on tablets (sm:grid-cols-3)
        - 5 columns inline on desktops (lg:grid-cols-5)
      */}
      <div className="bg-[black] py-4 px-8 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 justify-items-start sm:justify-items-center">
        
        {/* 1. Students */}
        <div className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
          <div className="p-2 rounded-xl bg-white/5 group-hover:bg-red-600/10 transition-colors">
            <RiGraduationCapLine className="w-10 h-10 text-red-600" />
          </div>
          <span className="statistic">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white group-hover:text-red-500 transition-colors">
              10,000+
            </h3>
            <p className="text-sm text-slate-400 font-normal">Students</p>
          </span>
        </div>

        {/* 2. Expert Educators */}
        <div className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
          <div className="p-2 rounded-xl bg-white/5 group-hover:bg-red-600/10 transition-colors">
            <RiUser3Line className="w-10 h-10 text-red-600" />
          </div>
          <span className="statistic">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white group-hover:text-red-500 transition-colors">
              500+
            </h3>
            <p className="text-sm text-slate-400 font-normal">Expert Educators</p>
          </span>
        </div>

        {/* 3. Countries Reached */}
        <div className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
          <div className="p-2 rounded-xl bg-white/5 group-hover:bg-red-600/10 transition-colors">
            <RiEarthLine className="w-10 h-10 text-red-600" />
          </div>
          <span className="statistic">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white group-hover:text-red-500 transition-colors">
              100+
            </h3>
            <p className="text-sm text-slate-400 font-normal">Countries Reached</p>
          </span>
        </div>

        {/* 4. Lessons Completed */}
        <div className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
          <div className="p-2 rounded-xl bg-white/5 group-hover:bg-red-600/10 transition-colors">
            <RiBarChartGroupedFill className="w-10 h-10 text-red-600" />
          </div>
          <span className="statistic">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white group-hover:text-red-500 transition-colors">
              1M+
            </h3>
            <p className="text-sm text-slate-400 font-normal">Lessons Completed</p>
          </span>
        </div>

        {/* 5. Uptime & Reliability */}
        <div className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105 sm:col-span-3 lg:col-span-1 sm:justify-self-center lg:justify-self-auto">
          <div className="p-2 rounded-xl bg-white/5 group-hover:bg-red-600/10 transition-colors">
            <RiVerifiedBadgeFill className="w-10 h-10 text-red-600" />
          </div>
          <span className="statistic">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white group-hover:text-red-500 transition-colors">
              99%
            </h3>
            <p className="text-sm text-slate-400 font-normal">Uptime & Reliability</p>
          </span>
        </div>

      </div>
    </>
  );
}
