function UserPill({ user, onLogout }) {
  if (!user) return null;

  return (
    <div 
      onClick={onLogout} 
      className="
        flex items-center gap-3 
        pl-4 border-l-2 border-gray-100 
        cursor-pointer 
        group
      "
      title="Click to logout"
    >
      
      {/* 1. The Name (Outside the circle) */}
      <span className="
        text-sm font-bold 
        text-gray-700 group-hover:text-indigo-600 
        transition-colors duration-200
        max-w-[100px] truncate
        text-right
      ">
        {user.name.split(' ')[0]} 
      </span>

      {/* 2. The Avatar Circle (Placeholder for custom pic) */}
      <div className="
        h-10 w-10 
        rounded-full 
        bg-gray-50 
        border-2 border-gray-200 
        group-hover:border-indigo-500 
        group-hover:bg-indigo-50
        flex items-center justify-center 
        transition-all duration-300
        group-active:scale-95
      ">
        {/* Outline User Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>

    </div>
  );
}

export default UserPill;