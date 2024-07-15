"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/public/logo.svg";

const links = [
  { href: "/current-affairs", label: "Current Affairs" },
  { href: "/resources", label: "Resources" },
];

const socialLinks = [
  { href: "https://www.facebook.com", icon: "/facebook.svg" },
  { href: "https://www.twitter.com", icon: "/x.svg" },
  { href: "https://www.instagram.com", icon: "/instagram2.svg" },
  { href: "https://www.linkedin.com", icon: "/linkedin2.svg" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const buttonClass =
    "rounded-full border-2 border-white bg-white font-semibold text-black hover:bg-white";

  return (
    <header className="mb-[20px] flex max-h-[65px] overflow-hidden border-b bg-black shadow-sm">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between p-4 md:w-[90%]">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="-ml-1 h-[45px] w-[100px] md:h-[55px]"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden space-x-4 md:flex">
          {links.map((link, index) => (
            <Link href="" key={index}>
              <Button className={buttonClass}>{link.label}</Button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <AlignJustify
            className="cursor-pointer text-white"
            aria-label="Open menu"
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed z-10 flex h-full w-full items-center justify-center bg-black/60 p-6 backdrop-blur-sm transition-all md:hidden"
          onClick={toggleMenu}
        >
          <div
            className="h-[320px] w-[350px] rounded-[4px] bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Menu */}
            <div className="mb-8 flex justify-end">
              <X
                className="cursor-pointer rounded-lg text-gray-800"
                aria-label="Close menu"
                onClick={toggleMenu}
              />
            </div>

            {/* Mobile Links */}
            <div className="mb-10 space-y-3">
              {links.map((link, index) => (
                <Link
                  href=""
                  key={index}
                  className="block rounded-[8px] border p-3 px-4 text-xl font-medium transition-colors hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-8 rounded-[12px] border-2 bg-black py-4 shadow-sm">
              {socialLinks.map(({ href, icon }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-ml-6"
                >
                  <Image
                    src={icon}
                    alt="Icon"
                    width={5}
                    height={5}
                    className="size-6"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
