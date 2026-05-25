
import React from 'react';
import type { Project } from '../types';
import { LinkIcon } from './icons';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-slate-50 dark:bg-slate-850 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 text-xs font-medium px-2.5 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
                {project.links && (
                    <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                        {project.links.map(link => (
                            <a 
                                key={link.label}
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 transition-colors"
                            >
                                <LinkIcon className="w-4 h-4" />
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
