
import React from 'react';
import type { Experience } from '../types';

interface ExperienceItemProps {
    job: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ job }) => {
    return (
        <div className="relative pl-8 experience-item">
            <div className="absolute left-0 top-1.5 w-4 h-4 bg-sky-500 rounded-full border-4 border-white dark:border-slate-900"></div>
            <div className="absolute left-[7px] top-5 h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>
            
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{job.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{job.period}</p>
            </div>
            <p className="text-md font-medium text-slate-600 dark:text-slate-300 mb-2">{job.company}</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                {job.points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceItem;
