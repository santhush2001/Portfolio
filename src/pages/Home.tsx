import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Globe, Cpu, Smartphone, Shield } from "lucide-react";
import profileImage from "../assets/images.jpeg";

export default function Home() {
    const floatingIcons = [
        { Icon: Code, delay: 0, x: 20, y: -20 },
        { Icon: Database, delay: 2, x: -30, y: 40 },
        { Icon: Smartphone, delay: 1, x: 40, y: 50 },
    ];

    const technologies = [
        "React", "Tailwind CSS", "Flutter", "Laravel", "Firebase", "Python", "OpenCV", "IoT", "Cybersecurity", "Git", "Figma"
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--primary-accent)]/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <h2 className="text-[var(--primary-accent)] font-medium text-lg mb-4 tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-8 h-[2px] bg-[var(--primary-accent)]"></span>
                            Hello, I'm
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-6 tracking-tight leading-tight">
                            Santhusha <br className="hidden lg:block" /> Lakshan
                        </h1>

                        <div className="mb-8">
                            <h3 className="text-xl md:text-2xl text-[var(--text-secondary)] font-light mb-2">
                                Software Developer <span className="opacity-50 mx-2">|</span> AI & Cybersecurity
                            </h3>
                            <p className="text-[var(--primary-accent)] text-lg font-medium bg-[var(--primary-accent)]/10 inline-block px-4 py-1 rounded-full border border-[var(--primary-accent)]/20">
                                Undergraduate at SIBA Campus, Pallekale
                            </p>
                        </div>

                        <p className="max-w-xl mx-auto lg:mx-0 text-[var(--text-secondary)] text-lg mb-10 leading-relaxed">
                            Crafting seamless digital experiences by bridging the gap between web, mobile, intelligent systems, and cybersecurity.
                            Turning complex ideas into elegant, functional software.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                            <Link
                                to="/projects"
                                className="px-8 py-3 rounded-full bg-[var(--primary-accent)] hover:opacity-90 text-white font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-[var(--primary-accent)]/20"
                            >
                                View Projects <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-3 rounded-full bg-transparent border border-[var(--text-secondary)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] text-[var(--text-secondary)] font-semibold transition-all transform hover:scale-105"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Main Profile Image Circle */}
                            <div className="w-full h-full rounded-full border-4 border-[var(--bg-card)] shadow-2xl overflow-hidden relative z-10 bg-[var(--bg-card)]">
                                {/* Placeholder Avatar */}
                                <img
                                    src={profileImage}
                                    alt="Santhusha Lakshan"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Elements */}
                            {floatingIcons.map((item, index) => (
                                <motion.div
                                    key={index}
                                    animate={{
                                        y: [item.y, item.y - 20, item.y],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: item.delay
                                    }}
                                    className="absolute z-20 p-4 bg-[var(--bg-card)] rounded-2xl shadow-xl border border-[var(--border-card)] text-[var(--primary-accent)]"
                                    style={{
                                        top: item.y > 0 ? undefined : '10%',
                                        bottom: item.y > 0 ? '10%' : undefined,
                                        left: item.x < 0 ? '0%' : undefined,
                                        right: item.x > 0 ? '0%' : undefined
                                    }}
                                >
                                    <item.Icon size={32} />
                                </motion.div>
                            ))}

                            {/* Orbit Circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[var(--primary-accent)]/20 rounded-full -z-10 animate-spin-slow" />
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--text-secondary)]"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
                        <div className="w-1 h-12 rounded-full bg-[var(--border-card)] overflow-hidden">
                            <motion.div
                                animate={{ y: [-20, 20] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-full h-1/2 bg-[var(--primary-accent)] rounded-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Tech Stack Marquee */}
            <section className="py-10 bg-[var(--bg-card)] border-y border-[var(--border-card)] overflow-hidden">
                <div className="flex w-max animate-marquee">
                    {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                        <span key={i} className="mx-8 text-2xl font-bold text-[var(--text-secondary)]/30 uppercase hover:text-[var(--primary-accent)] transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Services / What I Do */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-body)]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">What I Do</h2>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Combining technical expertise with creative problem solving.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Globe, title: "Web Development", desc: "Building responsive, modern web applications with React, Laravel and Tailwind CSS." },
                            { icon: Smartphone, title: "Mobile Apps", desc: "Creating cross-platform mobile experiences for iOS and Android using Flutter." },
                            { icon: Cpu, title: "AI Solutions", desc: "Developing intelligent systems using Python, OpenCV, and modern AI integrations." },
                            { icon: Shield, title: "Cybersecurity", desc: "Ensuring digital safety with ethical hacking, network security, and secure coding practices." }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="p-8 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-card)] hover:border-[var(--primary-accent)] transition-all hover:-translate-y-2 shadow-sm"
                            >
                                <div className="w-14 h-14 bg-[var(--primary-accent)]/10 rounded-xl flex items-center justify-center text-[var(--primary-accent)] mb-6">
                                    <service.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{service.title}</h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/about" className="text-[var(--primary-accent)] font-medium hover:underline inline-flex items-center gap-2">
                            Learn more about my skills <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
