import { useState } from "react";
import { Menu, X, Home, Users, BarChart2, DollarSign } from "lucide-react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      label: "User Management",
      icon: Users,
      href: "#",
    },
    {
      label: "Top Charts",
      icon: BarChart2,
      href: "#",
    },
    {
      label: "Revenue Insights",
      icon: DollarSign,
      href: "#",
    },
  ];

  return (
    <nav className="bg-gray-900 border-b border-gray-800 w-full h-16 fixed z-40">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <Home className="text-blue-500" size={24} />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute left-0 right-0 bg-gray-900 border-b border-gray-800 px-4 py-2`}
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-white py-3 transition-colors duration-200"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
