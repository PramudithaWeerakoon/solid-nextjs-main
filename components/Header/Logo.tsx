"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <a href="/" className="flex items-center gap-3">
    <Image
      src="/vse-logo.png"
      alt="VSE Logo"
      width={80}
      height={40}
      className="hidden w-full dark:block"
    />    <Image
      src="/vse-logo.png"
      alt="VSE Logo"
      width={80}
      height={40}
      className="w-full dark:hidden"
    />
    <span className="font-medium text-xs text-black dark:text-white inline-block whitespace-nowrap">
      Vertex Software Enterprise
    </span>
  </a>
);

export default Logo;
