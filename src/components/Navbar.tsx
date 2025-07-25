"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { MenuItem } from "@/types";

const menuItems: MenuItem[] = [
  { name: "Examples", href: "#examples" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Create Document", href: "/form" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home page
      router.push('/');
    }
  };

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isMobile?: boolean) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      
      if (pathname === '/') {
        // If on home page, just scroll to section
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: isMobile ? "start" : "center" });
        }
      } else {
        // If on other page, navigate to home and then scroll
        router.push(`/#${id}`);
      }
    }
    // For regular navigation links, let the default behavior handle it
  };

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggleMenu();
    }
  };

  return (
    <nav className="w-fullbg-background border-b border-b-secondary">
      {/* Navbar Bar */}
      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-3 md:py-4">
        {/* Left: Logo */}
        <div className="flex items-center text-font-logo flex-shrink-0 w-[140px] md:w-[180px]">
          <Link href="#" aria-label="Homepage" tabIndex={0} className="flex items-center gap-2 font-bold text-xl text-font-logo" onClick={handleLogoClick}>
            <img src="/logo.svg" alt="MyApp Logo" className="w-16 h-16 object-contain" />
            <span className="mt-3">MyApp</span>
            <span className="sr-only">Logo</span>
          </Link>
        </div>
        {/* Center: Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  tabIndex={0}
                  aria-label={item.name}
                  className="text-font-primary font-medium hover:text-menu-hover px-2 py-1 rounded transition-colors"
                  onClick={e => handleMenuClick(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Spacer for symmetry */}
        <div className="hidden md:flex items-center flex-shrink-0 w-[140px] md:w-[180px]" />
        {/* Mobile Hamburger */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden flex items-center gap-2">
          <button
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            tabIndex={0}
            className="inline-flex items-center justify-center p-2 rounded"
            type="button"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-background border border-b-secondary">
          <ul className="flex flex-col items-center gap-4 py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  tabIndex={0}
                  aria-label={item.name}
                  className="text-font-primary font-medium hover:text-menu-hover px-2 py-1 rounded transition-colors block"
                  onClick={e => {
                    handleMenuClick(e, item.href, true);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 