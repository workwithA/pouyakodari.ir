import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  // change mobile navbar status
  const [navStatus, changeNavStatus] = useState(false);
  return (
    <motion.div
      className="w-full flex justify-end"
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* navbar icon */}
      <div
        className="w-8 h-7 z-50 mt-5 mr-2 sm:mr-5 lg:mt-10 lg:mr-10 absolute animate-pulse"
        onClick={() => changeNavStatus(!navStatus)}
      >
        <div
          className={`w-full h-2 bg-gray-600 rounded-lg transition-all cursor-pointer duration-500 ${
            navStatus ? "rotate-45" : ""
          }`}
        ></div>
        <div
          className={`w-full h-2 bg-gray-600 rounded-lg mt-1 transition-all cursor-pointer duration-500 ${
            navStatus ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-full h-2 bg-gray-600 rounded-lg transition-all cursor-pointer duration-500 ${
            navStatus ? "-mt-5 -rotate-45" : "mt-1"
          }`}
        ></div>
      </div>

      {/* navbar contents */}
      <div
        className={`w-full h-screen transition-all duration-700 ease-in-out flex justify-center items-center flex-col gap-10 lg:gap-12 xl:gap-16 absolute z-40 bg-slate-200 ${
          navStatus ? "translate-y-0 opacity-100" : "-translate-y-[110%] opacity-0"
        }`}
      >
        <Link to='/' onClick={()=>changeNavStatus(false)} className="font-blackOps text-2xl tracking-widest sm:text-3xl xl:text-4xl cursor-pointer hover:scale-125 transition-all duration-300">HOME</Link>
        <Link to='/arch' onClick={()=>changeNavStatus(false)} className="font-blackOps text-2xl tracking-widest sm:text-3xl xl:text-4xl cursor-pointer hover:scale-125 transition-all duration-300">ARCH</Link>
        <Link to='/gallery' onClick={()=>changeNavStatus(false)} className="font-blackOps text-2xl tracking-widest sm:text-3xl xl:text-4xl cursor-pointer hover:scale-125 transition-all duration-300">GALLERY</Link>
        <Link to='/ad' onClick={()=>changeNavStatus(false)} className="font-blackOps text-2xl tracking-widest sm:text-3xl xl:text-4xl cursor-pointer hover:scale-125 transition-all duration-300">AD</Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
