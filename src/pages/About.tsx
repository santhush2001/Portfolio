import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { Award } from "lucide-react";

export default function About() {
    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary-accent)]">About</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">Developer with a problem-solving mindset</h2>
                    <div className="w-24 h-1 bg-[var(--primary-accent)] mx-auto mb-8 rounded-full"></div>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl mx-auto">
                        I am a software developer focused on building practical digital solutions that combine full-stack development, AI-driven thinking, and cybersecurity awareness. My work spans web applications, mobile experiences, intelligent systems, and secure problem-solving.
                    </p>
                    <p className="mt-6 text-[var(--text-secondary)] text-lg leading-relaxed max-w-4xl mx-auto">
                        I enjoy transforming ideas into functional products, whether that means building responsive applications with React, exploring computer vision with Python, or designing simple but effective systems for real-world use. I am continuously learning, building, and refining my technical skills through projects, internships, and certifications.
                    </p>
                </motion.div>

                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-[var(--primary-accent)] mb-10 flex items-center gap-2">
                        Technical Skills
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-card)] hover:border-[var(--primary-accent)]/50 hover:bg-[var(--bg-card-hover)] transition-all group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-lg bg-[var(--primary-accent)]/10 text-[var(--primary-accent)] group-hover:bg-[var(--primary-accent)] group-hover:text-white transition-colors">
                                        <category.icon size={24} />
                                    </div>
                                    <h4 className="text-lg font-semibold text-[var(--text-primary)]">{category.title}</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-[var(--bg-body)] text-[var(--text-secondary)] text-sm rounded-full border border-[var(--border-card)] group-hover:border-[var(--primary-accent)]/30 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-[var(--primary-accent)] mb-10">
                        Education & Certifications
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                type: "Education",
                                title: "Bachelor of Science in Information Technology",
                                subtitle: "SIBA Campus",
                                items: ["Undergraduate Student", "https://siba.edu.lk/"],
                                color: "var(--primary-accent)"
                            },
                            {
                                type: "Education",
                                title: "St. Thomas College Matale",
                                subtitle: "Secondary Education",
                                items: [],
                                color: "var(--text-secondary)"
                            },
                            {
                                type: "Certification",
                                title: "Cisco Networking & Cybersecurity Certifications",
                                subtitle: "Cisco Networking Academy",
                                items: ["Junior Cybersecurity Analyst Career Path", "CCNA: Introduction to Networks", "Introduction to Cybersecurity", "Ethical Hacker", "IT Essentials"],
                                color: "var(--primary-accent)"
                            },
                            {
                                type: "Certification",
                                title: "AI & Programming Fundamentals",
                                subtitle: "Cisco / University of Moratuwa",
                                items: ["Introduction to Modern AI", "Python Essentials 1", "Python for Beginners"],
                                color: "var(--primary-accent)"
                            }
                        ].map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-card)] relative overflow-hidden flex flex-col h-full"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 text-[var(--text-primary)]">
                                    <Award size={100} />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-70" style={{ color: edu.color }}>
                                        {edu.type}
                                    </div>
                                    <h4 className="text-xl font-bold text-[var(--text-primary)] mb-1">{edu.title}</h4>
                                    <p className="text-[var(--text-secondary)] font-medium mb-4">{edu.subtitle}</p>

                                    {edu.items.length > 0 && (
                                        <ul className="space-y-2 mt-auto">
                                            {edu.items.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-[var(--text-secondary)]">
                                                    {item.startsWith("http") ? (
                                                        <a href={item} target="_blank" rel="noopener noreferrer" className="text-[var(--primary-accent)] hover:underline flex items-center gap-1">
                                                            Visit Website <Award size={14} />
                                                        </a>
                                                    ) : (
                                                        <>
                                                            <div className="w-1.5 h-1.5 bg-[var(--primary-accent)] rounded-full"></div>
                                                            {item}
                                                        </>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
