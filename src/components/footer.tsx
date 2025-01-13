import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import footerlogo from "../assets/footerlogo.svg";
import { Separator } from "./ui/separator";

function Footer() {
  return (
    <div className="bg-black">
      <div className="px-4 pt-10 pb-6 md:pt-20 md:pb-10 md:px-20">
        <div className="flex flex-col">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center justify-between mb-6 space-y-6 md:flex-row md:mb-10 md:space-y-0">
            <img src={footerlogo} alt="Wabaytech" className="w-32 md:w-auto" />
            <div className="flex items-center space-x-4 md:space-x-6">
              <Youtube size={20} className="text-gray-300 " />
              <Facebook size={20} className="text-gray-300 " />
              <Twitter size={20} className="text-gray-300 " />
              <Instagram size={20} className="text-gray-300 " />
              <Linkedin size={20} className="text-gray-300 " />
            </div>
          </div>

          {/* Separator */}
          <div>
            <Separator
              className="my-4 mb-6 bg-white md:mb-10"
              orientation="horizontal"
            />
          </div>

          {/* Footer Links and Copyright Text */}
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:items-start md:space-y-0">
            {/* Copyright Text */}
            <div className="order-1 md:order-none text-white text-sm md:text-[20px] max-w-[386px] text-center md:text-left">
              Wabaytech 2025. All rights reserved.
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-start text-white space-x-4 md:space-x-8 lg:space-x-28 font-semibold text-sm md:text-[20px]">
              <div>Acceuil</div>
              <div>Services</div>
              <div>À propos</div>
              <div>Contacter-nous</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
