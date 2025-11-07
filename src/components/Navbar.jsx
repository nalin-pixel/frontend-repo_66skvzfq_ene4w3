import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const bgOpacity = useTransform(scrollY, [0, 200], [0.1, 0.8]);
  const blur = useTransform(scrollY, [0, 200], [0, 12]);

  useEffect(() => {
    const handler = () => setIsOpen(false);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const MenuLink = ({ href, children }) => (
    <a
      href={href}
      className="px-3 py-2 text-sm md:text-[15px] font-medium text-white/90 hover:text-white transition-colors"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: bgOpacity.to((o) => `rgba(32,32,32,${o})`),
        backdropFilter: blur.to((b) => `saturate(140%) blur(${b}px)`),
      }}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-3">
        <a href="#home" className="text-white font-semibold tracking-wide text-lg md:text-xl">
          Nishtha Narang
        </a>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10 hover:bg-white/15 text-white"
          onClick={() => setIsOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="hidden md:flex items-center">
          <MenuLink href="#home">Home</MenuLink>
          <MenuLink href="#journey">Journey</MenuLink>
          <MenuLink href="#passions">Passions</MenuLink>
          <MenuLink href="#work">Work</MenuLink>
          <MenuLink href="#vision">Vision</MenuLink>
        </div>
        <a
          href="#connect"
          className="hidden md:inline-flex bg-gradient-to-r from-[#F4CE14] to-[#ffd84a] text-[#202020] font-semibold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(244,206,20,0.35)] hover:shadow-[0_0_28px_rgba(244,206,20,0.55)] transition-shadow"
        >
          Connect
        </a>
      </nav>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col">
          <MenuLink href="#home">Home</MenuLink>
          <MenuLink href="#journey">Journey</MenuLink>
          <MenuLink href="#passions">Passions</MenuLink>
          <MenuLink href="#work">Work</MenuLink>
          <MenuLink href="#vision">Vision</MenuLink>
          <a
            href="#connect"
            className="mt-2 inline-flex items-center justify-center bg-gradient-to-r from-[#F4CE14] to-[#ffd84a] text-[#202020] font-semibold px-4 py-2 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            Connect
          </a>
        </div>
      )}
    </motion.header>
  );
}
