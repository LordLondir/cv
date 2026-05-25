
export type Language = 'cz' | 'en';

export interface HeaderData {
    name: string;
    title: string;
    location: string;
    email: string;
    linkedin: string;
    linkedin_url: string;
    avatar: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    points: string[];
}

export interface Project {
    title: string;
    description: string;
    thumbnail: string;
    technologies: string[];
    links?: { label: string; url: string; }[];
}

export interface Education {
    institution: string;
    degree?: string;
    period: string;
}

export interface CVData {
    header: HeaderData;
    sections: {
        summary: {
            title: string;
            content: string;
        };
        skills: {
            title: string;
            categories: SkillCategory[];
        };
        experience: {
            title: string;
            jobs: Experience[];
        };
        projects: {
            title: string;
            items: Project[];
            viewAll: string;
        };
        education: {
            title: string;
            items: Education[];
        };
    };
    projectsPage: {
        title: string;
        backButton: string;
    };
    controls: {
        toggleTheme: string;
        toggleLanguage: string;
        download: string;
    };
}
