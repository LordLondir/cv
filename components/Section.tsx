
import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="mb-10 section-container">
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-6 pb-2 border-b-2 border-slate-200 dark:border-slate-700">{title}</h2>
            {children}
        </section>
    );
};

export default Section;
