import type { ComponentType } from 'react';
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiNestjs,
} from 'react-icons/si';
import { FaGlobe } from 'react-icons/fa6';

interface TechIconProps {
  tech: string | null;
  className?: string;
}

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  html: SiHtml5,
  css: SiCss,
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  sqlite: FaGlobe,
  mongodb: SiMongodb,
  mysql: SiMysql,
  docker: SiDocker,
  prisma: SiPrisma,
  socketio: SiSocketdotio,
  i18n: FaGlobe,
  javascript: SiJavascript,
  git: SiGit,
  nextjs: SiNextdotjs,
  nestjs: SiNestjs,
  vite: SiVite,
};

export default function TechIcon({ tech, className }: TechIconProps) {
  if (!tech) return null;
  const Icon = iconMap[tech];
  return Icon ? <Icon className={className} aria-hidden="true" /> : null;
}
