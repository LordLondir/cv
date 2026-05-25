
import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { cvData } from './data/content';
import type { Language, CVData, Experience, Project, Education } from './types';
import Header from './components/Header';
import Section from './components/Section';
import SkillCard from './components/SkillCard';
import ExperienceItem from './components/ExperienceItem';
import ProjectsPage from './components/ProjectsPage';
import { SunIcon, MoonIcon, DownloadIcon, ArrowRightIcon, SpinnerIcon } from './components/icons';

const App: React.FC = () => {
    const [language, setLanguage] = useState<Language>('cz');
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme') as 'light' | 'dark';
        }
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });
    
    const [data, setData] = useState<CVData>(cvData[language]);
    const [view, setView] = useState<'cv' | 'projects'>('cv');
    const [isDownloading, setIsDownloading] = useState(false);

    useEffect(() => {
        setData(cvData[language]);
    }, [language]);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleLanguage = () => {
        setLanguage(language === 'cz' ? 'en' : 'cz');
    };

    const handleDownloadPdf = async () => {
        const cvElement = document.getElementById('cv-container');
        if (!cvElement) {
            console.error('CV container element not found');
            return;
        }

        setIsDownloading(true);
        document.body.classList.add('pdf-generation-mode');

        try {
            const canvas = await html2canvas(cvElement, {
                scale: 2,
                useCORS: true,
                ignoreElements: (element) => element.classList.contains('no-pdf'),
                backgroundColor: '#ffffff',
                scrollY: -window.scrollY,
                windowWidth: cvElement.scrollWidth,
                windowHeight: cvElement.scrollHeight
            });
            
            const imgData = canvas.toDataURL('image/png');
            
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            
            let heightLeft = pdfHeight;
            let position = 0;
            const pageHeight = pdf.internal.pageSize.getHeight();

            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
            heightLeft -= pageHeight;

            while (heightLeft > 0) {
                position = -pageHeight * (pdf.internal.getNumberOfPages());
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('Dominik_Rathousky_CV.pdf');

        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            setIsDownloading(false);
            document.body.classList.remove('pdf-generation-mode');
        }
    };

    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
            <main id="cv-container" className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl shadow-slate-300/30 dark:shadow-slate-950/50 transition-colors duration-300">
                <div className="fixed top-4 right-4 z-10 flex gap-2 no-print no-pdf">
                     <button
                        onClick={toggleLanguage}
                        className="w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-md"
                        aria-label={data.controls.toggleLanguage}
                    >
                        <span className="font-bold text-sm">{language === 'cz' ? 'EN' : 'CZ'}</span>
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-md"
                        aria-label={data.controls.toggleTheme}
                    >
                        {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                    </button>
                    {view === 'cv' && (
                        <button
                            onClick={handleDownloadPdf}
                            disabled={isDownloading}
                            className="w-10 h-10 flex items-center justify-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label={data.controls.download}
                        >
                           {isDownloading ? <SpinnerIcon className="w-5 h-5" /> : <DownloadIcon className="w-5 h-5" />}
                        </button>
                    )}
                </div>

                {view === 'cv' ? (
                    <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                        <Header headerData={data.header} />
                        
                        <Section title={data.sections.summary.title}>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{data.sections.summary.content}</p>
                        </Section>

                        <Section title={data.sections.skills.title}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {data.sections.skills.categories.map((category) => (
                                    <SkillCard key={category.title} title={category.title} skills={category.skills} />
                                ))}
                            </div>
                        </Section>

                        <Section title={data.sections.experience.title}>
                            <div className="space-y-8">
                                {data.sections.experience.jobs.map((job: Experience) => (
                                    <ExperienceItem key={job.company} job={job} />
                                ))}
                            </div>
                        </Section>

                        <Section title={data.sections.projects.title}>
                             <div className="space-y-4">
                                {data.sections.projects.items.slice(0, 2).map((project: Project) => (
                                    <div key={project.title}>
                                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{project.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 text-center">
                                <button 
                                    onClick={() => setView('projects')}
                                    className="inline-flex items-center gap-2 font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-300 transition-colors"
                                >
                                    {data.sections.projects.viewAll}
                                    <ArrowRightIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </Section>
                        
                        <Section title={data.sections.education.title}>
                            <div className="space-y-4">
                                {data.sections.education.items.map((edu: Education) => (
                                    <div key={edu.institution}>
                                        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{edu.institution}</h3>
                                        <p className="text-slate-500 dark:text-slate-400">{edu.degree ? `${edu.degree} | ` : ''}{edu.period}</p>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    </div>
                ) : (
                    <ProjectsPage data={data} onBack={() => setView('cv')} />
                )}
            </main>
        </div>
    );
};

export default App;
