"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import logo from "../../public/assets/logo-prescripto.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-doctors", label: "All Doctors" },
    { href: "/about-us", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white mx-auto container border-b-2">
      <div className="  flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="DocAppoint Logo"
            width={170}
            height={70}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 justify-between">
          <ul className="flex items-center gap-6 text-sm font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-[#5F6FFF] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/admin-panel">
            <Button variant="outline" className="text-xs font-medium">
              Admin Panel
            </Button>
          </Link>
        </nav>
        <Link href="/register">
          <Button className="bg-[#5F6FFF] text-white">Create Account</Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t shadow-lg"
          >
            <ul className="flex flex-col gap-5 p-5 font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#5F6FFF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link href="/admin-panel" onClick={() => setIsOpen(false)}>
                  <Button variant="bordered" className="w-full">
                    Admin Panel
                  </Button>
                </Link>
              </li>

              <li>
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <Button className="bg-[#5F6FFF] text-white w-full">
                    Create Account
                  </Button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
