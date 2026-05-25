
import React from 'react';
import type { CVData } from '../types';
import ProjectCard from './ProjectCard';
import { ArrowLeftIcon } from './icons';

interface ProjectsPageProps {
    data: CVData;
    onBack: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ data, onBack }) => {
    return (
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 animate-fade-in">
            <header className="flex items-center justify-between mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">
                    {data.projectsPage.title}
                </h1>
                <button
                    onClick={onBack}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-semibold no-print"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                    {data.projectsPage.backButton}
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.sections.projects.items.map(project => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
