import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        alert("Thank you for your message! This is a demo form.");
        setFormState({ name: "", email: "", message: "" });
    };

    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">Get In Touch</h2>
                    <div className="w-24 h-1 bg-[var(--primary-accent)] mx-auto mb-8 rounded-full"></div>
                    <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-[var(--bg-card)] rounded-xl text-[var(--primary-accent)] border border-[var(--border-card)]">
                                <Mail size={28} />
                            </div>
                            <div>
                                <h3 className="text-[var(--text-primary)] font-bold text-xl mb-2">Email Me</h3>
                                <p className="text-[var(--text-secondary)] mb-2">I'll get back to you within 24 hours.</p>
                                <a href="mailto:contact@example.com" className="text-[var(--primary-accent)] hover:text-[var(--primary-accent)]/80 font-medium transition-colors">
                                    santhushalakshan799@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-[var(--bg-card)] rounded-xl text-[var(--primary-accent)] border border-[var(--border-card)]">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <h3 className="text-[var(--text-primary)] font-bold text-xl mb-2">Location</h3>
                                <p className="text-[var(--text-secondary)]">Kandy, Sri Lanka</p>
                            </div>
                        </div>

                        <div className="pt-10 border-t border-[var(--border-card)]">
                            <h3 className="text-[var(--text-primary)] font-bold text-xl mb-6">Follow Me</h3>
                            <div className="flex gap-4">
                                <a href="https://github.com/santhush2001" target="_blank" rel="noopener noreferrer" className="p-4 bg-[var(--bg-card)] rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--primary-accent)]/50 border border-[var(--border-card)] transition-all">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/santhusha-lakshan-31a272321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="p-4 bg-[var(--bg-card)] rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--primary-accent)]/50 border border-[var(--border-card)] transition-all">
                                    <Linkedin size={24} />
                                </a>

                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-[var(--bg-card)] p-8 md:p-10 rounded-3xl border border-[var(--border-card)] shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--bg-body)]/50 border border-[var(--border-card)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-accent)] focus:ring-1 focus:ring-[var(--primary-accent)] transition-all placeholder-[var(--text-secondary)]"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--bg-body)]/50 border border-[var(--border-card)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-accent)] focus:ring-1 focus:ring-[var(--primary-accent)] transition-all placeholder-[var(--text-secondary)]"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--bg-body)]/50 border border-[var(--border-card)] rounded-xl text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-accent)] focus:ring-1 focus:ring-[var(--primary-accent)] transition-all placeholder-[var(--text-secondary)] resize-none"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-gradient-to-r from-[var(--primary-accent)] to-blue-600 hover:opacity-90 text-white font-bold rounded-xl transition-all shadow-lg shadow-[var(--primary-accent)]/25 flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
