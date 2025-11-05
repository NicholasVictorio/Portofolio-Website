"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#121212]/70 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6">

        <Link href="/" className="text-2xl md:text-3xl text-white font-semibold">
          NV
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link
            href="#About"
            className="text-zinc-300 hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="#Projects"
            className="text-zinc-300 hover:text-white transition"
          >
            Projects
          </Link>
          <Link
            href="#Contact"
            className="text-zinc-300 hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {navbarOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center py-5 space-y-4">
            <li>
              <Link
                href="#About"
                className="text-zinc-300 hover:text-white transition"
                onClick={() => setNavbarOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#Projects"
                className="text-zinc-300 hover:text-white transition"
                onClick={() => setNavbarOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#Contact"
                className="text-zinc-300 hover:text-white transition"
                onClick={() => setNavbarOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
