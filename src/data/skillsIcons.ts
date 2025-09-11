import { type IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiJsonwebtokens,
  SiGit,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

export const skillsIcons: { [key: string]: IconType } = {
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Express.js": SiExpress,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "Prisma ORM": SiPrisma,
  "JSON Web Tokens (JWT)": SiJsonwebtokens,
  "Git": SiGit,
  "VS Code": BiLogoVisualStudio,
  "Adobe Photoshop": SiAdobephotoshop,
  "Adobe Illustrator": SiAdobeillustrator,
  "Canva": SiCanva,
};
