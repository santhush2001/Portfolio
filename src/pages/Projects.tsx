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
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary-accent)]">Portfolio</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">Featured Projects</h2>
                    <div className="w-24 h-1 bg-[var(--primary-accent)] mx-auto mb-8 rounded-full"></div>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
                        Real projects built across web, AI, mobile, and cybersecurity-focused problem solving.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="project-card glass-panel rounded-[1.75rem] overflow-hidden flex flex-col group"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent" />
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary-accent)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="tech-pill rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide">
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
                                                className="flex items-center gap-2 text-sm font-medium text-[var(--primary-accent)] hover:opacity-80 transition-colors"
                                            >
                                                <ExternalLink size={18} /> Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: projects.length * 0.1 }}
                        viewport={{ once: true }}
                        className="project-card glass-panel rounded-[1.75rem] overflow-hidden group flex flex-col justify-between h-full"
                    >
                        <div className="flex h-52 items-center justify-center bg-gradient-to-br from-[var(--primary-accent)]/10 via-transparent to-violet-500/10">
                            <Github size={64} className="text-[var(--text-secondary)]/50 group-hover:text-[var(--primary-accent)] transition-colors duration-500" />
                        </div>

                        <div className="p-6 flex flex-col flex-1 text-center">
                            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary-accent)] transition-colors">
                                More Projects
                            </h3>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                                Explore the rest of my repositories and open-source work on GitHub.
                            </p>

                            <div className="mt-auto pt-4">
                                <a
                                    href="https://github.com/santhush2001?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary-accent)] text-white font-semibold hover:opacity-90 transition-all shadow-[0_12px_30px_rgba(14,165,233,0.25)]"
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
