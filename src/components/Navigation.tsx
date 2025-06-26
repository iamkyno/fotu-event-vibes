
import { Music, Calendar, ShoppingBag, Image, Ticket, Menu, X, Info } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { THEME_CONFIG } from './ThemeConfig';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/',
    icon: Music
  }, {
    name: 'About',
    path: '/about',
    icon: Info
  }, {
    name: 'Merch',
    path: '/merch',
    icon: ShoppingBag
  }, {
    name: 'Gallery',
    path: '/gallery',
    icon: Image
  }, {
    name: 'Tickets',
    path: '/tickets',
    icon: Ticket
  }];
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b ${THEME_CONFIG.primary.border}/20 shadow-sm`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Desktop Menu - Left */}
          <div className="hidden md:flex space-x-6 flex-1">
            {navItems.slice(0, 2).map(item => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:${THEME_CONFIG.primary.bg}/10 ${
                    isActive ? `${THEME_CONFIG.primary.text} ${THEME_CONFIG.primary.bg}/10` : `text-gray-700 hover:${THEME_CONFIG.primary.text}`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-zinc-950">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Centered Logo */}
          <Link to="/" className="flex items-center justify-center flex-1 md:flex-initial group">
            <Logo size="lg" showText={false} />
          </Link>

          {/* Desktop Menu - Right */}
          <div className="hidden md:flex space-x-6 flex-1 justify-end">
            {navItems.slice(2).map(item => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:${THEME_CONFIG.primary.bg}/10 ${
                    isActive ? `${THEME_CONFIG.primary.text} ${THEME_CONFIG.primary.bg}/10` : `text-gray-700 hover:${THEME_CONFIG.primary.text}`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-zinc-950">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 text-gray-700 hover:${THEME_CONFIG.primary.text} transition-colors`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:${THEME_CONFIG.primary.bg}/10 ${
                    isActive ? `${THEME_CONFIG.primary.text} ${THEME_CONFIG.primary.bg}/10` : `text-gray-700 hover:${THEME_CONFIG.primary.text}`
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
