"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { name: "Create Page", href: "/form" },
  { name: "Examples", href: "#examples" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  
];

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home page and scroll to top after a short delay
      router.push('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  // Check if we're on the /fy page
  const isFyPage = pathname === '/fy';

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      
      if (pathname === '/') {
        // If on home page, just scroll to section
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else {
        // If on other page, navigate to home and then scroll
        router.push(`/#${id}`);
      }
    } else if (href === '/form') {
      // Clear any previously selected plan from localStorage when accessing form
      e.preventDefault();
      localStorage.removeItem('selectedPlan');
      router.push('/form');
    }
  };

  return (
    <footer className="w-full bg-gradient-to-r from-purple-900 to-gray-900 py-4 bottom-0 left-0 z-50 shadow relative">
      {/* Custom top border - transparent on sides, filled in middle */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-b-secondary to-transparent"></div>
      <div className={`mx-auto max-w-7xl flex flex-col md:flex-row items-center md:items-center ${isFyPage ? 'justify-center' : 'justify-between'} px-4 gap-4`}>
        {/* Logo and Copyright */}
        <div className={`flex flex-col items-center ${isFyPage ? 'w-full' : 'w-full md:w-auto'}`}>
          <div className="flex items-center gap-2 font-bold text-xl text-font-logo justify-center">
            <Link href="#" aria-label="Homepage" tabIndex={0} className="flex items-center gap-2 font-bold text-xl text-font-logo" onClick={handleLogoClick}>
              <img src="/logo.svg" alt="MyApp Logo" className="w-16 h-16 object-contain" />
              <span className="mt-3">MyApp</span>
              <span className="sr-only">Logo</span>
            </Link>
          </div>
          <div className="text-font-primary text-sm text-center mt-1">
            © 2025 <a href="#" onClick={handleLogoClick} className="text-menu-hover hover:underline hover:text-button-primary" aria-label="Scroll to top of page">MyApp</a>. All rights reserved.
          </div>
        </div>
        {/* Menus Below - Hidden on /fy page */}
        {!isFyPage && (
          <nav aria-label="Footer menu" className="flex items-center h-full">
            <ul className="flex gap-4 items-center h-full">
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
          </nav>
        )}
      </div>
    </footer>
  );
};

export default Footer; 