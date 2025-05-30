"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Logo = () => (
  <a href="/" className="flex items-center gap-3">
    <Image
      src="/logo.png"
      alt="VSE Logo"
      width={55}
      height={40}
      className="hidden w-full dark:block"
    />
    <Image
      src="/logo.png"
      alt="VSE Logo"
      width={55}
      height={40}
      className="w-full dark:hidden"
    />
    <span className="font-Large text-lg text-black dark:text-white inline-block whitespace-nowrap">
      Vertex Software Enterprise
    </span>
  </a>
);

const HamburgerButton = ({ isOpen, onClick }) => (
  <button
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
    className="block xl:hidden"
    onClick={onClick}
  >
    <span className="relative block h-5.5 w-5.5 cursor-pointer">
      <span className="absolute right-0 block h-full w-full">
        <span
          className={twMerge(
            "relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-0 duration-200 ease-in-out dark:bg-white",
            !isOpen ? "w-full delay-300" : "w-0"
          )}
        ></span>
        <span
          className={twMerge(
            "relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white",
            !isOpen ? "delay-400 w-full" : "w-0"
          )}
        ></span>
        <span
          className={twMerge(
            "relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white",
            !isOpen ? "w-full delay-500" : "w-0"
          )}
        ></span>
      </span>
      <span className="du-block absolute right-0 h-full w-full rotate-45">
        <span
          className={twMerge(
            "absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white",
            !isOpen ? "h-0 delay-0" : "h-full"
          )}
        ></span>
        <span
          className={twMerge(
            "absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black delay-400 duration-200 ease-in-out dark:bg-white",
            !isOpen ? "h-0 delay-200" : "h-0.5"
          )}
        ></span>
      </span>
    </span>
  </button>
);

const SubmenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
        aria-expanded={isOpen}
      >
        {item.title}
        <span>
          <svg
            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </span>
      </button>

      <ul className={twMerge("dropdown", isOpen && "flex")}>
        {item.submenu.map((subItem, idx) => (
          <li key={idx} className="hover:text-primary">
            <Link href={subItem.path || "#"}>{subItem.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const Navigation = ({ isOpen }) => {
  const pathUrl = usePathname();
  
  return (
    <div
      className={twMerge(
        "invisible h-0 w-full items-center justify-center xl:visible xl:flex xl:h-auto xl:w-full",
        isOpen && "navbar visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-Solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
      )}
    >
      <nav className="flex items-center justify-center w-full xl:justify-center">
        <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-center xl:gap-10">
          {menuData.map((menuItem, key) => (
            <li key={key} className={menuItem.submenu ? "group relative" : ""}>
              {menuItem.submenu ? (
                <SubmenuItem item={menuItem} />
              ) : (
                <Link
                  href={menuItem.path || "#"}
                  className={twMerge(
                    "hover:text-primary",
                    pathUrl === menuItem.path && "text-primary"
                  )}
                >
                  {menuItem.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-7 flex items-center justify-center gap-6 xl:mt-0 xl:ml-6">
        <ThemeToggler />
      </div>
    </div>
  );
};

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  // Sticky menu handler
  useEffect(() => {
    const handleStickyMenu = () => {
      setStickyMenu(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={twMerge(
        "fixed left-0 top-0 z-99999 w-full py-7",
        stickyMenu && "bg-white py-4 shadow-sm transition duration-100 dark:bg-black"
      )}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-center px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <Logo />
          <HamburgerButton isOpen={navigationOpen} onClick={() => setNavigationOpen(!navigationOpen)} />
        </div>

        <Navigation isOpen={navigationOpen} />
      </div>
    </header>
  );
};

export default Header;