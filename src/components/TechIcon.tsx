import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiGit,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiPrisma,
  SiMongodb,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiSocketdotio,
  SiGithub,
  SiVercel,
  SiNetlify,
} from 'react-icons/si';
import { FaJava, FaPython } from 'react-icons/fa';

interface TechIconProps {
  icon: string;
  size?: number;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  git: SiGit,
  typescript: SiTypescript,
  react: SiReact,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  nextjs: SiNextdotjs,
  prisma: SiPrisma,
  mongodb: SiMongodb,
  docker: SiDocker,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  socketio: SiSocketdotio,
  github: SiGithub,
  vercel: SiVercel,
  netlify: SiNetlify,
  java: FaJava,
  python: FaPython,
};

const colorMap: Record<string, string> = {
  orange: 'text-orange-500',
  blue: 'text-blue-500',
  amber: 'text-amber-500',
  slate: 'text-slate-600',
  indigo: 'text-indigo-500',
  cyan: 'text-cyan-500',
  green: 'text-green-600',
  forest: 'text-green-700',
};

export function TechIcon({ icon, size = 32, className }: TechIconProps & { className?: string }) {
  const Icon = iconMap[icon];
  if (!Icon) return <div className="h-8 w-8 rounded bg-base-300" />;

  return <Icon size={size} className={className || colorMap[icon] || 'text-base-content'} />;
}
