import { type Project, ProjectCategory } from "@/types/data";

export const projects: Project[] = [
  // COMPUTEPEDIA
  {
    category: ProjectCategory.WEB_DEVELOPMENT,
    title: "Computepedia",
    description: [
      "Computepedia is a full-stack project designed as a case study for building a modern web application from scratch. This project simulates a simple online store where authenticated users can manage a catalog of products and categories.",
      "The main goal of this project is to implement a clean, separated architecture (MVC on the backend, centralized state management on the frontend) and essential features like API security and a reactive user experience.",
    ],
    sourceCodeUrl: "https://github.com/dimassmaulanaaa/pern-computepedia",
    images: [
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/computepedia-home.png",
        altText: "Computepedia Home Page project picture",
      },
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/computepedia-edit-product.png",
        altText: "Computepedia Edit Product Page project picture",
      },
    ],
    skills: [
      "JavaScript",
      "Express.js",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "JSON Web Tokens (JWT)",
      "VS Code",
      "Git",
    ],
  },
  // NEXOCIAL
  {
    category: ProjectCategory.WEB_DEVELOPMENT,
    title: "Nexocial",
    description: [
      "Nexocial is a full-stack social media application built from the ground up using the Next.js App Router. It serves as a comprehensive case study for modern web development, demonstrating how to integrate a variety of powerful tools to create a seamless and performant user experience.",
      "This project features a robust backend powered by Prisma and a serverless Postgres database from Neon. This strength is complemented by a reactive frontend built with a combination of Server and Client Components, including a WebSocket implementation to deliver instant, real-time notifications to users.",
    ],
    projectUrl: "https://nexocial.vercel.app/",
    sourceCodeUrl: "https://github.com/dimassmaulanaaa/nextjs-nexocial",
    images: [
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/nexocial-home.png",
        altText: "Nexocial Home Page project picture",
      },
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/nexocial-notifications.png",
        altText: "Nexocial Notifications Page project picture",
      },
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/nexocial-profile.png",
        altText: "Nexocial Profile Page project picture",
      },
    ],
    skills: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "VS Code",
      "Git",
    ],
  },
  // ETTASHANE
  {
    category: ProjectCategory.GRAPHIC_DESIGN,
    title: "Ettashane",
    description: [
      "Ettashane enters the goat milk market as a newcomer, with the main challenge of creating a brand image that is modern, fresh, and distinct from similar products. The primary goal is to educate the audience about the product's benefits and build trust from the outset.",
      "I designed a strategic and cohesive visual identity for social media and digital advertisements. The focus was on visual cleanliness and authentic storytelling. This design aims to differentiate the brand and create a strong foundation for future marketing campaigns.",
    ],
    projectUrl: "https://www.instagram.com/ettashane.official",
    images: [
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/ettashane-social-media.png",
        altText: "Ettashane Social Media project picture",
      },
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/ettashane-marketing.png",
        altText: "Ettashane Marketing project picture",
      },
    ],
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
  },
  // HERBADYNE
  {
    category: ProjectCategory.GRAPHIC_DESIGN,
    title: "Herbadyne",
    description: [
      "This project focuses on the visual redesign of the herbal toothpaste product, Herbadyne, on e-commerce platform. The goal is to enhance visual appeal, build a consistent brand image that conveys a natural and healthy feel, and make it easier for consumers to find product information through a clean layout.",
      "The visual redesign features herbal inspired colors, minimalist typography, and a professional, interactive product gallery. Concise, persuasive short descriptions were also added to be more convincing. The outcome is expected to boost consumer trust, increase purchase interest, and strengthen Herbadyne's market position.",
    ],
    images: [
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/herbadyne-e-commerce.png",
        altText: "Herbadyne E-Commerce project picture",
      },
    ],
    skills: ["Adobe Photoshop"],
  },
  // BENEFA
  {
    category: ProjectCategory.GRAPHIC_DESIGN,
    title: "Benefa",
    description: [
      "This project focuses on redesigning the visual appearance of Benefa skincare's e-commerce store. The scope of work includes creating engaging store banners and product visuals that align with the brand's identity. The goal is to enhance its appeal, professionalism, and premium image as a natural skincare line.",
      "In the design, I incorporated elegant elements that reflect a sophisticated and modern feel. The banners were designed to be communicative and attract visitors, while the product visuals were updated to be more consistent, modern, and persuasive in driving consumer purchase interest.",
    ],
    images: [
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/benefa-banner.png",
        altText: "Benefa Banner project picture",
      },
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/benefa-e-commerce.png",
        altText: "Benefa E-Commerce project picture",
      },
    ],
    skills: ["Adobe Photoshop", "Canva"],
  },
  // Miss Clean
  {
    category: ProjectCategory.GRAPHIC_DESIGN,
    title: "Miss Clean",
    description: [
      "This project involves designing e-commerce store banners for Miss Clean, a brand that provides cleaning products. The goal is to build a professional, appealing, and easily recognizable store display for consumers.",
      "In the design process, I used bright, fresh, and communicative elements to reflect a sense of cleanliness. The banners are designed with a consistent visual style, showcasing Miss Clean's brand identity more prominently to boost customer trust and attract buyers on the e-commerce platform.",
    ],
    images: [
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/miss-clean-banner.png",
        altText: "Miss Clean Banner project picture",
      },
    ],
    skills: ["Adobe Photoshop", "Adobe Illustrator"],
  },
  // JOTHAMILK
  {
    category: ProjectCategory.GRAPHIC_DESIGN,
    title: "Jothamilk",
    description: [
      "This project focused on redesigning the e-commerce store's appearance for Jothamilk, a healthy etawa goat milk product. The scope of work included creating communicative store banners and updating product visuals to be more appealing and easily recognizable to consumers.",
      "In the design, I emphasized a natural and healthy feel through a combination of clean colors and clear typography. Banners were arranged to enhance the store's appeal, while product visuals were updated to align with Jothamilk's brand identity, which highlights its quality and benefits.",
    ],
    images: [
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/jothamilk-banner.png",
        altText: "Jothamilk Banner project picture",
      },
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/jothamilk-e-commerce.png",
        altText: "Jothamilk E-Commerce project picture",
      },
    ],
    skills: ["Adobe Photoshop"],
  },
  // TEH DAUN SENNA
  {
    category: ProjectCategory.GRAPHIC_DESIGN,
    title: "Teh Daun Senna",
    description: [
      "This project focuses on the visual design of a Senna Leaf Tea product for e-commerce. Known as a natural weight loss tea, the design highlights its health benefits and a healthy lifestyle.",
      "The visuals were created with fresh green tones and modern typography to make the information clear and appealing. Graphic elements, such as leaf illustrations and product packaging, were enhanced to build a natural image, while also increasing consumer appeal and trust on the e-commerce platform.",
    ],
    images: [
      {
        url: "https://sejdaw0pnkrbbizs.public.blob.vercel-storage.com/teh-daun-senna-e-commerce.png",
        altText: "Teh Daun Senna E-Commerce project picture",
      },
    ],
    skills: ["Adobe Photoshop", "Adobe Illustrator"],
  },
];
