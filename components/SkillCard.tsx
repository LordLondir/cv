
import React from 'react';

interface SkillCardProps {
    title: string;
    skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
    return (
        <div className="bg-slate-50 dark:bg-slate-850 p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-lg font-semibold text-sky-700 dark:text-sky-400 mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span key={skill} className="bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 text-xs font-medium px-2.5 py-1 rounded-full">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
