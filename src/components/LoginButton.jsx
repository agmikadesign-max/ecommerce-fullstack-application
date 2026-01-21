import { Link } from 'react-router';

function LoginButton() {
  return (
    <Link 
      to="/login" 
      className="
        flex items-center justify-center
        px-7 py-2.5 
        rounded-full 
        font-bold 
        text-sm 
        leading-none
        
        /* --- DEFAULT STATE (Outline) --- */
        border-2 
        border-indigo-600 
        text-indigo-600 
        bg-transparent 
        
        /* --- HOVER STATE (Filled) --- */
        hover:bg-gradient-to-r 
        hover:from-indigo-600 hover:to-purple-600 
        hover:text-white 
        hover:border-transparent
        
        /* --- ANIMATION --- */
        hover:shadow-lg
        hover:shadow-indigo-500/30 
        hover:scale-105 
        active:scale-95 
        transform-gpu 
        transition-all 
        duration-300
      "
    >
      <span className="mt-[1px]">Sign In</span>
    </Link>
  );
}

export default LoginButton;