import { CalendarCheck, BookMarked, Home, Star, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <aside className="w-64 bg-gray-800 border-r border-gray-700 hidden md:block">
        <div className="p-4">
          <button
            onClick={() => handleNavigation("/dashboard")}
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-bold">Clique</span>
          </button>
        </div>
        <nav className="mt-4">
          <button
            onClick={() => handleNavigation("/dashboard")}
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 w-full text-left"
          >
            <Home className="mr-4 h-6 w-6" />
            Home
          </button>
          <button
            onClick={() => handleNavigation("/explore")}
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 w-full text-left"
          >
            <Star className="mr-4 h-6 w-6" />
            Food review
          </button>
          <button
            onClick={() => handleNavigation("/notifications")}
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 w-full text-left"
          >
            <CalendarCheck className="mr-4 h-6 w-6" />
            Calendar
          </button>
          <button
            onClick={() => handleNavigation("/bookmarks")}
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 w-full text-left"
          >
            <BookMarked className="mr-4 h-6 w-6" />
            Study material
          </button>
          <button
            onClick={() => handleNavigation("/profile")}
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 w-full text-left"
          >
            <User className="mr-4 h-6 w-6" />
            Profile
          </button>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
