import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`bg-[#151c2c] text-white py-8 w-full ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">TradeHub</h2>
            <p className="text-gray-400">
              Efficient dashboards for you are our topmost priority.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8">
          <p>
            &copy; {new Date().getFullYear()} TradeHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
