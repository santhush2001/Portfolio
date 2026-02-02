import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">Featured Projects</h2>
                    <div className="w-24 h-1 bg-[var(--primary-accent)] mx-auto mb-8 rounded-full"></div>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
                        A collection of my work in Web Development, Mobile Apps, AI, and IoT.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border-card)] hover:border-[var(--primary-accent)]/50 hover:shadow-xl hover:shadow-[var(--primary-accent)]/10 transition-all group flex flex-col"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors" />
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary-accent)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-2 py-1 bg-[var(--bg-card-hover)] text-[var(--text-secondary)] text-xs rounded-md border border-[var(--border-card)]">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 pt-4 border-t border-[var(--border-card)]">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                                        >
                                            <Github size={18} /> Code
                                        </a>
                                        {project.live !== "#" && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                                            >
                                                <ExternalLink size={18} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* GitHub All Projects Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: projects.length * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border-card)] hover:border-[var(--primary-accent)]/50 hover:shadow-xl hover:shadow-[var(--primary-accent)]/10 transition-all group flex flex-col justify-between h-full"
                    >
                        <div className="h-48 overflow-hidden relative bg-[var(--bg-card-hover)] flex items-center justify-center">
                            <Github size={64} className="text-[var(--text-secondary)]/50 group-hover:text-[var(--primary-accent)] transition-colors duration-500 transform group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)]/50 to-transparent" />
                        </div>

                        <div className="p-6 flex flex-col flex-1 text-center">
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary-accent)] transition-colors">
                                More Projects
                            </h3>
                            <p className="text-[var(--text-secondary)] text-sm mb-6">
                                Explore all my open-source contributions and other projects on GitHub.
                            </p>

                            <div className="mt-auto pt-4">
                                <a
                                    href="https://github.com/santhush2001?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary-accent)] text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-[var(--primary-accent)]/20"
                                >
                                    <Github size={20} /> View All Repositories
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
