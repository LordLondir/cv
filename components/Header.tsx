
import React from 'react';
import type { HeaderData } from '../types';
import { LocationIcon, MailIcon, LinkedinIcon } from './icons';

interface HeaderProps {
    headerData: HeaderData;
}

const Header: React.FC<HeaderProps> = ({ headerData }) => {
    return (
        <header className="flex flex-col sm:flex-row items-center gap-8 mb-10">
            <img 
                src={headerData.avatar} 
                alt={headerData.name} 
                className="w-32 h-32 rounded-full shadow-lg object-cover ring-4 ring-white dark:ring-slate-900" 
            />
            <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 dark:text-white tracking-tight">{headerData.name}</h1>
                <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-sky-600 dark:text-sky-400">{headerData.title}</h2>
                <div className="mt-4 flex flex-wrap justify-center sm:justify-start items-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                        <LocationIcon className="w-4 h-4" />
                        <span>{headerData.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MailIcon className="w-4 h-4" />
                        <a href={`mailto:${headerData.email}`} className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{headerData.email}</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <LinkedinIcon className="w-4 h-4" />
                        <a href={headerData.linkedin_url} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{headerData.linkedin}</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
