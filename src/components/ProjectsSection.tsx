import type { ContentLocale, Language } from '../types';
import { 
  SiPython, SiFastapi, SiMongodb, SiTypescript, SiVite, 
  SiNodedotjs, SiExpress, SiNextdotjs, SiPrisma, SiDocker,
  SiPostgresql, SiTailwindcss, SiJavascript 
} from 'react-icons/si';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';

interface ProjectsSectionProps {
  t: ContentLocale;
  language: Language;
}

const categoryGradients: Record<string, string> = {
  backend: 'from-blue-500 to-green-500',
  frontend: 'from-purple-500 to-pink-500',
  fullstack: 'from-orange-500 to-yellow-500',
};

const techConfig: Record<string, { color: string; bg: string; border: string; icon: React.ReactNode }> = {
  'Python': {
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: <SiPython className="w-3.5 h-3.5" />
  },
  'FastAPI': {
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: <SiFastapi className="w-3.5 h-3.5" />
  },
  'MongoDB': {
    color: 'text-green-700',
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: <SiMongodb className="w-3.5 h-3.5" />
  },
  'React 19': {
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    icon: <FaReact className="w-3.5 h-3.5" />
  },
  'TypeScript': {
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: <SiTypescript className="w-3.5 h-3.5" />
  },
  'Vite': {
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    icon: <SiVite className="w-3.5 h-3.5" />
  },
  'Node.js': {
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: <SiNodedotjs className="w-3.5 h-3.5" />
  },
  'Express': {
    color: 'text-gray-700',
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    icon: <SiExpress className="w-3.5 h-3.5" />
  },
  'Next.js': {
    color: 'text-gray-900',
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    icon: <SiNextdotjs className="w-3.5 h-3.5" />
  },
  'Prisma': {
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    icon: <SiPrisma className="w-3.5 h-3.5" />
  },
  'Docker': {
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: <SiDocker className="w-3.5 h-3.5" />
  },
  'PostgreSQL': {
    color: 'text-blue-800',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: <SiPostgresql className="w-3.5 h-3.5" />
  },
  'Tailwind CSS': {
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    icon: <SiTailwindcss className="w-3.5 h-3.5" />
  },
  'HTML5': {
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    icon: <FaHtml5 className="w-3.5 h-3.5" />
  },
  'CSS3': {
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: <FaCss3Alt className="w-3.5 h-3.5" />
  },
  'JavaScript': {
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    icon: <SiJavascript className="w-3.5 h-3.5" />
  },
};

function getCategoryLabel(t: ContentLocale, category: string): string {
  switch (category) {
    case 'backend':
      return t.projects.categoryBackend;
    case 'fullstack':
      return t.projects.categoryFullstack;
    case 'frontend':
      return t.projects.categoryFrontend;
    default:
      return category;
  }
}

function getProjectCategory(project: { id: string }): 'backend' | 'fullstack' | 'frontend' {
  const id = project.id.toLowerCase();
  if (id === 'caresync' || id === 'eduroad-api') return 'backend';
  if (id === 'esturoad' || id === 'invygo') return 'frontend';
  return 'fullstack';
}

export function ProjectsSection({ t, language }: ProjectsSectionProps) {
  const projects = t.projects.items;

  const categories: Array<'backend' | 'fullstack' | 'frontend'> = ['backend', 'frontend', 'fullstack'];

  const groupedProjects = categories.map((cat) => ({
    category: cat,
    label: getCategoryLabel(t, cat),
    projects: projects.filter((p) => getProjectCategory(p) === cat),
  }));

  return (
    <div className="bg-base-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold">{t.nav.projects}</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base-content/60">
          {t.projects.subtitle || t.focus}
        </p>

        <div className="space-y-16">
          {groupedProjects.map(({ category, label, projects: categoryProjects }) => {
            const gradient = categoryGradients[category];
            return (
              <section key={category} className="card bg-base-200 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-6">{label}</h3>
                  {categoryProjects.length === 0 ? (
                    <p className="text-center text-base-content/60 py-8">{t.projects.emptyStateText}</p>
                  ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
                      {categoryProjects.map((project, index) => {
                        const gradient = categoryGradients[category];
                        return (
                            <div
                              key={project.id}
                              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-80 md:h-96 border border-base-300/30"
                            >
                             {/* Gradient Border Wrapper */}
                             <div className={`rounded-2xl p-[2px] bg-gradient-to-br ${gradient} h-full`}>
                               <div className="rounded-2xl overflow-hidden bg-base-100 h-full relative">
                                 {/* Background Image */}
                                 <div className="relative h-full overflow-hidden">
                                   <img
                                     src={project.previewImage}
                                     alt={project.name}
                                       className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                     onError={(e) => {
                                       (e.target as HTMLImageElement).src = '/portfolio/img/project-placeholder.svg';
                                     }}
                                   />
                                   
                                     {/* Solid Color Overlay */}
                                     <div className="absolute inset-0 bg-base-100 opacity-0 group-hover:opacity-95 transition-opacity duration-300" />
                                   
                                    {/* Pre-Hover Title Badge */}
                                    <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 opacity-100 group-hover:opacity-0 transition-all duration-300 ease-out">
                                      <div className="badge badge-lg bg-base-100/95 backdrop-blur-md text-base-content font-bold shadow-xl border border-base-300/30 hover:shadow-2xl transition-shadow duration-300">
                                        {project.name}
                                      </div>
                                    </div>
                                 </div>
                                 
                                   {/* Hover Content */}
                                   <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                     {/* Title - Appears first */}
                                     <h3 className="text-lg md:text-xl font-bold text-base-content mb-1 md:mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                       {project.name}
                                     </h3>
                                     
                                     {/* Description - Appears second */}
                                     <p className="text-xs md:text-sm text-base-content/80 leading-relaxed mb-3 md:mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 ease-out">
                                       {project.summary}
                                     </p>
                                    
                                      {/* Tech Badges - Appears third */}
                                      <div className="flex flex-wrap gap-2 mb-3 md:mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150 ease-out">
                                        {project.facets.slice(0, 3).map((facet) => {
                                          const config = techConfig[facet] || {
                                            color: 'text-base-content',
                                            bg: 'bg-base-200',
                                            border: 'border-base-300',
                                            icon: null
                                          };
                                          
                                          return (
                                            <span 
                                              key={facet} 
                                              className={`badge badge-md ${config.bg} ${config.color} ${config.border} hover:scale-105 transition-all duration-200 font-semibold shadow-sm gap-1.5`}
                                            >
                                              {config.icon}
                                              {facet}
                                            </span>
                                          );
                                        })}
                                      </div>
                                    
                                     {/* Action Buttons - Appears last */}
                                     <div className="flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-200 ease-out">
                                       {project.links.repo && (
                                         <a
                                           href={project.links.repo}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="btn btn-outline btn-primary btn-sm gap-2 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
                                           onClick={(e) => e.stopPropagation()}
                                         >
                                           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.61.092.792-.225 1.638-.338 2.478-.342.84.004 1.686.117 2.478.342 1.602-.414 2.602-.092 2.602-.092.658 1.652.246 2.872.122 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                           </svg>
                                           <span className="hidden sm:inline font-semibold">{t.projects.repo}</span>
                                         </a>
                                       )}
                                       {project.links.demo && (
                                         <a
                                           href={project.links.demo}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="btn btn-primary btn-sm gap-2 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold bg-gradient-to-r from-primary to-primary-focus border-0"
                                           onClick={(e) => e.stopPropagation()}
                                         >
                                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                           </svg>
                                           <span className="hidden sm:inline font-semibold">{t.projects.demo}</span>
                                         </a>
                                       )}
                                     </div>
                                  </div>
                               </div>
                             </div>
                           </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
