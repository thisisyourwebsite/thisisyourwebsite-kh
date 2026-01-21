import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowDown, ChevronRight, Briefcase, GraduationCap, Code, Projector, MessageCircle, Globe } from 'lucide-react';
import profilePhoto from './assets/kasimhanik.png';

const App = () => {
    const [activeLanguage, setActiveLanguage] = useState('tr');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Mock data based on user input
    const personalInfo = {
        name: "Kasım Hanik",
        title: "Dijital Kartvizit",
        location: "İstanbul, Türkiye",
        email: "kasim.hanik@example.com",
        phone: "+90 555 123 4567",
        linkedin: "custom-link",
        instagram: "custom-link",
        photo: profilePhoto,
        bio: {
            tr: "Profesyonel bir şekilde tanışmak isteyenler için dijital kartvizitim. Sade ve net tasarımıyla sizleri en iyi şekilde temsil ediyorum.",
            en: "My digital business card for those who want to meet me professionally. With its clean and simple design, I represent myself in the best way possible."
        }
    };

    const experience = [
        {
            id: 1,
            company: "Tech Solutions Inc.",
            position: "Senior Frontend Developer",
            period: "2020 - Present",
            description: {
                tr: "Modern web uygulamaları geliştirmek için React ve TailwindCSS kullanıyorum. Takım ile işbirliği yaparak kullanıcı deneyimini sürekli iyileştiriyorum.",
                en: "I develop modern web applications using React and TailwindCSS. I collaborate with my team to continuously improve user experience."
            }
        },
        {
            id: 2,
            company: "Digital Agency",
            position: "UI/UX Designer & Developer",
            period: "2018 - 2020",
            description: {
                tr: "Kullanıcı odaklı tasarım çözümleri sunuyor ve bu tasarımları kodlamakla görevliydim. Müşteri memnuniyeti oranını %30 artırdım.",
                en: "I provided user-centered design solutions and was responsible for coding these designs. I increased customer satisfaction rate by 30%."
            }
        },
        {
            id: 3,
            company: "Startup Studio",
            position: "Full Stack Developer",
            period: "2016 - 2018",
            description: {
                tr: "Yeni startup projelerinde hem frontend hem backend geliştirme sorumluluğundaydım. 5 farklı ürünün piyasaya sürülmesine katkıda bulundum.",
                en: "I was responsible for both frontend and backend development in new startup projects. I contributed to the launch of 5 different products."
            }
        }
    ];

    const education = [
        {
            id: 1,
            degree: "Bilgisayar Mühendisliği Lisans",
            institution: "Boğaziçi Üniversitesi",
            year: "2016",
            description: {
                tr: "Yazılım mühendisliği, veri yapıları ve algoritmalar üzerine yoğunlaşarak mezun oldum.",
                en: "Graduated with a focus on software engineering, data structures, and algorithms."
            }
        },
        {
            id: 2,
            degree: "Web Tasarım ve Geliştirme Sertifikası",
            institution: "Udemy",
            year: "2018",
            description: {
                tr: "Modern web teknolojileri ve kullanıcı deneyimi üzerine sertifika programı tamamladım.",
                en: "Completed certification program on modern web technologies and user experience."
            }
        }
    ];

    const skills = [
        { category: "Frontend", items: ["React", "TailwindCSS", "JavaScript", "HTML/CSS"] },
        { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Firebase"] },
        { category: "Tools", items: ["Git", "Webpack", "Figma", "VS Code"] },
        { category: "Soft Skills", items: ["Takım Çalışması", "Problem Çözme", "İletişim", "Zaman Yönetimi"] }
    ];

    const projects = [
        {
            id: 1,
            title: "E-Ticaret Platformu",
            description: {
                tr: "Kullanıcı dostu arayüzle online alışveriş deneyimi sunan e-ticaret platformu.",
                en: "E-commerce platform offering user-friendly interface for online shopping experience."
            },
            technologies: ["React", "Redux", "Node.js"],
            link: "#"
        },
        {
            id: 2,
            title: "Hastane Randevu Sistemi",
            description: {
                tr: "Hastaneler için randevu alma ve yönetim sistemi.",
                en: "Appointment booking and management system for hospitals."
            },
            technologies: ["Vue.js", "Firebase", "Bootstrap"],
            link: "#"
        },
        {
            id: 3,
            title: "Kişisel Finans Uygulaması",
            description: {
                tr: "Kullanıcıların harcamalarını takip edebileceği finans yönetimi uygulaması.",
                en: "Financial management app where users can track their expenses."
            },
            technologies: ["React Native", "SQLite", "Chart.js"],
            link: "#"
        }
    ];

    const translations = {
        tr: {
            nav: {
                home: "Anasayfa",
                experience: "Deneyim",
                education: "Eğitim",
                skills: "Beceriler",
                projects: "Projeler",
                contact: "İletişim",
                language: "EN"
            },
            hero: {
                subtitle: "Profesyonel Dijital Kartvizit",
                cta: "İletişime Geç"
            },
            sections: {
                experience: "Deneyim",
                education: "Eğitim",
                skills: "Beceriler",
                projects: "Projeler",
                contact: "İletişim"
            },
            contact: {
                heading: "Benimle İletişime Geçin",
                subheading: "Sorularınız veya projeleriniz hakkında konuşmak ister misiniz?",
                form: {
                    name: "Adınız",
                    email: "E-posta",
                    message: "Mesajınız",
                    send: "Gönder"
                }
            },
            footer: {
                copyright: "© 2026 Kasım Hanik. Tüm hakları saklıdır."
            }
        },
        en: {
            nav: {
                home: "Home",
                experience: "Experience",
                education: "Education",
                skills: "Skills",
                projects: "Projects",
                contact: "Contact",
                language: "TR"
            },
            hero: {
                subtitle: "Professional Digital Business Card",
                cta: "Contact Me"
            },
            sections: {
                experience: "Experience",
                education: "Education",
                skills: "Skills",
                projects: "Projects",
                contact: "Contact"
            },
            contact: {
                heading: "Get In Touch",
                subheading: "Do you have questions or want to discuss a project?",
                form: {
                    name: "Your Name",
                    email: "Email",
                    message: "Message",
                    send: "Send"
                }
            },
            footer: {
                copyright: "© 2026 Kasım Hanik. All rights reserved."
            }
        }
    };

    const t = translations[activeLanguage];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-2">
                                <img
                                    src={personalInfo.photo}
                                    alt="Kasım Hanik"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <span className="font-bold text-lg">{personalInfo.name}</span>
                            </div>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <button onClick={() => scrollToSection('home')} className="hover:text-indigo-600 transition-colors">
                                {t.nav.home}
                            </button>
                            <button onClick={() => scrollToSection('experience')} className="hover:text-indigo-600 transition-colors">
                                {t.nav.experience}
                            </button>
                            <button onClick={() => scrollToSection('education')} className="hover:text-indigo-600 transition-colors">
                                {t.nav.education}
                            </button>
                            <button onClick={() => scrollToSection('skills')} className="hover:text-indigo-600 transition-colors">
                                {t.nav.skills}
                            </button>
                            <button onClick={() => scrollToSection('projects')} className="hover:text-indigo-600 transition-colors">
                                {t.nav.projects}
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-600 transition-colors">
                                {t.nav.contact}
                            </button>
                            <button
                                onClick={() => setActiveLanguage(activeLanguage === 'tr' ? 'en' : 'tr')}
                                className="hover:text-indigo-600 transition-colors font-medium"
                            >
                                {t.nav.language}
                            </button>
                        </div>

                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-gray-200"
                        >
                            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                                <button onClick={() => scrollToSection('home')} className="text-left hover:text-indigo-600 transition-colors">
                                    {t.nav.home}
                                </button>
                                <button onClick={() => scrollToSection('experience')} className="text-left hover:text-indigo-600 transition-colors">
                                    {t.nav.experience}
                                </button>
                                <button onClick={() => scrollToSection('education')} className="text-left hover:text-indigo-600 transition-colors">
                                    {t.nav.education}
                                </button>
                                <button onClick={() => scrollToSection('skills')} className="text-left hover:text-indigo-600 transition-colors">
                                    {t.nav.skills}
                                </button>
                                <button onClick={() => scrollToSection('projects')} className="text-left hover:text-indigo-600 transition-colors">
                                    {t.nav.projects}
                                </button>
                                <button onClick={() => scrollToSection('contact')} className="text-left hover:text-indigo-600 transition-colors">
                                    {t.nav.contact}
                                </button>
                                <button
                                    onClick={() => setActiveLanguage(activeLanguage === 'tr' ? 'en' : 'tr')}
                                    className="text-left hover:text-indigo-600 transition-colors font-medium"
                                >
                                    {t.nav.language}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-24 pb-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/3">
                            <img
                                src={personalInfo.photo}
                                alt="Kasım Hanik"
                                className="w-full rounded-lg shadow-xl"
                            />
                        </div>
                        <div className="lg:w-2/3">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-800">
                                {personalInfo.name}
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                {personalInfo.title}
                            </p>
                            <p className="text-lg mb-8 leading-relaxed">
                                {personalInfo.bio[activeLanguage]}
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center space-x-2 text-gray-700">
                                    <MapPin size={20} />
                                    <span>{personalInfo.location}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-700">
                                    <Mail size={20} />
                                    <span>{personalInfo.email}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-700">
                                    <Phone size={20} />
                                    <span>{personalInfo.phone}</span>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                                    <Linkedin size={20} />
                                    <span>LinkedIn</span>
                                </a>
                                <a href={`https://${personalInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors">
                                    <Instagram size={20} />
                                    <span>Instagram</span>
                                </a>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
                                >
                                    <MessageCircle size={20} />
                                    <span>{t.hero.cta}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
                        {t.sections.experience}
                    </h2>
                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <div key={exp.id} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-indigo-700">{exp.position}</h3>
                                        <p className="text-gray-600">{exp.company}</p>
                                    </div>
                                    <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {exp.description[activeLanguage]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
                        {t.sections.education}
                    </h2>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={edu.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-indigo-700">{edu.degree}</h3>
                                        <p className="text-gray-600">{edu.institution}</p>
                                    </div>
                                    <span className="text-gray-500 mt-2 md:mt-0">{edu.year}</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {edu.description[activeLanguage]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
                        {t.sections.skills}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skillCategory, index) => (
                            <div key={index} className="bg-indigo-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center">
                                    <Code size={24} className="mr-2" />
                                    {skillCategory.category}
                                </h3>
                                <ul className="space-y-2">
                                    {skillCategory.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-gray-700 flex items-center">
                                            <ChevronRight size={16} className="mr-2 text-indigo-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
                        {t.sections.projects}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold mb-3 text-indigo-700">{project.title}</h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    {project.description[activeLanguage]}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
                                >
                                    {activeLanguage === 'tr' ? 'Detaylar' : 'Details'}
                                    <ChevronRight size={16} className="ml-1" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-4 text-center text-indigo-800">
                        {t.sections.contact}
                    </h2>
                    <p className="text-xl text-center mb-12 text-gray-600">
                        {t.contact.subheading}
                    </p>

                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/2">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t.contact.form.name}
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder={t.contact.form.name}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t.contact.form.email}
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder={t.contact.form.email}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        {t.contact.form.message}
                                    </label>
                                    <textarea
                                        rows="5"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder={t.contact.form.message}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                                >
                                    {t.contact.form.send}
                                </button>
                            </form>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="bg-indigo-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                                    {t.contact.heading}
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Mail size={20} className="text-indigo-600" />
                                        <span className="text-gray-700">{personalInfo.email}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Phone size={20} className="text-indigo-600" />
                                        <span className="text-gray-700">{personalInfo.phone}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <MapPin size={20} className="text-indigo-600" />
                                        <span className="text-gray-700">{personalInfo.location}</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="font-semibold mb-3 text-indigo-700">Sosyal Medya</h4>
                                    <div className="flex space-x-4">
                                        <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                                            <Linkedin size={24} />
                                        </a>
                                        <a href={`https://${personalInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                                            <Instagram size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm">
                            {t.footer.copyright}
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                                <Linkedin size={20} />
                            </a>
                            <a href={`https://${personalInfo.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to top button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-colors"
                aria-label="Scroll to top"
            >
                <ArrowDown size={24} className="rotate-180" />
            </button>
        </div>
    );
};

export default App;
