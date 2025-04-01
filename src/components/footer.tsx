import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import footerlogo from "../assets/footerlogo.svg";
import { Separator } from "./ui/separator";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="container px-4 pt-10 pb-6 mx-auto md:pt-20 md:pb-10">
        <div className="flex flex-col mx-auto max-w-7xl">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center justify-between mb-8 space-y-6 md:flex-row md:mb-12 md:space-y-0">
            <img src={footerlogo} alt="Wabaytech" className="w-32 md:w-48" />
            <div className="flex items-center space-x-6">
              <a href="#" className="transition-colors hover:text-white">
                <Youtube size={24} className="text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="transition-colors hover:text-white">
                <Facebook
                  size={24}
                  className="text-gray-300 hover:text-white"
                />
              </a>
              <a href="#" className="transition-colors hover:text-white">
                <Twitter size={24} className="text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="transition-colors hover:text-white">
                <Instagram
                  size={24}
                  className="text-gray-300 hover:text-white"
                />
              </a>
              <a href="#" className="transition-colors hover:text-white">
                <Linkedin
                  size={24}
                  className="text-gray-300 hover:text-white"
                />
              </a>
            </div>
          </div>

          {/* Separator */}
          <Separator className="my-8 bg-gray-700" />

          {/* Footer Links and Copyright Text */}
          <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:items-start md:space-y-0">
            {/* Copyright Text */}
            <div className="order-2 text-sm text-gray-300 md:order-1 md:text-base lg:text-lg">
              Wabaytech 2025. All rights reserved.
            </div>

            {/* Links */}
            <nav className="order-1 md:order-2">
              <ul className="flex flex-wrap justify-center gap-6 text-gray-300 md:gap-8 lg:gap-12">
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-white md:text-base lg:text-lg"
                  >
                    Acceuil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-white md:text-base lg:text-lg"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-white md:text-base lg:text-lg"
                  >
                    À propos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-white md:text-base lg:text-lg"
                  >
                    Contacter-nous
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Powered by Devoxys */}
          <div className="pt-6 mt-8 text-center border-t border-gray-700">
            <a
              href="https://www.devoxys.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-gray-400 transition-colors hover:text-white"
            >
              Powered by Devoxys
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
