import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Vertex Software Enterprise",

  // other metadata
  description: "Get support for your software solutions from Vertex Software Enterprise"
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
