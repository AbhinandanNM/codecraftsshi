import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { state, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">🚀</div>
              <span className="text-xl font-bold">CodeCrafts</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {state.isAuthenticated ? (
              <>
                <Link 
                  to="/lessons" 
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Lessons
                </Link>
                <Link 
                  to="/flashcards" 
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Flashcards
                </Link>
                <Link 
                  to="/duels" 
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Duels
                </Link>
                <Link 
                  to="/leaderboard" 
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Leaderboard
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/about" 
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  About
                </Link>
              </>
            )}
          </div>

          {/* User Profile / Auth Buttons */}
          <div className="flex items-center space-x-4">
            {state.isAuthenticated && state.user ? (
              <>
                {/* XP Display */}
                <div className="hidden sm:flex items-center space-x-2 bg-blue-700 px-3 py-1 rounded-full">
                  <span className="text-yellow-300">⭐</span>
                  <span className="font-semibold">{state.user.xp} XP</span>
                </div>

                {/* Streak Display */}
                <div className="hidden sm:flex items-center space-x-2 bg-orange-500 px-3 py-1 rounded-full">
                  <span className="text-red-400">🔥</span>
                  <span className="font-semibold">{state.user.streak}</span>
                </div>

                {/* User Menu */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 hover:text-blue-200 transition-colors duration-200">
                    <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">
                        {state.user.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="hidden md:block">{state.user.username}</span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="hover:text-blue-200 transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-blue-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;