import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[var(--bg-card)] py-8 border-t border-[var(--border-card)] mt-auto">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6">
                <p className="text-[var(--text-secondary)] text-sm">
                    © {new Date().getFullYear()} Santhusha Lakshan. All rights reserved.
                </p>

                <div className="flex gap-4">
                    <a href="https://github.com/santhush2001" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--primary-accent)] transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--primary-accent)] transition-colors">
                        <Linkedin size={20} />
                    </a>

                    <a href="mailto:contact@example.com" className="text-[var(--text-secondary)] hover:text-[var(--primary-accent)] transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
