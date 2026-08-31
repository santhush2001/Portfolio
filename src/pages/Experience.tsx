import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Experience() {
    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary-accent)]">Experience</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">Career journey</h2>
                    <div className="w-24 h-1 bg-[var(--primary-accent)] mx-auto mb-8 rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-[var(--border-card)] ml-3 md:ml-6 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[var(--bg-body)] border-2 border-[var(--primary-accent)]" />

                        <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-card)] hover:border-[var(--primary-accent)]/30 transition-all shadow-lg hover:shadow-[var(--primary-accent)]/10">
                            <div className="flex flex-col md:flex-row justify-between mb-4 md:items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">Software Developer Intern</h3>
                                    <a href="https://softmaster.lk/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-accent)] font-medium hover:underline text-lg">
                                        Softmaster Technologies (Pvt) Ltd.
                                    </a>
                                </div>
                                <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm mt-2 md:mt-0 bg-[var(--bg-body)] px-3 py-1 rounded-full border border-[var(--border-card)]">
                                    <Calendar size={14} />
                                    <span>Jul 2025 — Jan 2026</span>
                                </div>
                            </div>

                            <ul className="space-y-3 text-[var(--text-secondary)] mb-8 list-disc list-outside ml-4 marker:text-[var(--primary-accent)]">
                                <li>Developed and maintained web applications using React and Laravel while contributing to real client-facing features.</li>
                                <li>Worked on database structures, API integrations, and core application logic to support project functionality.</li>
                                <li>Participated in code reviews, debugging, and testing to improve performance, maintainability, and user experience.</li>
                                <li>Gained hands-on experience in full-stack development, collaborative engineering, and iterative product delivery.</li>
                                <li>Expanded my mobile development knowledge by exploring Flutter-based app development alongside web projects.</li>
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-[var(--bg-body)] text-[var(--text-secondary)] text-xs font-medium uppercase tracking-wider rounded-md border border-[var(--border-card)]">React</span>
                                <span className="px-3 py-1 bg-[var(--bg-body)] text-[var(--text-secondary)] text-xs font-medium uppercase tracking-wider rounded-md border border-[var(--border-card)]">Laravel</span>
                                <span className="px-3 py-1 bg-[var(--bg-body)] text-[var(--text-secondary)] text-xs font-medium uppercase tracking-wider rounded-md border border-[var(--border-card)]">MySQL</span>
                                <span className="px-3 py-1 bg-[var(--bg-body)] text-[var(--text-secondary)] text-xs font-medium uppercase tracking-wider rounded-md border border-[var(--border-card)]">Flutter</span>
                                <span className="px-3 py-1 bg-[var(--bg-body)] text-[var(--text-secondary)] text-xs font-medium uppercase tracking-wider rounded-md border border-[var(--border-card)]">Git</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
