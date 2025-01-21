import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <img
            src="../pats-kitchen-logo.png"
            alt="PT Web Solutions Logo"
            className="h-8 md:h-10"
          />
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-xl md:text-2xl font-bold text-amber-600"
            ></Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Home
              </Link>
              <a
                href="/#services"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Services
              </a>
              <a
                href="/#about"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                About
              </a>
              <Link
                to="/meal-plans"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Meal Plans
              </Link>
              <a
                href="/#contact"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600 transition-colors p-2"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-2">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Home
            </Link>
            <a
              href="/#services"
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Services
            </a>
            <a
              href="/#about"
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </a>
            <Link
              to="/meal-plans"
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Meal Plans
            </Link>
            <a
              href="/#contact"
              className="block py-2 text-gray-700 hover:text-amber-600 transition-colors"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
