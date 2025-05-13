import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    designation: "CTO @innovatech",
    image: image1,
    content:
      "Vertex Software Enterprise delivered exceptional results for our ERP system. Their team's technical expertise and attention to detail helped streamline our operations and significantly improved our workflow efficiency.",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    designation: "Founder @ecommhub",
    image: image2,
    content:
      "Working with Vertex was a game-changer for our e-commerce platform. They created a custom solution that perfectly addressed our unique business requirements and provided excellent support throughout the entire process.",
  },
  {
    id: 3,
    name: "James Rodriguez",
    designation: "Director @cloudsolve",
    image: image1,
    content:
      "The Vertex team demonstrated exceptional skill in developing our enterprise system. Their deep understanding of our industry challenges resulted in a solution that has transformed how we manage our business processes.",
  },
  {
    id: 4,
    name: "Emily Thompson",
    designation: "CEO @digitalbrand",
    image: image2,
    content:
      "Vertex Software Enterprise exceeded our expectations with their web application development. Their attention to detail, technical proficiency, and commitment to meeting deadlines made them the perfect technology partner.",
  },
];
