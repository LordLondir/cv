
import type { CVData, Language } from '../types';

export const cvData: Record<Language, CVData> = {
    cz: {
        header: {
            name: "Dominik Rathouský",
            title: "Systémový administrátor & Full-stack vývojář",
            location: "Ostrava, Česká republika",
            email: "dominik.rathousky@gmail.com",
            linkedin: "linkedin.com/in/dominik-rathousky",
            linkedin_url: "https://www.linkedin.com/in/dominik-rathousky/",
            avatar: "https://placehold.co/128x128/e2e8f0/1e293b?text=DR"
        },
        sections: {
            summary: {
                title: "Profesní shrnutí",
                content: "Agilní IT profesionál s více než 6 lety zkušeností na pomezí systémové administrace a vývoje aplikací. Specializuji se na cloudové infrastruktury (Azure) a vývoj na platformách Oracle APEX a Nette. Aktivně integruji moderní AI technologie (Gemini, Google AI Studio) do vývojových procesů a automatizace. Zaměřuji se na návrh efektivních systémových architektur a moderní webové prezentace s využitím generativní AI."
            },
            skills: {
                title: "Technické dovednosti",
                categories: [
                    { title: "AI & Inovace", skills: ["Prompt Engineering (Gemini, Google AI Studio)", "Implementace AI do workflow"] },
                    { title: "Vývoj", skills: ["Oracle APEX", "Nette Framework", "SQL", "Oracle DB", "PHP", "HTML", "CSS", "JavaScript"] },
                    { title: "Infrastruktura", skills: ["Microsoft Azure", "Linux servers (Ubuntu)", "SSH", "CI/CD", "Git", "Návrh systémů"] },
                    { title: "Platformy", skills: ["Magento", "Kentico eCommerce", "SAP", "Jira", "OnePim"] }
                ]
            },
            experience: {
                title: "Pracovní zkušenosti",
                jobs: [
                    {
                        title: "Systémový administrátor & Vývojář",
                        company: "Brighten Digital",
                        period: "11/2022 – Současnost",
                        points: [
                            "Projekt Timmy Cloud: Vývoj a správa aplikace na frameworku Nette, včetně realizace kritických upgradů a deploymentu na vývojové servery.",
                            "Oracle DB Specialist (Košík): Správa a optimalizace komplexní databáze a vývoj v Oracle APEX pro klienta Košík.",
                            "Cloud & DevOps: Správa systémů v prostředí Azure a Linux; implementace CI/CD procesů pro zefektivnění nasazování kódu."
                        ]
                    },
                    {
                        title: "Web Content Manager",
                        company: "FAST ČR a.s.",
                        period: "01/2020 – 11/2022",
                        points: [
                            "Vedení týmu: Řízení a mentoring týmu 14 editorů a copywriterů pro klíčové e-commerce portály.",
                            "UI/UX & Správa obsahu: Správa portfolia webů (Sencor, Planeo, Fieldmann) v systémech Kentico a SAP."
                        ]
                    }
                ]
            },
            projects: {
                title: "Projekty a inovace",
                viewAll: "Zobrazit všechny projekty",
                items: [
                    { 
                        title: "ToJeŽrádlo", 
                        description: "Lead Developer & Architekt – kompletní end-to-end realizace aplikace od návrhu infrastruktury po realizaci.",
                        thumbnail: "https://placehold.co/600x400/0ea5e9/ffffff?text=ToJeŽrádlo",
                        technologies: ["Nette", "PHP", "Oracle DB", "Azure", "JavaScript"],
                        links: [{ label: "Live Demo", url: "#" }]
                    },
                    { 
                        title: "AI-Powered Resume Page", 
                        description: "Návrh a realizace interaktivní webové prezentace životopisu s využitím modelů Gemini a Google AI Studio.",
                        thumbnail: "https://placehold.co/600x400/172033/ffffff?text=AI+Resume",
                        technologies: ["React", "TypeScript", "Tailwind CSS", "Gemini API"],
                        links: [{ label: "GitHub", url: "#" }]
                    },
                    {
                        title: "Timmy Cloud Platforma",
                        description: "Interní platforma pro správu a deployment aplikací v rámci Brighten Digital, postavená na Nette frameworku.",
                        thumbnail: "https://placehold.co/600x400/4f46e5/ffffff?text=TimmyCloud",
                        technologies: ["Nette", "CI/CD", "Linux", "Azure DevOps"],
                    }
                ]
            },
            education: {
                title: "Vzdělání",
                items: [
                    { institution: "České vysoké učení technické v Praze (ČVUT)", period: "2016 – 2017" },
                    { institution: "SPŠE a Gymnázium V Úžlabině", degree: "Elektrotechnika", period: "2012 – 2016" }
                ]
            }
        },
        projectsPage: {
            title: "Moje Projekty",
            backButton: "Zpět na životopis"
        },
        controls: {
            toggleTheme: "Přepnout téma",
            toggleLanguage: "Přepnout jazyk",
            download: "Stáhnout PDF"
        }
    },
    en: {
        header: {
            name: "Dominik Rathouský",
            title: "Systems Administrator & Full-stack Developer",
            location: "Ostrava, Czech Republic",
            email: "dominik.rathousky@gmail.com",
            linkedin: "linkedin.com/in/dominik-rathousky",
            linkedin_url: "https://www.linkedin.com/in/dominik-rathousky/",
            avatar: "https://placehold.co/128x128/e2e8f0/1e293b?text=DR"
        },
        sections: {
            summary: {
                title: "Professional Summary",
                content: "Agile IT professional with over 6 years of experience bridging system administration and application development. Specialized in Azure cloud infrastructures and building robust systems on Oracle APEX and Nette platforms. Actively integrating modern AI technologies (Gemini, Google AI Studio) into development workflows and automation. Focused on designing efficient system architectures and leveraging generative AI for modern web presentations."
            },
            skills: {
                title: "Technical Skills",
                categories: [
                    { title: "AI & Innovation", skills: ["Prompt Engineering (Gemini, Google AI Studio)", "AI workflow implementation"] },
                    { title: "Development", skills: ["Oracle APEX", "Nette Framework", "SQL", "Oracle DB", "PHP", "HTML", "CSS", "JavaScript"] },
                    { title: "Platforms", skills: ["Magento", "Kentico eCommerce", "SAP", "Jira", "OnePim"] }
                ]
            },
            experience: {
                title: "Work Experience",
                jobs: [
                    {
                        title: "Systems Administrator & Developer",
                        company: "Brighten Digital",
                        period: "11/2022 – Present",
                        points: [
                            "Timmy Cloud Project: Leading the development and management of a Nette-based application, including critical upgrades and deployment to development servers.",
                            "Oracle DB Specialist (Košík): Management and optimization of complex database environments and development in Oracle APEX for 'Košík' client.",
                            "Cloud & DevOps: Administering Azure and Linux environments; implementing CI/CD pipelines to streamline code deployment."
                        ]
                    },
                    {
                        title: "Web Content Manager",
                        company: "FAST ČR a.s.",
                        period: "01/2020 – 11/2022",
                        points: [
                            "Team Leadership: Managed and mentored a team of 14 editors and copywriters for key e-commerce portals.",
                            "UI/UX & Content Management: Oversight of web portfolios (Sencor, Planeo, Fieldmann) within Kentico and SAP systems."
                        ]
                    }
                ]
            },
            projects: {
                title: "Projects & Innovation",
                viewAll: "View All Projects",
                items: [
                    { 
                        title: "ToJeŽrádlo", 
                        description: "Lead Developer & Architect – end-to-end application delivery from infrastructure design to final implementation.",
                        thumbnail: "https://placehold.co/600x400/0ea5e9/ffffff?text=ToJeŽrádlo",
                        technologies: ["Nette", "PHP", "Oracle DB", "Azure", "JavaScript"],
                        links: [{ label: "Live Demo", url: "#" }]
                    },
                    { 
                        title: "AI-Powered Resume Page", 
                        description: "Design and implementation of an interactive web resume using Gemini models and Google AI Studio.",
                        thumbnail: "https://placehold.co/600x400/172033/ffffff?text=AI+Resume",
                        technologies: ["React", "TypeScript", "Tailwind CSS", "Gemini API"],
                        links: [{ label: "GitHub", url: "#" }]
                    },
                    {
                        title: "Timmy Cloud Platform",
                        description: "Internal platform for application management and deployment at Brighten Digital, built on the Nette framework.",
                        thumbnail: "https://placehold.co/600x400/4f46e5/ffffff?text=TimmyCloud",
                        technologies: ["Nette", "CI/CD", "Linux", "Azure DevOps"],
                    }
                ]
            },
            education: {
                title: "Education",
                items: [
                    { institution: "Czech Technical University in Prague (CTU)", period: "2016 – 2017" },
                    { institution: "Secondary Technical School of Electrical Engineering", period: "2012 – 2016" }
                ]
            }
        },
        projectsPage: {
            title: "My Projects",
            backButton: "Back to Resume"
        },
        controls: {
            toggleTheme: "Toggle theme",
            toggleLanguage: "Toggle language",
            download: "Download PDF"
        }
    }
};
