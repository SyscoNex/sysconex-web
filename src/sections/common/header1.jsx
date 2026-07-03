"use client";

import NavLink from "@/elements/nav-link";
import ItodoImage from "../../elements/itodo-img";
import { useState, useEffect } from "react";
import { loadScript } from "@/globals/constants";

function Header1() {
  const [isActive, setIsActive] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  function toggleNavClass() {
    setIsActive(!isActive);
  }

  function toggleSubmenu(menu) {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  }

  useEffect(() => {
    loadScript("js/mobilenav.js");
  }, []);

  return (
    <>
      <header className={`w-full z-[999] bg-white ${isActive ? "active" : ""}`}>
        {/* TOP BAR */}
        <div className="hidden md:block bg-primary py-1.5 border-b border-white/5 text-[13px] leading-tight">
          <div className="max-w-[1360px] mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center">
              <ul className="flex gap-[15px] list-none m-0 p-0">
                <li className="flex items-center">
                  <a
                    href="https://www.facebook.com/people/SyscoNex-Solutions/61578193958732/#"
                    className="text-white hover:text-[var(--primary)] transition-colors"
                  >
                    <i className="feather-facebook mr-1" /> Facebook
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    href="https://lk.linkedin.com/company/sysconex-solutions"
                    className="text-white hover:text-[var(--primary)] transition-colors"
                  >
                    <i className="feather-linkedin mr-1" /> LinkedIn
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    href="https://www.instagram.com/"
                    className="text-white hover:text-[var(--primary)] transition-colors"
                  >
                    <i className="feather-instagram mr-1" /> Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center text-white">
              <div className="flex gap-[15px] list-none m-0 p-0">
                <NavLink to="" className="text-white hover:text-[var(--primary)] transition-colors">
                  Terms &amp; Condition
                </NavLink>
                <span className="text-white/20">|</span>
                <NavLink to="" className="text-white hover:text-[var(--primary)] transition-colors">
                  Privacy Policy
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN BAR */}
        <div className="sticky top-0 z-[999] bg-white border-b border-gray-100 shadow-sm w-full">
          <div className="h-[70px] flex items-center w-full">
            <div className="max-w-[1360px] w-full mx-auto px-4 flex justify-between items-center">
              {/* LOGO */}
              <div className="h-[60px] flex items-center m-0">
                <div className="flex items-center h-full">
                  <NavLink to="/">
                    <ItodoImage src="images/Logo.png" alt="SyscoNex Logo" className="max-h-[55px] w-auto block" />
                  </NavLink>
                </div>
              </div>

              {/* NAV Toggle Button (Mobile) */}
              <button
                id="mobile-side-drawer"
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 border-none bg-transparent cursor-pointer z-[1001]"
                onClick={toggleNavClass}
              >
                <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isActive ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isActive ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isActive ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>

              {/* MAIN NAVIGATION */}
              <div className="hidden md:flex items-center">
                <ul className="flex items-center gap-[10px] m-0 p-0 list-none">
                  <li className="relative py-2 group">
                    <NavLink
                      to="/"
                      className="px-[15px] py-[10px] block font-semibold text-lg text-gray-800 hover:text-[var(--primary)] capitalize transition-colors duration-200"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="relative py-2 group">
                    <NavLink
                      to="/about-us"
                      className="px-[15px] py-[10px] block font-semibold text-lg text-gray-800 hover:text-[var(--primary)] capitalize transition-colors duration-200"
                    >
                      Company <i className="fa fa-angle-down ml-1 text-base" />
                    </NavLink>
                    <ul className="absolute top-full left-0 hidden group-hover:block bg-white border border-gray-100 py-1 w-[220px] shadow-lg z-50 rounded">
                      <li>
                        <NavLink
                          to="/about-us"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          FAQ Page
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/why-choose-us"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          Why Choose Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/team"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          Team
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="relative py-2 group">
                    <NavLink
                      to="/services"
                      className="px-[15px] py-[10px] block font-semibold text-lg text-gray-800 hover:text-[var(--primary)] capitalize transition-colors duration-200"
                    >
                      Services <i className="fa fa-angle-down ml-1 text-base" />
                    </NavLink>
                    <ul className="absolute top-full left-0 hidden group-hover:block bg-white border border-gray-100 py-1 w-[280px] shadow-lg z-50 rounded">
                      <li>
                        <NavLink
                          to="/services/web-mobile-development"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          Web &amp; Mobile App Development
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/ai-ml-solutions"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          AI &amp; Machine Learning
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/cybersecurity-services"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          Cybersecurity
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/networking-linux-systems"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          Networking &amp; Linux Systems
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/seo-optimization"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          SEO Optimization
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/graphic-design-branding"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          Graphic Design &amp; Branding
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/social-media-marketing"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          Social Media Marketing &amp; Strategy
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/digital-marketing-strategy"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          Digital Content &amp; Strategy
                        </NavLink>
                      </li>
                      <li className="border-t border-gray-100 mt-1">
                        <NavLink
                          to="/services"
                          className="px-[20px] py-[10px] block text-base font-semibold text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          View All Services →
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="relative py-2 group">
                    <NavLink
                      to="/mission"
                      className="px-[15px] py-[10px] block font-semibold text-lg text-gray-800 hover:text-[var(--primary)] capitalize transition-colors duration-200"
                    >
                      IT Solutions <i className="fa fa-angle-down ml-1 text-base" />
                    </NavLink>
                    <ul className="absolute top-full left-0 hidden group-hover:block bg-white border border-gray-100 py-1 w-[220px] shadow-lg z-50 rounded">
                      <li>
                        <NavLink
                          to="/mission"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          Mission &amp; Vision
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          Services
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/portfolio"
                          className="px-[20px] py-[10px] block text-base text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 transition-colors duration-200"
                        >
                          Portfolio
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="relative py-2 group">
                    <NavLink
                      to="/contact-us"
                      className="px-[15px] py-[10px] block font-semibold text-lg text-gray-800 hover:text-[var(--primary)] capitalize transition-colors duration-200"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`fixed inset-y-0 right-0 z-[1000] w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between ${
            isActive ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header of Mobile Drawer */}
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <NavLink to="/" onClick={() => setIsActive(false)}>
              <ItodoImage src="images/Logo.png" alt="SyscoNex Logo" className="max-h-[45px] w-auto block" />
            </NavLink>
            <button
              onClick={() => setIsActive(false)}
              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-red-500 focus:outline-none"
            >
              <i className="fa fa-times text-xl" />
            </button>
          </div>

          {/* Links list in Mobile Drawer */}
          <div className="flex-1 overflow-y-auto py-4 px-3">
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setIsActive(false)}
                  className="px-4 py-3 block font-semibold text-base text-gray-800 hover:text-[var(--primary)] rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Home
                </NavLink>
              </li>

              {/* Company Submenu Accordion */}
              <li>
                <button
                  onClick={() => toggleSubmenu("company")}
                  className="w-full px-4 py-3 flex justify-between items-center font-semibold text-base text-gray-800 hover:text-[var(--primary)] hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none"
                >
                  <span>Company</span>
                  <i className={`fa fa-angle-down transition-transform duration-200 ${activeSubmenu === "company" ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`pl-4 overflow-hidden transition-all duration-300 ${
                    activeSubmenu === "company" ? "max-h-[300px] opacity-100 mt-1" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="flex flex-col gap-1 list-none p-0 m-0 border-l-2 border-gray-100 pl-3">
                    <li>
                      <NavLink
                        to="/about-us"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        FAQ Page
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/why-choose-us"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        Why Choose Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/team"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        Team
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Services Submenu Accordion */}
              <li>
                <button
                  onClick={() => toggleSubmenu("services")}
                  className="w-full px-4 py-3 flex justify-between items-center font-semibold text-base text-gray-800 hover:text-[var(--primary)] hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none"
                >
                  <span>Services</span>
                  <i className={`fa fa-angle-down transition-transform duration-200 ${activeSubmenu === "services" ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`pl-4 overflow-hidden transition-all duration-300 ${
                    activeSubmenu === "services" ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="flex flex-col gap-1 list-none p-0 m-0 border-l-2 border-gray-100 pl-3">
                    <li>
                      <NavLink
                        to="/services/web-mobile-development"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        Web &amp; Mobile App Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/ai-ml-solutions"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        AI &amp; Machine Learning
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/cybersecurity-services"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        Cybersecurity
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/networking-linux-systems"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        Networking &amp; Linux Systems
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/seo-optimization"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        SEO Optimization
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/graphic-design-branding"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        Graphic Design &amp; Branding
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/social-media-marketing"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        Social Media Marketing &amp; Strategy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/digital-marketing-strategy"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        Digital Content &amp; Strategy
                      </NavLink>
                    </li>
                    <li className="border-t border-gray-100 mt-1">
                      <NavLink
                        to="/services"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm font-semibold text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        View All Services →
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              {/* IT Solutions Submenu Accordion */}
              <li>
                <button
                  onClick={() => toggleSubmenu("solutions")}
                  className="w-full px-4 py-3 flex justify-between items-center font-semibold text-base text-gray-800 hover:text-[var(--primary)] hover:bg-gray-50 rounded-lg transition-all duration-200 focus:outline-none"
                >
                  <span>IT Solutions</span>
                  <i className={`fa fa-angle-down transition-transform duration-200 ${activeSubmenu === "solutions" ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`pl-4 overflow-hidden transition-all duration-300 ${
                    activeSubmenu === "solutions" ? "max-h-[250px] opacity-100 mt-1" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="flex flex-col gap-1 list-none p-0 m-0 border-l-2 border-gray-100 pl-3">
                    <li>
                      <NavLink
                        to="/mission"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        Mission &amp; Vision
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/portfolio"
                        onClick={() => setIsActive(false)}
                        className="px-3 py-2 block text-sm text-gray-600 hover:text-[var(--primary)] rounded transition-colors duration-200"
                      >
                        Portfolio
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <NavLink
                  to="/contact-us"
                  onClick={() => setIsActive(false)}
                  className="px-4 py-3 block font-semibold text-base text-gray-800 hover:text-[var(--primary)] rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Backdrop Overlay */}
        {isActive && (
          <div
            className="fixed inset-0 z-[998] bg-black/50 backdrop-blur-xs md:hidden"
            onClick={() => setIsActive(false)}
          />
        )}
      </header>
    </>
  );
}

export default Header1;
