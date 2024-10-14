import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-1">
            <img src={logo} alt="HooBank" className="w-40 h-auto mb-4" />
            <p className="text-dimWhite text-sm">
              A new way to make payments easy, reliable and secure.
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.key} className="col-span-1">
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      className="text-dimWhite hover:text-secondary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Subscription */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 text-white px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-tr-none flex-grow mb-2 sm:mb-0"
              />
              <button
                type="submit"
                className="bg-blue-gradient text-primary px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-bl-none hover:opacity-90 transition-opacity duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-dimWhite text-sm mb-4 sm:mb-0">
            © 2024 HooBank. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors duration-300"
              >
                <img src={social.icon} alt={social.id} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
