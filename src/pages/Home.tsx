import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Globe, Cpu, Smartphone, Shield, Sparkles } from "lucide-react";
import profileImage from "../assets/IMG_1582.jpg";

export default function Home() {
    const cvUrl = new URL("../assets/Santhushcv.pdf", import.meta.url).toString();

    const floatingIcons = [
        { Icon: Code, delay: 0, x: 20, y: -20 },
        { Icon: Database, delay: 2, x: -30, y: 40 },
        { Icon: Smartphone, delay: 1, x: 40, y: 50 },
    ];

    const technologies = [
        "React", "Tailwind CSS", "Flutter", "Laravel", "Firebase", "Python", "OpenCV", "IoT", "Cybersecurity", "Git", "Figma"
    ];

    const expertise = [
        { icon: Globe, title: "Full-Stack Development", desc: "Responsive frontends and scalable product experiences built with React and modern web tools." },
        { icon: Cpu, title: "AI & Computer Vision", desc: "Practical AI solutions, automation, and intelligent systems using Python and OpenCV." },
        { icon: Shield, title: "Cybersecurity", desc: "Security-focused thinking with networking and digital safety fundamentals." },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" />

            <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="floating-orb left-[-8%] top-[10%] h-72 w-72 bg-sky-400/20" />
                    <div className="floating-orb right-[-6%] top-[18%] h-80 w-80 bg-violet-500/15" />
                    <div className="floating-orb bottom-[-10%] left-[20%] h-96 w-96 bg-cyan-400/10" />
                </div>

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)]/75 text-[var(--primary-accent)] text-xs font-semibold uppercase tracking-[0.28em] backdrop-blur-xl">
                            <Sparkles size={14} />
                            Software Developer
                        </div>

                        <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-black tracking-[-0.05em] text-[var(--text-primary)] leading-[0.95]">
                            Santhusha <span className="text-[var(--primary-accent)]">Lakshan</span>
                        </h1>

                        <div className="mt-6 mb-8">
                            <h3 className="text-xl md:text-2xl text-[var(--text-secondary)] font-light tracking-wide">
                                Full-stack developer building intelligent, secure, and user-focused digital experiences.
                            </h3>
                            <p className="mt-4 inline-flex rounded-full border border-[var(--primary-accent)]/20 bg-[var(--primary-accent)]/10 px-4 py-2 text-sm font-medium text-[var(--primary-accent)]">
                                Undergraduate at SIBA Campus, Pallekale
                            </p>
                        </div>

                        <p className="max-w-xl mx-auto lg:mx-0 text-[var(--text-secondary)] text-lg leading-relaxed">
                            I design and develop modern web and mobile solutions, explore AI-powered systems, and build projects that combine functionality, usability, and security.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                            <Link
                                to="/projects"
                                className="px-8 py-3 rounded-full bg-[var(--primary-accent)] hover:opacity-90 text-white font-semibold transition-all transform hover:-translate-y-0.5 flex items-center gap-2 shadow-[0_12px_30px_rgba(14,165,233,0.25)]"
                            >
                                View Projects <ArrowRight size={18} />
                            </Link>
                            <a
                                href={cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="px-8 py-3 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)]/70 text-[var(--text-primary)] font-semibold transition-all hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)]"
                            >
                                Download CV
                            </a>
                            <a
                                href="https://www.linkedin.com/in/santhusha-lakshan-31a272321/details/certifications/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)]/70 text-[var(--text-primary)] font-semibold transition-all hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)]"
                            >
                                View Certifications
                            </a>
                            <Link
                                to="/contact"
                                className="px-8 py-3 rounded-full border border-[var(--border-card)] bg-[var(--bg-card)]/70 text-[var(--text-primary)] font-semibold transition-all hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)]"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1 lg:order-2 flex justify-center hero-3d-shell"
                    >
                        <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
                            <div className="absolute inset-[12%] rounded-[2rem] bg-[var(--primary-accent)]/10 blur-[80px]" />
                            <div className="absolute inset-[6%] rounded-[2rem] border border-[var(--border-card)] bg-[var(--bg-card)]/60 backdrop-blur-xl rotate-3 shadow-[0_25px_80px_rgba(15,23,42,0.12)]" />
                            <div className="absolute inset-[9%] rounded-[2rem] border border-[var(--border-card)] bg-[var(--bg-card)]/80 backdrop-blur-xl -rotate-6 shadow-[0_25px_80px_rgba(15,23,42,0.12)]" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-[2rem] overflow-hidden border border-[var(--border-card)] shadow-[0_25px_80px_rgba(14,165,233,0.2)] bg-[var(--bg-card)]">
                                    <img
                                        src={profileImage}
                                        alt="Santhusha Lakshan"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {floatingIcons.map((item, index) => (
                                <motion.div
                                    key={index}
                                    animate={{
                                        y: [item.y, item.y - 20, item.y],
                                        rotate: [0, 6, -6, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: item.delay
                                    }}
                                    className="absolute z-20 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border-card)] bg-[var(--bg-card)]/80 shadow-[0_18px_40px_rgba(15,23,42,0.1)] text-[var(--primary-accent)] backdrop-blur-xl"
                                    style={{
                                        top: item.y > 0 ? undefined : '10%',
                                        bottom: item.y > 0 ? '12%' : undefined,
                                        left: item.x < 0 ? '4%' : undefined,
                                        right: item.x > 0 ? '4%' : undefined
                                    }}
                                >
                                    <item.Icon size={28} />
                                </motion.div>
                            ))}

                            <div className="absolute inset-[18%] rounded-full border border-[var(--primary-accent)]/20 animate-spin-slow" />
                            <div className="absolute inset-[8%] rounded-full border border-[var(--primary-accent)]/10" />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-secondary)]"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">Scroll</span>
                        <div className="w-px h-12 bg-[var(--border-card)] overflow-hidden">
                            <motion.div
                                animate={{ y: [-20, 40] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-full h-10 bg-[var(--primary-accent)] rounded-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="border-y border-[var(--border-card)] bg-[var(--bg-card)]/70 py-8 backdrop-blur-xl">
                <div className="flex w-max animate-marquee">
                    {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                        <span key={i} className="mx-8 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--text-secondary)]/55">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary-accent)]">Capabilities</p>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">What I build</h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {expertise.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="glass-panel project-card rounded-[1.75rem] p-8"
                            >
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary-accent)]/10 text-[var(--primary-accent)]">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-[var(--text-primary)]">{item.title}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
