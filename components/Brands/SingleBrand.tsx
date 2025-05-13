import React from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  // Determine the class based on the brand id
  const containerClass = id === 0.4
    ? "relative block h-25 w-[140px]"
    : "relative block h-25 w-[98px]";

  return (
    <a href={href} className={containerClass}>
      <Image
        className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
        src={image}
        alt={name}
        fill
      />
      <Image
        className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
        src={imageLight}
        alt={name}
        fill
      />
    </a>
  );
};

export default SingleBrand;
