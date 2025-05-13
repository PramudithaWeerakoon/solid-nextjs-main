import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Vertex Software Enterprise",

  // other metadata
  description: "Contact Vertex Software Enterprise for custom software solutions including web development, mobile apps, and enterprise systems"
};

const ContactPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default ContactPage;