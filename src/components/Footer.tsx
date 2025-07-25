"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
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
      // Navigate to home page
      router.push('/');
    }
  };

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
    }
  };

  return (
    <footer className="w-full border-t border-b-secondary bg-background py-4 bottom-0 left-0 z-50 shadow">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center md:items-center justify-between px-4 gap-4">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center w-full md:w-auto">
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
        {/* Menus Below */}
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
      </div>
    </footer>
  );
};

export default Footer; 