// ENUMS
export enum SocialLinkPlatform {
  LINKEDIN = "LINKEDIN",
  GITHUB = "GITHUB",
  WHATSAPP = "WHATSAPP",
}

export enum ProjectCategory {
  WEB_DEVELOPMENT = "WEB_DEVELOPMENT",
  GRAPHIC_DESIGN = "GRAPHIC_DESIGN",
}

// TYPES
export type User = {
  name: string;
  headline: string;
  description: string[];
  skills: string[];
  imageUrl: string;
  imageAltText: string;
  resume: string;
};

export type Contact = {
  email: string;
  linkedin: string;
  instagram: string;
  whatsapp: string;
  github: string;
};

export type Experience = {
  title: string;
  employmentType: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
};

export type Education = {
  school: string;
  degree: string;
  fieldOfStudy: string;
  grade?: string;
  startDate: string;
  endDate?: string;
};

export type ProjectImage = {
  url: string;
  altText: string;
};

export type Project = {
  category: ProjectCategory;
  title: string;
  description: string[];
  projectUrl?: string;
  sourceCodeUrl?: string;
  images: ProjectImage[];
  skills: string[];
};
