import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "https://www.facebook.com", icon: "/facebook.svg" },
  { href: "https://www.twitter.com", icon: "/x.svg" },
  { href: "https://www.instagram.com", icon: "/instagram2.svg" },
  { href: "https://www.linkedin.com", icon: "/linkedin2.svg" },
];

const Footer = () => (
  <footer className="flex h-[150px] overflow-hidden border-t-2 bg-black shadow-sm">
    <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-around p-4 md:w-[90%] lg:flex-row lg:items-center lg:justify-between">
      <Link href="/" className="hidden lg:block">
        <Image src="/logo.svg" alt="Logo" width={110} height={40} />
      </Link>

      <p className="mx-auto text-center font-light text-gray-200">
        True Palestinian Story © 2024. <br className="lg:hidden" /> All rights
        reserved.
      </p>

      <div className="flex items-center justify-center space-x-4 text-gray-200 lg:justify-end">
        {socialLinks.map(({ href, icon }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={icon}
              alt="Icon"
              width={5}
              height={5}
              className="size-5"
            />
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
